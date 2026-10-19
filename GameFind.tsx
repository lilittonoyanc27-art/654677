import React, { useState } from 'react';
import { FindTask, UiLanguage } from './types';
import { FIND_TASKS } from './data';
import { PaintingViewer } from './PaintingViewer';
import { InteractiveSentence } from './InteractiveSentence';
import { SpeechButton } from './SpeechButton';
import { Sparkles, HelpCircle, CheckCircle2, RotateCcw, ArrowRight, Lightbulb, Trophy } from 'lucide-react';
import { sounds } from './sound';

interface GameFindProps {
  uiLang: UiLanguage;
  onAddScore: (points: number) => void;
}

export const GameFind: React.FC<GameFindProps> = ({ uiLang, onAddScore }) => {
  const [taskIndex, setTaskIndex] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'retry'>('idle');
  const [targetHighlight, setTargetHighlight] = useState<{
    x: number;
    y: number;
    radius: number;
    isSuccess?: boolean;
  } | null>(null);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [scoreEarned, setScoreEarned] = useState<number>(0);

  const currentTask = FIND_TASKS[taskIndex];
  const isFinished = Object.keys(completedTasks).length === FIND_TASKS.length;

  const handleCanvasClick = (xPercent: number, yPercent: number) => {
    if (status === 'success') return;

    // Euclidean distance in percentage units
    const dx = xPercent - currentTask.x;
    const dy = yPercent - currentTask.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= currentTask.radius) {
      // Correct!
      sounds.playSuccess();
      setStatus('success');
      setTargetHighlight({
        x: currentTask.x,
        y: currentTask.y,
        radius: currentTask.radius,
        isSuccess: true
      });

      if (!completedTasks[currentTask.id]) {
        onAddScore(10);
        setScoreEarned(prev => prev + 10);
        setCompletedTasks(prev => ({ ...prev, [currentTask.id]: true }));
      }
    } else {
      // Wrong
      sounds.playError();
      setStatus('retry');
      setTargetHighlight({
        x: xPercent,
        y: yPercent,
        radius: 4,
        isSuccess: false
      });
      setTimeout(() => {
        setTargetHighlight(null);
      }, 1500);
    }
  };

  const handleNextTask = () => {
    sounds.playClick();
    setStatus('idle');
    setShowHint(false);
    setTargetHighlight(null);
    if (taskIndex < FIND_TASKS.length - 1) {
      setTaskIndex(taskIndex + 1);
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setTaskIndex(0);
    setStatus('idle');
    setShowHint(false);
    setTargetHighlight(null);
    setCompletedTasks({});
    setScoreEarned(0);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          {uiLang === 'es' ? 'Juego 1' : uiLang === 'hy' ? 'Խաղ 1' : 'Игра 1'}
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-amber-100">
          {uiLang === 'es' ? 'Encuentra en el cuadro' : uiLang === 'hy' ? 'Գտիր նկարում' : 'Найди на картине'}
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base">
          {uiLang === 'es'
            ? 'Lee la consigna en español y toca el lugar exacto en la auténtica pintura de Karl Briullov.'
            : uiLang === 'hy'
            ? 'Կարդա հանձնարարությունը իսպաներենով և սեղմիր ճշգրիտ տեղը Կառլ Բրյուլովի իրական կտավի վրա։'
            : 'Прочитай задание и нажми на соответствующее место на картине Карла Брюллова.'}
        </p>
      </div>

      {/* Task Mission Card */}
      <div className="bg-neutral-900/90 border border-amber-900/50 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-950 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-amber-900/50 text-amber-200 font-bold text-xs border border-amber-700/50">
              Misión {taskIndex + 1} de {FIND_TASKS.length}
            </span>
            <span className="text-xs text-neutral-400">
              {Object.keys(completedTasks).length} resueltos
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setShowHint(!showHint);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-amber-300 text-xs font-semibold border border-neutral-700 transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{showHint ? 'Ocultar pista' : 'Ver pista'}</span>
            </button>
            <SpeechButton text={currentTask.prompt.es} />
          </div>
        </div>

        {/* Task Prompt with Armenian tap-to-reveal */}
        <div>
          <InteractiveSentence
            content={currentTask.prompt}
            uiLang={uiLang}
            defaultExpanded={false}
            className="bg-amber-950/30 border-amber-800/40"
          />
        </div>

        {/* Hint drop */}
        {showHint && (
          <div className="animate-fadeIn">
            <InteractiveSentence
              content={currentTask.hint}
              uiLang={uiLang}
              defaultExpanded={true}
              badge="ПОДСКАЗКА / PISTA"
              className="bg-yellow-950/20 border-yellow-700/40"
            />
          </div>
        )}

        {/* Feedback message */}
        {status === 'retry' && (
          <div className="p-3 rounded-xl bg-red-950/80 border border-red-700 text-red-200 text-sm font-semibold flex items-center justify-between animate-shake">
            <span>¡Inténtalo otra vez! Observa bien la pista o busca con más atención.</span>
            <button
              type="button"
              onClick={() => setShowHint(true)}
              className="text-xs text-amber-300 underline font-bold cursor-pointer"
            >
              Ver pista
            </button>
          </div>
        )}

        {status === 'success' && (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-600 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-emerald-300 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ¡Correcto! Has encontrado el detalle (+10 pts)
              </span>
              {taskIndex < FIND_TASKS.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNextTask}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-colors cursor-pointer"
                >
                  <span>Siguiente misión</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-amber-300 font-bold text-xs">
                  ¡Todas las misiones completadas!
                </span>
              )}
            </div>
            <InteractiveSentence
              content={currentTask.explanation}
              uiLang={uiLang}
              defaultExpanded={true}
              badge="EXPLICACIÓN HISTÓRICA"
            />
          </div>
        )}
      </div>

      {/* Main Interactive Painting */}
      <div className="relative">
        <PaintingViewer
          onCanvasClick={handleCanvasClick}
          highlightTarget={targetHighlight}
          focusPoint={
            status === 'success'
              ? { x: currentTask.x, y: currentTask.y, zoom: 2.2 }
              : null
          }
          uiLang={uiLang}
          showCaption={true}
          minHeight="min-h-[460px] sm:min-h-[600px]"
        />
      </div>

      {/* Finished Summary Modal / Card */}
      {isFinished && (
        <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-950 via-neutral-900 to-red-950 border-2 border-amber-500/60 text-center space-y-4 shadow-2xl animate-fadeIn">
          <Trophy className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
          <h2 className="font-display font-black text-2xl sm:text-3xl text-amber-100">
            ¡Felicidades! Has completado las 12 misiones de observación
          </h2>
          <p className="text-amber-200 text-sm sm:text-base max-w-xl mx-auto">
            Conoces cada rincón y cada personaje de la obra maestra de Karl Briullov.
          </p>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-sm shadow-xl transition-transform hover:scale-105 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Jugar de nuevo</span>
          </button>
        </div>
      )}
    </div>
  );
};
