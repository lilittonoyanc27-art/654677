import React, { useState } from 'react';
import { TrueFalseStatement, UiLanguage } from './types';
import { TRUE_FALSE_STATEMENTS } from './data';
import { InteractiveSentence } from './InteractiveSentence';
import { SpeechButton } from './SpeechButton';
import { Check, X, ArrowRight, RotateCcw, Trophy, CheckCircle2, XCircle } from 'lucide-react';
import { sounds } from './sound';

interface GameTrueFalseProps {
  uiLang: UiLanguage;
  onAddScore: (points: number) => void;
  onGoHome?: () => void;
}

export const GameTrueFalse: React.FC<GameTrueFalseProps> = ({ uiLang, onAddScore, onGoHome }) => {
  const [index, setIndex] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentItem = TRUE_FALSE_STATEMENTS[index];
  const total = TRUE_FALSE_STATEMENTS.length;
  const isAnswered = userChoice !== null;

  const handleChoose = (choice: boolean) => {
    if (isAnswered) return;
    const isCorrect = choice === currentItem.isTrue;
    setUserChoice(choice);
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
      setUserChoice(null);
    } else {
      sounds.playFanfare();
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setIndex(0);
    setUserChoice(null);
    setAnsweredCount(0);
    setCorrectCount(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border-2 border-amber-500/60 shadow-2xl space-y-5 animate-fadeIn">
          <Trophy className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
          <h2 className="font-display font-black text-3xl text-amber-100">
            ¡Juego completado!
          </h2>
          <p className="text-xl text-amber-300 font-bold">
            Puntuación: {correctCount} de {total} correctas
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
          {uiLang === 'es' ? 'Juego 3' : uiLang === 'hy' ? 'Խաղ 3' : 'Игра 3'}
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-amber-100">
          {uiLang === 'es' ? 'Verdadero o Falso' : uiLang === 'hy' ? 'Ճիշտ թե սխալ' : 'Правда или ложь'}
        </h1>
        <p className="text-neutral-400 text-sm">
          {uiLang === 'es'
            ? 'Lee con atención la afirmación y decide si es verdadera o falsa.'
            : uiLang === 'hy'
            ? 'Ուշադիր կարդա պնդումը և որոշիր՝ այն ճիշտ է, թե սխալ։'
            : 'Внимательно прочитай утверждение и определи, правда это или ложь.'}
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between text-xs font-bold text-neutral-400">
        <span>Afirmación {index + 1} de {total}</span>
        <span>Aciertos: {correctCount} / {answeredCount}</span>
      </div>

      {/* Statement Card */}
      <div className="bg-neutral-900/90 border border-amber-900/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-md">
        <div className="flex items-start justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            AFIRMACIÓN #{index + 1}
          </span>
          <SpeechButton text={currentItem.statement.es} />
        </div>

        <InteractiveSentence
          content={currentItem.statement}
          uiLang={uiLang}
          defaultExpanded={false}
          className="bg-amber-950/30 border-amber-800/40"
        />

        {/* Verdadero / Falso Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <button
            type="button"
            onClick={() => handleChoose(true)}
            disabled={isAnswered}
            className={`p-4 rounded-2xl border text-base font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isAnswered
                ? currentItem.isTrue
                  ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200 ring-2 ring-emerald-400'
                  : userChoice === true
                  ? 'bg-red-950/90 border-red-500 text-red-200'
                  : 'bg-neutral-900 text-neutral-600 border-neutral-800'
                : 'bg-emerald-950/40 hover:bg-emerald-900/60 border-emerald-800/50 text-emerald-300 hover:scale-[1.02]'
            }`}
          >
            <Check className="w-5 h-5" />
            <span>Verdadero (Правда)</span>
          </button>

          <button
            type="button"
            onClick={() => handleChoose(false)}
            disabled={isAnswered}
            className={`p-4 rounded-2xl border text-base font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isAnswered
                ? !currentItem.isTrue
                  ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200 ring-2 ring-emerald-400'
                  : userChoice === false
                  ? 'bg-red-950/90 border-red-500 text-red-200'
                  : 'bg-neutral-900 text-neutral-600 border-neutral-800'
                : 'bg-red-950/40 hover:bg-red-900/60 border-red-800/50 text-red-300 hover:scale-[1.02]'
            }`}
          >
            <X className="w-5 h-5" />
            <span>Falso (Ложь)</span>
          </button>
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div className="pt-4 border-t border-amber-950 space-y-4 animate-fadeIn">
            <InteractiveSentence
              content={currentItem.explanation}
              uiLang={uiLang}
              defaultExpanded={true}
              badge={userChoice === currentItem.isTrue ? '¡CORRECTO! / ВЕРНО' : 'ОТВЕТ / RESPUESTA'}
              className={
                userChoice === currentItem.isTrue
                  ? 'bg-emerald-950/30 border-emerald-800/40'
                  : 'bg-red-950/30 border-red-800/40'
              }
            />

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-xl transition-all cursor-pointer"
              >
                <span>{index < total - 1 ? 'Siguiente afirmación' : 'Ver resultado'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
