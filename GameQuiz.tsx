import React, { useState } from 'react';
import { QuizQuestion, UiLanguage } from './types';
import { QUIZ_QUESTIONS } from './data';
import { InteractiveSentence } from './InteractiveSentence';
import { SpeechButton } from './SpeechButton';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Award } from 'lucide-react';
import { sounds } from './sound';

interface GameQuizProps {
  uiLang: UiLanguage;
  onAddScore: (points: number) => void;
  onGoHome?: () => void;
}

export const GameQuiz: React.FC<GameQuizProps> = ({ uiLang, onAddScore, onGoHome }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answeredMap, setAnsweredMap] = useState<Record<number, { chosen: number; isCorrect: boolean }>>({});
  const [showFinished, setShowFinished] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const isAnswered = selectedOption !== null;

  const handleSelectOption = (optIndex: number) => {
    if (isAnswered) return;
    const isCorrect = optIndex === currentQ.correctIndex;
    setSelectedOption(optIndex);
    setAnsweredMap(prev => ({
      ...prev,
      [currentIndex]: { chosen: optIndex, isCorrect }
    }));

    if (isCorrect) {
      sounds.playSuccess();
      onAddScore(10);
    } else {
      sounds.playError();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      sounds.playFanfare();
      setShowFinished(true);
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnsweredMap({});
    setShowFinished(false);
  };

  const correctCount = Object.values(answeredMap).filter(a => a.isCorrect).length;

  if (showFinished) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-950/90 via-neutral-900 to-red-950/80 border-2 border-amber-500/60 shadow-2xl space-y-5 animate-fadeIn">
          <Award className="w-20 h-20 text-amber-400 mx-auto animate-bounce" />
          <h2 className="font-display font-black text-3xl sm:text-4xl text-amber-100">
            ¡Has completado el Gran Quiz!
          </h2>
          <p className="text-xl text-amber-300 font-bold">
            Resultado: {correctCount} de {totalQuestions} respuestas correctas
          </p>
          <p className="text-neutral-300 text-sm sm:text-base max-w-md mx-auto">
            {correctCount >= 18
              ? '¡Excelente! Eres un auténtico maestro de la historia y del arte de Karl Briullov.'
              : correctCount >= 12
              ? '¡Muy bien hecho! Tienes un gran conocimiento sobre Pompeya y el cuadro.'
              : 'Buen intento. Puedes volver a realizar el cuestionario para perfeccionar tus conocimientos.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-sm shadow-xl transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repetir cuestionario</span>
            </button>
            {onGoHome && (
              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  onGoHome();
                }}
                className="px-6 py-3 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-amber-200 font-bold text-sm border border-amber-900/40 transition-colors cursor-pointer"
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
          <HelpCircle className="w-3.5 h-3.5" />
          {uiLang === 'es' ? 'Juego 2' : uiLang === 'hy' ? 'Խաղ 2' : 'Игра 2'}
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-amber-100">
          {uiLang === 'es' ? 'Quiz: ¿Qué sabes de Pompeya?' : uiLang === 'hy' ? 'Վիկտորինա. Ի՞նչ գիտես Պոմպեյի մասին' : 'Викторина: Что ты знаешь о Помпеях?'}
        </h1>
        <p className="text-neutral-400 text-sm">
          {uiLang === 'es'
            ? '20 preguntas para poner a prueba tus conocimientos sobre la pintura y los acontecimientos históricos.'
            : uiLang === 'hy'
            ? '20 հարցեր՝ ստուգելու գիտելիքներդ կտավի և պատմական իրադարձությունների մասին։'
            : '20 вопросов с четырьмя вариантами ответа и подробными объяснениями.'}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-bold text-neutral-400">
          <span>Pregunta {currentIndex + 1} de {totalQuestions}</span>
          <span>Aciertos: {correctCount}</span>
        </div>
        <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-neutral-900/90 border border-amber-900/50 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
        {/* Question Text */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              PREGUNTA #{currentIndex + 1}
            </span>
            <SpeechButton text={currentQ.question.es} />
          </div>
          <InteractiveSentence
            content={currentQ.question}
            uiLang={uiLang}
            defaultExpanded={false}
            className="bg-amber-950/30 border-amber-800/40"
          />
        </div>

        {/* 4 Choices */}
        <div className="space-y-2.5">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctIndex;
            let btnStyle = 'bg-neutral-800/80 hover:bg-neutral-800 border-neutral-700/60 text-neutral-200';

            if (isAnswered) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-100 font-semibold ring-2 ring-emerald-500/70 shadow-lg';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'bg-red-950/90 border-red-500 text-red-200';
              } else {
                btnStyle = 'bg-neutral-900/50 border-neutral-800 text-neutral-500 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
              >
                <div>
                  <span className="block font-medium text-amber-100">{opt.es}</span>
                  <span className="block text-xs text-amber-300/80 mt-1">{opt.ru || opt.hy}</span>
                </div>
                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Answer Explanation */}
        {isAnswered && (
          <div className="pt-4 border-t border-amber-950/80 space-y-4 animate-fadeIn">
            <InteractiveSentence
              content={currentQ.explanation}
              uiLang={uiLang}
              defaultExpanded={true}
              badge="ОБЪЯСНЕНИЕ / EXPLICACIÓN"
              className={
                selectedOption === currentQ.correctIndex
                  ? 'bg-emerald-950/30 border-emerald-800/40'
                  : 'bg-red-950/30 border-red-800/40'
              }
            />

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <span>{currentIndex < totalQuestions - 1 ? 'Siguiente pregunta' : 'Ver resultado final'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
