import React, { useState } from 'react';
import { PaintingHotspot, UiLanguage } from './types';
import { PAINTING_HOTSPOTS } from './data';
import { PaintingViewer } from './PaintingViewer';
import { InteractiveSentence } from './InteractiveSentence';
import { SpeechButton } from './SpeechButton';
import { MapPin, Sparkles, HelpCircle, CheckCircle2, XCircle, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { sounds } from './sound';

interface ExploreViewProps {
  uiLang: UiLanguage;
  onAddScore: (points: number) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({ uiLang, onAddScore }) => {
  const [selectedHotspot, setSelectedHotspot] = useState<PaintingHotspot>(PAINTING_HOTSPOTS[0]);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [answeredHotspots, setAnsweredHotspots] = useState<Record<string, boolean>>({});

  const handleSelectHotspot = (hotspot: PaintingHotspot) => {
    setSelectedHotspot(hotspot);
    setQuizAnswered(null);
  };

  const handleNext = () => {
    sounds.playClick();
    const currentIndex = PAINTING_HOTSPOTS.findIndex(h => h.id === selectedHotspot.id);
    const nextIndex = (currentIndex + 1) % PAINTING_HOTSPOTS.length;
    setSelectedHotspot(PAINTING_HOTSPOTS[nextIndex]);
    setQuizAnswered(null);
  };

  const handlePrev = () => {
    sounds.playClick();
    const currentIndex = PAINTING_HOTSPOTS.findIndex(h => h.id === selectedHotspot.id);
    const prevIndex = (currentIndex - 1 + PAINTING_HOTSPOTS.length) % PAINTING_HOTSPOTS.length;
    setSelectedHotspot(PAINTING_HOTSPOTS[prevIndex]);
    setQuizAnswered(null);
  };

  const handleOptionClick = (index: number) => {
    if (quizAnswered !== null) return;
    setQuizAnswered(index);
    if (index === selectedHotspot.question.correctIndex) {
      sounds.playSuccess();
      if (!answeredHotspots[selectedHotspot.id]) {
        onAddScore(10);
        setAnsweredHotspots(prev => ({ ...prev, [selectedHotspot.id]: true }));
      }
    } else {
      sounds.playError();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          {uiLang === 'es' ? 'Exploración interactiva' : uiLang === 'hy' ? 'Ինտերակտիվ ուսումնասիրություն' : 'Интерактивное исследование'}
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-amber-100 tracking-tight">
          {uiLang === 'es' ? 'Explora los detalles del cuadro' : uiLang === 'hy' ? 'Ուսումնասիրիր կտավի մանրամասները' : 'Исследуй детали шедевра'}
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base">
          {uiLang === 'es'
            ? 'Toca los puntos en la pintura para ampliar el detalle, leer su historia y responder a la pregunta de atención.'
            : uiLang === 'hy'
            ? 'Սեղմիր կտավի կետերի վրա՝ մանրամասնությունը մեծացնելու, պատմությունը կարդալու և հարցին պատասխանելու համար։'
            : 'Нажимай на точки на картине, чтобы приблизить фрагмент, узнать исторический факт и ответить на вопрос.'}
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Zoomable Painting */}
        <div className="lg:col-span-7 space-y-3">
          <PaintingViewer
            hotspots={PAINTING_HOTSPOTS}
            selectedHotspotId={selectedHotspot.id}
            onSelectHotspot={handleSelectHotspot}
            focusPoint={{ x: selectedHotspot.x, y: selectedHotspot.y, zoom: 2.2 }}
            uiLang={uiLang}
            minHeight="min-h-[380px] sm:min-h-[480px]"
          />

          {/* Hotspots selector chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {PAINTING_HOTSPOTS.map((h, idx) => {
              const isSelected = selectedHotspot.id === h.id;
              const isDone = answeredHotspots[h.id];
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => handleSelectHotspot(h)}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                      : 'bg-neutral-900/90 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  <MapPin className="w-3 h-3" />
                  <span>{idx + 1}. {h.name.ru || h.name.es}</span>
                  {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detail Inspector Card */}
        <div className="lg:col-span-5 bg-neutral-900/90 border border-amber-900/50 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-5 backdrop-blur-md">
          {/* Top Detail Navigation */}
          <div className="flex items-center justify-between border-b border-amber-950 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Detalle {PAINTING_HOTSPOTS.findIndex(h => h.id === selectedHotspot.id) + 1} de {PAINTING_HOTSPOTS.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                title="Anterior"
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-amber-600 text-amber-200 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                title="Siguiente"
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-amber-600 text-amber-200 hover:text-black transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title & Speech */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-amber-100">
                {selectedHotspot.name.es}
              </h2>
              <p className="text-sm text-amber-400/90 font-medium mt-0.5">
                {selectedHotspot.name.ru || selectedHotspot.name.hy}
              </p>
            </div>
            <SpeechButton text={selectedHotspot.name.es} />
          </div>

          {/* Description sentence with Russian tap-to-reveal */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              Descripción en español (toca para ver la traducción al ruso)
            </label>
            <InteractiveSentence content={selectedHotspot.description} uiLang={uiLang} defaultExpanded={false} />
          </div>

          {/* Historical / Art Fact */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Dato histórico y artístico
            </label>
            <InteractiveSentence
              content={selectedHotspot.fact}
              uiLang={uiLang}
              defaultExpanded={false}
              badge="ИСТОРИЧЕСКИЙ ФАКТ"
            />
          </div>

          {/* Attentiveness Quiz */}
          <div className="pt-3 border-t border-amber-950/80 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Вопрос на внимательность (+10 очков)</span>
            </div>

            <InteractiveSentence
              content={selectedHotspot.question.question}
              uiLang={uiLang}
              className="bg-amber-950/20 border-amber-900/30"
            />

            <div className="space-y-2 pt-1">
              {selectedHotspot.question.options.map((opt, idx) => {
                const isSelected = quizAnswered === idx;
                const isCorrect = idx === selectedHotspot.question.correctIndex;
                let btnStyle = 'bg-neutral-800/80 hover:bg-neutral-800 border-neutral-700/60 text-neutral-200';

                if (quizAnswered !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-semibold ring-1 ring-emerald-400';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-red-950/90 border-red-500 text-red-200';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleOptionClick(idx)}
                    disabled={quizAnswered !== null}
                    className={`w-full text-left p-3 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <div>
                      <span className="block text-amber-100">{opt.es}</span>
                      <span className="block text-xs text-amber-300/80 mt-0.5">{opt.ru || opt.hy}</span>
                    </div>
                    {quizAnswered !== null && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {quizAnswered !== null && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation */}
            {quizAnswered !== null && (
              <div className="pt-2 animate-fadeIn">
                <InteractiveSentence
                  content={selectedHotspot.question.explanation}
                  uiLang={uiLang}
                  defaultExpanded={true}
                  badge="ОБЪЯСНЕНИЕ"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
