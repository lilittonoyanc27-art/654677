import React, { useState } from 'react';
import { TimelineCard, UiLanguage } from './types';
import { TIMELINE_CARDS } from './data';
import { InteractiveSentence } from './InteractiveSentence';
import { SpeechButton } from './SpeechButton';
import { ArrowUp, ArrowDown, CheckCircle2, RotateCcw, Trophy, Sparkles, AlertCircle } from 'lucide-react';
import { sounds } from './sound';

interface GameOrderProps {
  uiLang: UiLanguage;
  onAddScore: (points: number) => void;
  onGoHome?: () => void;
}

export const GameOrder: React.FC<GameOrderProps> = ({ uiLang, onAddScore, onGoHome }) => {
  // Scramble initial cards
  const [cards, setCards] = useState<TimelineCard[]>(() => {
    return [...TIMELINE_CARDS].sort(() => Math.random() - 0.5);
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const moveUp = (index: number) => {
    if (index === 0) return;
    sounds.playClick();
    const newCards = [...cards];
    const temp = newCards[index];
    newCards[index] = newCards[index - 1];
    newCards[index - 1] = temp;
    setCards(newCards);
    setIsChecked(false);
  };

  const moveDown = (index: number) => {
    if (index === cards.length - 1) return;
    sounds.playClick();
    const newCards = [...cards];
    const temp = newCards[index];
    newCards[index] = newCards[index + 1];
    newCards[index + 1] = temp;
    setCards(newCards);
    setIsChecked(false);
  };

  const handleCheck = () => {
    const allCorrect = cards.every((card, idx) => card.correctOrder === idx + 1);
    setIsChecked(true);
    setIsCorrect(allCorrect);

    if (allCorrect) {
      sounds.playFanfare();
      onAddScore(30);
    } else {
      sounds.playError();
    }
  };

  const handleShuffle = () => {
    sounds.playClick();
    setCards([...TIMELINE_CARDS].sort(() => Math.random() - 0.5));
    setIsChecked(false);
    setIsCorrect(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          {uiLang === 'es' ? 'Juego 5' : uiLang === 'hy' ? 'Խաղ 5' : 'Игра 5'}
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-amber-100">
          {uiLang === 'es' ? 'Ordena la historia' : uiLang === 'hy' ? 'Դասավորիր պատմությունը' : 'Восстанови историю'}
        </h1>
        <p className="text-neutral-400 text-sm">
          {uiLang === 'es'
            ? 'Usa las flechas para ordenar los acontecimientos desde la antigua Roma hasta la creación de la obra.'
            : uiLang === 'hy'
            ? 'Օգտագործիր սլաքները՝ իրադարձությունները ժամանակագրական կարգով դասավորելու համար։'
            : 'Расположи события в правильном хронологическом порядке от древности до наших дней.'}
        </p>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleShuffle}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 text-amber-200 text-xs font-semibold hover:bg-neutral-700 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Mezclar de nuevo</span>
        </button>

        <button
          type="button"
          onClick={handleCheck}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-xl transition-all hover:scale-105 cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Comprobar orden (+30 pts)</span>
        </button>
      </div>

      {/* Verification Feedback Banner */}
      {isChecked && (
        <div
          className={`p-4 rounded-2xl border text-sm font-semibold flex items-center justify-between animate-fadeIn ${
            isCorrect
              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
              : 'bg-red-950/80 border-red-600 text-red-200'
          }`}
        >
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            )}
            <span>
              {isCorrect
                ? '¡Extraordinario! Has reconstruido con total precisión la línea temporal histórica.'
                : 'Algunas cartas no están en el orden correcto. Revisa las fechas e inténtalo de nuevo.'}
            </span>
          </div>
        </div>
      )}

      {/* Cards List */}
      <div className="space-y-3">
        {cards.map((card, idx) => {
          const cardIsCorrectPlace = isChecked && card.correctOrder === idx + 1;
          const cardIsWrongPlace = isChecked && card.correctOrder !== idx + 1;

          return (
            <div
              key={card.id}
              className={`rounded-2xl p-4 sm:p-5 border transition-all duration-200 backdrop-blur-md flex items-start gap-4 ${
                cardIsCorrectPlace
                  ? 'bg-emerald-950/40 border-emerald-500/80 ring-1 ring-emerald-400'
                  : cardIsWrongPlace
                  ? 'bg-red-950/40 border-red-500/80'
                  : 'bg-neutral-900/90 border-amber-900/40 hover:border-amber-700/60'
              }`}
            >
              {/* Order Number Badge */}
              <div className="w-8 h-8 rounded-xl bg-amber-950 border border-amber-600/50 flex items-center justify-center font-display font-black text-amber-300 text-sm shrink-0 mt-0.5">
                {idx + 1}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                    {card.year}
                  </span>
                  <SpeechButton text={card.title.es} size="sm" />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-amber-100">
                  {card.title.es}
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  {card.title.ru || card.title.hy}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                  {card.description.ru || card.description.es}
                </p>
              </div>

              {/* Move Up / Move Down Controls */}
              <div className="flex flex-col gap-1 shrink-0 pt-0.5">
                <button
                  type="button"
                  onClick={() => moveUp(idx)}
                  disabled={idx === 0}
                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                    idx === 0
                      ? 'opacity-20 cursor-not-allowed border-transparent text-neutral-600'
                      : 'bg-neutral-800 hover:bg-amber-600 text-amber-200 hover:text-black border-neutral-700'
                  }`}
                  title="Mover arriba"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => moveDown(idx)}
                  disabled={idx === cards.length - 1}
                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                    idx === cards.length - 1
                      ? 'opacity-20 cursor-not-allowed border-transparent text-neutral-600'
                      : 'bg-neutral-800 hover:bg-amber-600 text-amber-200 hover:text-black border-neutral-700'
                  }`}
                  title="Mover abajo"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
