import React, { useState } from 'react';
import { DetectiveTask, UiLanguage } from './types';
import { DETECTIVE_TASKS } from './data';
import { PaintingViewer } from './PaintingViewer';
import { InteractiveSentence } from './InteractiveSentence';
import { SpeechButton } from './SpeechButton';
import { Search, Sparkles, CheckCircle2, XCircle, ArrowRight, RotateCcw, Lightbulb } from 'lucide-react';
import { sounds } from './sound';

interface GameDetectiveProps {
  uiLang: UiLanguage;
  onAddScore: (points: number) => void;
  onGoHome?: () => void;
}

export const GameDetective: React.FC<GameDetectiveProps> = ({ uiLang, onAddScore, onGoHome }) => {
  const [taskIdx, setTaskIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [solvedCount, setSolvedCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentTask = DETECTIVE_TASKS[taskIdx];
  const total = DETECTIVE_TASKS.length;
  const isAnswered = selectedOpt !== null;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    const option = currentTask.options[idx];
    setSelectedOpt(idx);

    if (option.isCorrect) {
      sounds.playSuccess();
      setSolvedCount(prev => prev + 1);
      onAddScore(15);
    } else {
      sounds.playError();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (taskIdx < total - 1) {
      setTaskIdx(taskIdx + 1);
      setSelectedOpt(null);
    } else {
      sounds.playFanfare();
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setTaskIdx(0);
    setSelectedOpt(null);
    setSolvedCount(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border-2 border-amber-500/60 shadow-2xl space-y-5 animate-fadeIn">
          <Search className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
          <h2 className="font-display font-black text-3xl text-amber-100">
            ¡Caso resuelto! Has completado los 12 enigmas
          </h2>
          <p className="text-xl text-amber-300 font-bold">
            Resolviste con éxito: {solvedCount} de {total} enigmas
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm cursor-pointer shadow-lg"
            >
              Investigar de nuevo
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Search className="w-3.5 h-3.5" />
          {uiLang === 'es' ? 'Juego 4' : uiLang === 'hy' ? 'Խաղ 4' : 'Игра 4'}
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-amber-100">
          {uiLang === 'es' ? 'Detective del arte' : uiLang === 'hy' ? 'Արվեստի խուզարկու' : 'Детектив искусства'}
        </h1>
        <p className="text-neutral-400 text-sm">
          {uiLang === 'es'
            ? 'Examina la pintura con lupa, descubre las pistas ocultas y desvela los secretos del maestro Briullov.'
            : uiLang === 'hy'
            ? 'Ուսումնասիրիր կտավը խոշորացույցով, բացահայտիր թաքնված հուշումները և Բրյուլովի գաղտնիքները։'
            : 'Исследуй картину, находи скрытые подсказки и раскрывай тайны мастера Брюллова.'}
        </p>
      </div>

      {/* Grid: Painting Zoom on Left, Mystery on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-6 space-y-2">
          <PaintingViewer
            focusPoint={{ x: currentTask.focusX, y: currentTask.focusY, zoom: 2.4 }}
            uiLang={uiLang}
            minHeight="min-h-[380px] sm:min-h-[460px]"
          />
          <div className="p-3 rounded-xl bg-neutral-900/80 border border-amber-950 text-xs text-amber-300 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
            <span>La pintura se enfoca automáticamente en la zona donde se encuentra la pista del enigma.</span>
          </div>
        </div>

        <div className="lg:col-span-6 bg-neutral-900/90 border border-amber-900/50 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md space-y-5">
          <div className="flex items-center justify-between border-b border-amber-950 pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Caso #{taskIdx + 1} de {total}
            </span>
            <span className="text-xs text-neutral-400">
              Resueltos: {solvedCount}
            </span>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-amber-100">
              {currentTask.title.es}
            </h2>
            <p className="text-xs text-amber-400 mt-0.5">
              {currentTask.title.ru || currentTask.title.hy}
            </p>
          </div>

          {/* Mystery question */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              El misterio visual
            </label>
            <InteractiveSentence content={currentTask.mystery} uiLang={uiLang} defaultExpanded={false} />
          </div>

          {/* Clue */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Pista del detective
            </label>
            <InteractiveSentence
              content={currentTask.clue}
              uiLang={uiLang}
              defaultExpanded={false}
              badge="ПОДСКАЗКА ДЕТЕКТИВА"
            />
          </div>

          {/* Options */}
          <div className="space-y-2.5 pt-2">
            {currentTask.options.map((opt, idx) => {
              const isSelected = selectedOpt === idx;
              let btnStyle = 'bg-neutral-800/80 hover:bg-neutral-800 border-neutral-700/60 text-neutral-200';

              if (isAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-100 font-semibold ring-2 ring-emerald-500';
                } else if (isSelected && !opt.isCorrect) {
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
                  className={`w-full text-left p-3.5 rounded-2xl border text-sm transition-all flex items-start justify-between gap-2 cursor-pointer ${btnStyle}`}
                >
                  <div>
                    <span className="block text-amber-100 font-medium">{opt.text.es}</span>
                    <span className="block text-xs text-amber-300/80 mt-1">{opt.text.ru || opt.text.hy}</span>
                  </div>
                  {isAnswered && opt.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && isSelected && !opt.isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Next */}
          {isAnswered && (
            <div className="pt-3 border-t border-amber-950 space-y-4 animate-fadeIn">
              <InteractiveSentence
                content={currentTask.options[selectedOpt].explanation}
                uiLang={uiLang}
                defaultExpanded={true}
                badge="INFORME DEL CASO"
                className={
                  currentTask.options[selectedOpt].isCorrect
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
                  <span>{taskIdx < total - 1 ? 'Siguiente caso' : 'Ver conclusión'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
