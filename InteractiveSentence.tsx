import React, { useState } from 'react';
import { SpeechButton } from './SpeechButton';
import { ChevronDown, ChevronUp, Languages } from 'lucide-react';
import { TranslatedText, UiLanguage } from './types';
import { sounds } from './sound';

interface InteractiveSentenceProps {
  content: TranslatedText;
  uiLang?: UiLanguage;
  defaultExpanded?: boolean;
  className?: string;
  showAudio?: boolean;
  badge?: string;
}

export const InteractiveSentence: React.FC<InteractiveSentenceProps> = ({
  content,
  uiLang = 'ru',
  defaultExpanded = false,
  className = '',
  showAudio = true,
  badge
}) => {
  const [isOpen, setIsOpen] = useState(defaultExpanded);

  const toggleTranslation = (e: React.MouseEvent) => {
    // Only toggle if not clicking the speech button
    if ((e.target as HTMLElement).closest('button')) return;
    sounds.playClick();
    setIsOpen(!isOpen);
  };

  const primaryTranslation = content.ru || content.hy || '';

  return (
    <div
      onClick={toggleTranslation}
      className={`group relative rounded-xl p-3 sm:p-3.5 transition-all duration-200 cursor-pointer select-text border ${
        isOpen
          ? 'bg-amber-950/30 border-amber-500/40 shadow-md shadow-amber-950/20'
          : 'bg-neutral-900/40 hover:bg-neutral-900/80 border-neutral-800/60 hover:border-amber-900/60'
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {badge && (
            <span className="inline-block px-2 py-0.5 mb-1.5 text-xs font-semibold uppercase tracking-wider rounded-md bg-amber-900/60 text-amber-200 border border-amber-700/50">
              {badge}
            </span>
          )}
          <p className="text-base sm:text-lg leading-relaxed text-amber-100/95 font-medium group-hover:text-amber-50 transition-colors">
            {content.es}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
          {showAudio && <SpeechButton text={content.es} size="sm" />}
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors ${
              isOpen
                ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
                : 'bg-neutral-800/80 text-neutral-400 group-hover:text-amber-300 border border-neutral-700/40'
            }`}
          >
            <Languages className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Русский</span>
            {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </div>
        </div>
      </div>

      {/* Primary Russian translation drop on click */}
      {isOpen && (
        <div className="mt-3 pt-3 border-t border-amber-900/30 space-y-2 animate-fadeIn">
          <div className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 text-[11px] font-bold rounded bg-blue-950/90 text-blue-200 border border-blue-700/60 shrink-0 mt-0.5">
              RU
            </span>
            <p className="text-sm sm:text-base text-amber-200 font-normal leading-relaxed font-sans">
              {primaryTranslation}
            </p>
          </div>

          {/* Secondary Armenian if user explicitly switched interface to Armenian */}
          {uiLang === 'hy' && content.hy && (
            <div className="flex items-start gap-2 pt-1 border-t border-amber-950/40">
              <span className="px-1.5 py-0.5 text-[11px] font-bold rounded bg-red-950/80 text-amber-300 border border-red-800/60 shrink-0 mt-0.5">
                HY
              </span>
              <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                {content.hy}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
