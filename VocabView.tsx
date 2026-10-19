import React, { useState } from 'react';
import { VocabItem, UiLanguage } from './types';
import { VOCABULARY_LIST } from './data';
import { SpeechButton } from './SpeechButton';
import { InteractiveSentence } from './InteractiveSentence';
import { Sparkles, Search, BookOpen, Volume2, CheckCircle2, RotateCw } from 'lucide-react';
import { sounds } from './sound';

interface VocabViewProps {
  uiLang: UiLanguage;
}

export const VocabView: React.FC<VocabViewProps> = ({ uiLang }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: { es: 'Todos', hy: 'Բոլորը', ru: 'Все' } },
    { id: 'volcan', label: { es: 'Volcán y Naturaleza', hy: 'Հրաբուխ և բնություն', ru: 'Вулкан и природа' } },
    { id: 'emociones', label: { es: 'Emociones', hy: 'Հույզեր', ru: 'Эмоции' } },
    { id: 'personas', label: { es: 'Personas', hy: 'Մարդիկ', ru: 'Люди' } },
    { id: 'arte', label: { es: 'Arte e Historia', hy: 'Արվեստ և պատմություն', ru: 'Искусство' } },
    { id: 'acciones', label: { es: 'Acciones (Verbos)', hy: 'Գործողություններ (Բայեր)', ru: 'Глаголы' } }
  ];

  const filteredWords = VOCABULARY_LIST.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      item.wordEs.toLowerCase().includes(query) ||
      item.translationHy.toLowerCase().includes(query) ||
      item.translationRu.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const toggleFlip = (id: string) => {
    sounds.playClick();
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          {uiLang === 'es' ? 'Vocabulario temático' : uiLang === 'hy' ? 'Թեմատիկ բառապաշար' : 'Тематический словарь'}
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-amber-100">
          {uiLang === 'es' ? 'Palabras clave de Pompeya' : uiLang === 'hy' ? 'Պոմպեյի հիմնական բառերը' : 'Ключевые слова'}
        </h1>
        <p className="text-neutral-400 text-sm">
          {uiLang === 'es'
            ? 'Aprende la pronunciación, el significado en armenio y lee oraciones de ejemplo.'
            : uiLang === 'hy'
            ? 'Սովորիր արտասանությունը, հայերեն իմաստը և օրինակ նախադասությունները։'
            : 'Учи произношение, перевод на армянский и примеры предложений.'}
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder={uiLang === 'es' ? 'Buscar palabra...' : uiLang === 'hy' ? 'Փնտրել բառը...' : 'Поиск слова...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-neutral-900 border border-amber-900/40 text-amber-100 placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 scrollbar-thin">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                sounds.playClick();
                setSelectedCategory(cat.id);
              }}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-black shadow-md'
                  : 'bg-neutral-900 text-amber-200/80 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label[uiLang]}
            </button>
          ))}
        </div>
      </div>

      {/* Vocabulary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredWords.map(item => {
          const isFlipped = flippedCards[item.id];
          return (
            <div
              key={item.id}
              className="group bg-neutral-900/90 border border-amber-900/40 hover:border-amber-600/60 rounded-3xl p-5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/30 flex flex-col justify-between backdrop-blur-md"
            >
              {/* Card Top: Word, Article, Audio, Armenian */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 block">
                      {item.partOfSpeech}
                    </span>
                    <h3 className="font-display font-black text-2xl text-amber-100 capitalize">
                      {item.wordEs}
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono">
                      {item.pronunciation}
                    </span>
                  </div>
                  <SpeechButton text={item.wordEs} />
                </div>

                {/* Primary Russian Translation Box */}
                <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-black rounded bg-blue-900/80 text-blue-200 border border-blue-600/60">
                      RU
                    </span>
                    <span className="font-bold text-amber-100 text-base font-sans">
                      {item.translationRu}
                    </span>
                  </div>
                  {item.translationHy && (
                    <span className="text-xs text-amber-400/80 font-medium">
                      {item.translationHy}
                    </span>
                  )}
                </div>

                {/* Example sentence */}
                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Ejemplo en contexto:
                  </span>
                  <InteractiveSentence
                    content={{
                      es: item.exampleSentenceEs,
                      hy: item.exampleSentenceHy,
                      ru: item.exampleSentenceRu
                    }}
                    uiLang={uiLang}
                    defaultExpanded={false}
                    className="bg-neutral-950/50 border-neutral-800 text-sm"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredWords.length === 0 && (
        <div className="text-center py-12 text-neutral-500">
          No se encontraron palabras para esa búsqueda.
        </div>
      )}
    </div>
  );
};
