import React, { useState } from 'react';
import { HistoryChapter, UiLanguage } from './types';
import { HISTORY_CHAPTERS, PAINTING_INFO } from './data';
import { InteractiveSentence } from './InteractiveSentence';
import { SpeechButton } from './SpeechButton';
import { BookOpen, ChevronRight, ChevronLeft, Sparkles, Quote, Check, Compass } from 'lucide-react';
import { sounds } from './sound';

interface HistoryViewProps {
  uiLang: UiLanguage;
  onExplorePainting?: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({ uiLang, onExplorePainting }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [readChapters, setReadChapters] = useState<Record<number, boolean>>({ 0: true });

  const currentChapter = HISTORY_CHAPTERS[activeChapterIndex];

  const handleSelectChapter = (index: number) => {
    sounds.playClick();
    setActiveChapterIndex(index);
    setReadChapters(prev => ({ ...prev, [index]: true }));
  };

  const handleNext = () => {
    sounds.playWhoosh();
    if (activeChapterIndex < HISTORY_CHAPTERS.length - 1) {
      const nextIdx = activeChapterIndex + 1;
      setActiveChapterIndex(nextIdx);
      setReadChapters(prev => ({ ...prev, [nextIdx]: true }));
    }
  };

  const handlePrev = () => {
    sounds.playWhoosh();
    if (activeChapterIndex > 0) {
      setActiveChapterIndex(activeChapterIndex - 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          {uiLang === 'es' ? 'Historia del cuadro y de Pompeya' : uiLang === 'hy' ? 'Կտավի և Պոմպեյի պատմությունը' : 'История картины и Помпей'}
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-amber-100">
          {uiLang === 'es' ? 'Historia de una obra maestra' : uiLang === 'hy' ? 'Գլուխգործոցի պատմությունը' : 'История шедевра'}
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
          {uiLang === 'es'
            ? 'Seis capítulos ilustrados para descubrir los secretos de Pompeya y de Karl Briullov. Toca cualquier frase para ver su traducción al armenio.'
            : uiLang === 'hy'
            ? 'Վեց պատկերազարդ գլուխներ՝ Պոմպեյի և Կառլ Բրյուլովի գաղտնիքները բացահայտելու համար։ Սեղմիր ցանկացած նախադասության վրա՝ հայերեն թարգմանությունը տեսնելու համար։'
            : 'Шесть иллюстрированных глав. Нажимай на предложения для перевода на армянский язык.'}
        </p>
      </div>

      {/* Chapters Horizontal Tab Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {HISTORY_CHAPTERS.map((ch, idx) => {
          const isActive = idx === activeChapterIndex;
          const isRead = readChapters[idx];
          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => handleSelectChapter(idx)}
              className={`shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-600 text-neutral-950 shadow-lg shadow-amber-600/30 ring-2 ring-amber-400'
                  : 'bg-neutral-900/90 text-amber-200/80 hover:bg-neutral-850 border border-amber-950'
              }`}
            >
              <span>Capítulo {ch.number}</span>
              {isRead && <Check className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          );
        })}
      </div>

      {/* Chapter Reader Card */}
      <article className="bg-neutral-900/90 border border-amber-900/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-md">
        {/* Chapter Header */}
        <div className="border-b border-amber-950 pb-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Capítulo {currentChapter.number} de {HISTORY_CHAPTERS.length}
            </span>
            <SpeechButton text={currentChapter.title.es} />
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-amber-100">
            {currentChapter.title.es}
          </h2>
          <p className="text-base text-amber-300 font-medium font-sans">
            {currentChapter.title.ru || currentChapter.title.hy}
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 pt-1">
            {currentChapter.subtitle.ru || currentChapter.subtitle.es}
          </p>
        </div>

        {/* Famous Historical Quote */}
        {currentChapter.quote && (
          <div className="relative rounded-2xl bg-gradient-to-br from-amber-950/40 to-neutral-950/60 border border-amber-800/40 p-5 sm:p-6 pl-12 shadow-inner">
            <Quote className="absolute left-4 top-4 w-6 h-6 text-amber-500/50" />
            <p className="font-display italic text-base sm:text-lg text-amber-100/95 leading-relaxed">
              «{currentChapter.quote.es}»
            </p>
            <p className="text-xs text-amber-400/90 mt-2 font-medium">
              «{currentChapter.quote.ru || currentChapter.quote.hy}»
            </p>
            {currentChapter.quoteAuthor && (
              <span className="block text-right text-xs uppercase tracking-wider text-neutral-400 mt-2">
                — {currentChapter.quoteAuthor}
              </span>
            )}
          </div>
        )}

        {/* Paragraphs with interactive translation on tap */}
        <div className="space-y-4">
          {currentChapter.paragraphs.map((para, idx) => (
            <InteractiveSentence
              key={idx}
              content={para}
              uiLang={uiLang}
              defaultExpanded={false}
              badge={`PÁRRAFO ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom Chapter Navigation & Explore button */}
        <div className="pt-6 border-t border-amber-950 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeChapterIndex === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeChapterIndex === 0
                ? 'opacity-30 cursor-not-allowed bg-neutral-950 text-neutral-500'
                : 'bg-neutral-800 hover:bg-neutral-700 text-amber-200'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Capítulo anterior</span>
          </button>

          {onExplorePainting && (
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                onExplorePainting();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 border border-amber-600/50 text-amber-300 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Ver en el cuadro</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleNext}
            disabled={activeChapterIndex === HISTORY_CHAPTERS.length - 1}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeChapterIndex === HISTORY_CHAPTERS.length - 1
                ? 'opacity-30 cursor-not-allowed bg-neutral-950 text-neutral-500'
                : 'bg-amber-600 hover:bg-amber-500 text-black shadow-lg shadow-amber-600/30'
            }`}
          >
            <span>Siguiente capítulo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </article>
    </div>
  );
};
