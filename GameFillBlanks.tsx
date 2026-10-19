import React, { useState } from 'react';
import { FillBlankTask, UiLanguage } from './types';
import { FILL_BLANK_TASKS } from './data';
import { InteractiveSentence } from './InteractiveSentence';
import { SpeechButton } from './SpeechButton';
import { Edit3, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Award } from 'lucide-react';
import { sounds } from './sound';

interface GameFillBlanksProps {
  uiLang: UiLanguage;
  onAddScore: (points: number) => void;
  onGoHome?: () => void;
}

export const GameFillBlanks: React.FC<GameFillBlanksProps> = ({ uiLang, onAddScore, onGoHome }) => {
  const [index, setIndex] = useState<number>(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentTask = FILL_BLANK_TASKS[index];
  const total = FILL_BLANK_TASKS.length;
  const isAnswered = selectedIdx !== null;

  const handleSelect = (optIdx: number) => {
    if (isAnswered) return;
    const isCorrect = optIdx === currentTask.correctIndex;
    setSelectedIdx(optIdx);
    setAnsweredCount(prev => prev + 1);

    if (isCorrect) {
      sounds.playSuccess();
      setCorrectCount(prev => prev + 1);
      onAddScore(10);
    } else {
      sounds.playError();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (index < total - 1) {
      setIndex(index + 1);
      setSelectedIdx(null);
    } else {
      sounds.playFanfare();
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setIndex(0);
    setSelectedIdx(null);
    setAnsweredCount(0);
    setCorrectCount(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border-2 border-amber-500/60 shadow-2xl space-y-5 animate-fadeIn">
          <Award className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
          <h2 className="font-display font-black text-3xl text-amber-100">
            ¡Completaste las 15 frases!
          </h2>
          <p className="text-xl text-amber-300 font-bold">
            Resultado: {correctCount} de {total} respuestas correctas
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm cursor-pointer shadow-lg"
            >
              Repetir juego
            </button>
            {onGoHome && (
              <button
                type="button"
                onClick={onGoHome}
                className="px-6 py-3 rounded-2xl bg-neutral-800 text-amber-200 font-bold text-sm cursor-pointer"
              >
                Ir al inicio
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Edit3 className="w-3.5 h-3.5" />
          {uiLang === 'es' ? 'Juego 6' : uiLang === 'hy' ? 'Խաղ 6' : 'Игра 6'}
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-amber-100">
          {uiLang === 'es' ? 'Completa la frase' : uiLang === 'hy' ? 'Լրացրու նախադասությունը' : 'Заполни пропуски'}
        </h1>
        <p className="text-neutral-400 text-sm">
          {uiLang === 'es'
            ? 'Elige la palabra correcta para completar la frase en español.'
            : uiLang === 'hy'
            ? 'Ընտրիր ճիշտ բառը՝ իսպաներեն նախադասությունն ավարտելու համար։'
            : 'Выбери правильное слово для завершения предложения.'}
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between text-xs font-bold text-neutral-400">
        <span>Frase {index + 1} de {total}</span>
        <span>Aciertos: {correctCount} / {answeredCount}</span>
      </div>

      {/* Task Card */}
      <div className="bg-neutral-900/90 border border-amber-900/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-amber-950 pb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            FRASE #{index + 1}
          </span>
          {isAnswered && <SpeechButton text={currentTask.fullTranslation.es} />}
        </div>

        {/* Incomplete sentence with highlighted blank slot */}
        <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-800/40 text-lg sm:text-xl font-medium text-amber-100 leading-relaxed">
          <span>{currentTask.sentenceBefore} </span>
          <span
            className={`inline-block px-3 py-0.5 rounded-lg font-bold border-b-2 transition-all ${
              isAnswered
                ? selectedIdx === currentTask.correctIndex
                  ? 'bg-emerald-900/60 border-emerald-400 text-emerald-200'
                  : 'bg-red-900/60 border-red-400 text-red-200'
                : 'bg-amber-900/40 border-amber-400 text-amber-300 min-w-[120px] text-center'
            }`}
          >
            {isAnswered ? currentTask.options[selectedIdx] : '_______'}
          </span>
          <span> {currentTask.sentenceAfter}</span>
        </div>

        {/* 3 Choice Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {currentTask.options.map((opt, optIdx) => {
            const isSelected = selectedIdx === optIdx;
            const isCorrect = optIdx === currentTask.correctIndex;
            let btnStyle = 'bg-neutral-800/80 hover:bg-neutral-800 border-neutral-700/60 text-neutral-200';

            if (isAnswered) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-950 border-emerald-500 text-emerald-100 font-bold ring-2 ring-emerald-500';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'bg-red-950 border-red-500 text-red-200';
              } else {
                btnStyle = 'bg-neutral-900/50 border-neutral-800 text-neutral-500 opacity-60';
              }
            }

            return (
              <button
                key={optIdx}
                type="button"
                onClick={() => handleSelect(optIdx)}
                disabled={isAnswered}
                className={`p-4 rounded-2xl border text-base font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${btnStyle}`}
              >
                <span>{opt}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400" />}
              </button>
            );
          })}
        </div>

        {/* Explanation & Full Armenian Translation */}
        {isAnswered && (
          <div className="pt-4 border-t border-amber-950 space-y-4 animate-fadeIn">
            <InteractiveSentence
              content={currentTask.fullTranslation}
              uiLang={uiLang}
              defaultExpanded={true}
              badge="ПОЛНЫЙ ПЕРЕВОД / TRADUCCIÓN COMPLETA"
            />

            <InteractiveSentence
              content={currentTask.explanation}
              uiLang={uiLang}
              defaultExpanded={false}
              badge="ГРАММАТИЧЕСКОЕ ОБЪЯСНЕНИЕ"
              className="bg-neutral-950/40 border-neutral-800"
            />

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-xl transition-all cursor-pointer"
              >
                <span>{index < total - 1 ? 'Siguiente frase' : 'Ver resultado'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
