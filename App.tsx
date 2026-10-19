import React, { useState, useEffect } from 'react';
import { ActiveTab, UiLanguage } from './types';
import { PAINTING_INFO, PAINTING_HOTSPOTS } from './data';
import { Navbar } from './Navbar';
import { PaintingViewer } from './PaintingViewer';
import { InteractiveSentence } from './InteractiveSentence';
import { ExploreView } from './ExploreView';
import { HistoryView } from './HistoryView';
import { GameFind } from './GameFind';
import { GameQuiz } from './GameQuiz';
import { GameTrueFalse } from './GameTrueFalse';
import { GameDetective } from './GameDetective';
import { GameOrder } from './GameOrder';
import { GameFillBlanks } from './GameFillBlanks';
import { GameAdventure } from './GameAdventure';
import { VocabView } from './VocabView';
import {
  Compass,
  BookOpen,
  Gamepad2,
  HelpCircle,
  Sparkles,
  Award,
  ChevronRight,
  Info,
  Trophy,
  CheckCircle2,
  MapPin,
  ExternalLink,
  Flame,
  Volume2
} from 'lucide-react';
import { sounds } from './sound';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [uiLang, setUiLang] = useState<UiLanguage>(() => {
    const saved = localStorage.getItem('pompeii_lang');
    return (saved as UiLanguage) || 'ru';
  });
  const [score, setScore] = useState<number>(() => {
    const saved = localStorage.getItem('pompeii_score');
    return saved ? parseInt(saved, 10) : 0;
  });

  const handleLanguageChange = (lang: UiLanguage) => {
    setUiLang(lang);
    localStorage.setItem('pompeii_lang', lang);
  };

  const handleAddScore = (points: number) => {
    setScore(prev => {
      const next = prev + points;
      localStorage.setItem('pompeii_score', String(next));
      return next;
    });
  };

  const heroIntro = {
    es: '«El último día de Pompeya» es una de las mayores obras maestras del arte mundial, pintada por Karl Briullov en 1833. Esta aplicación interactiva te permite aprender español e historia explorando la gran obra en alta definición, resolviendo misterios y jugando a juegos didácticos.',
    hy: '«Պոմպեյի վերջին օրը» համաշխարհային արվեստի մեծագույն գլուխգործոցներից է՝ ստեղծված Կառլ Բրյուլովի կողմից 1833 թվականին։',
    ru: '«Последний день Помпеи» — шедевр мировой живописи, написанный Карлом Брюлловым в 1833 году. Это интерактивное приложение помогает изучать испанский язык через искусство, историю, интерактивные игры и викторины.'
  };

  return (
    <div className="min-h-screen bg-[#0a0506] text-neutral-100 flex flex-col font-sans selection:bg-amber-600 selection:text-black">
      {/* Top Header / Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        uiLang={uiLang}
        onLanguageChange={handleLanguageChange}
        score={score}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* HOME VIEW: Hero with Original Painting & 5 Direct Action Cards */}
        {activeTab === 'home' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
            {/* Museum Exhibition Title Banner */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950 via-amber-950 to-red-950 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-lg">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Интерактивная музейная экспозиция</span>
              </div>
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-amber-100 tracking-tight leading-none drop-shadow-md">
                El último día de Pompeya
              </h1>
              <p className="text-amber-400/90 font-medium text-base sm:text-lg">
                Карл Брюллов (1833) • Последний день Помпеи
              </p>
            </div>

            {/* Prominent Original Painting Section (Centerpiece of the App) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-400 px-1">
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Lienzo original en alta definición (amplía y desplázate libremente)
                </span>
                <span className="hidden sm:inline">Haz clic en los puntos o usa la rueda para hacer zoom</span>
              </div>

              {/* Painting Canvas Viewer with Hotspots */}
              <PaintingViewer
                hotspots={PAINTING_HOTSPOTS}
                onSelectHotspot={() => {
                  sounds.playClick();
                  setActiveTab('explore');
                }}
                uiLang={uiLang}
                showCaption={true}
                minHeight="min-h-[460px] sm:min-h-[580px] lg:min-h-[640px]"
              />
            </div>

            {/* Interactive Introductory Sentence (Tap for Russian Translation) */}
            <div className="max-w-4xl mx-auto">
              <InteractiveSentence
                content={heroIntro}
                uiLang={uiLang}
                defaultExpanded={false}
                badge="ВВЕДЕНИЕ / INTRODUCCIÓN"
                className="bg-neutral-900/80 border-amber-900/50 shadow-xl"
              />
            </div>

            {/* 5 Main Buttons */}
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-amber-100">
                  {uiLang === 'es' ? '¿Por dónde deseas comenzar?' : uiLang === 'hy' ? 'Որտեղի՞ց ես ցանկանում սկսել' : 'С чего хочешь начать?'}
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                  Выбери раздел для изучения испанского языка через искусство
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* 1. Explorar el cuadro */}
                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('explore');
                  }}
                  className="group p-5 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-amber-950/40 border border-amber-900/50 hover:border-amber-500/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                      <Compass className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                        Explorar el cuadro
                      </h3>
                      <p className="text-xs text-amber-400/80 font-medium mt-0.5">
                        Исследовать картину
                      </p>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                        Интерактивные точки, детали в увеличении, история и вопросы на внимание.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-amber-400 group-hover:text-amber-200">
                    <span>Исследовать</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* 2. Conocer la historia */}
                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('history');
                  }}
                  className="group p-5 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-red-950/40 border border-amber-900/50 hover:border-amber-500/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-black transition-all">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                        Conocer la historia
                      </h3>
                      <p className="text-xs text-amber-400/80 font-medium mt-0.5">
                        Узнать историю
                      </p>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                        6 глав: город Помпеи, Везувий, Брюллов и триумф в Европе.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-amber-400 group-hover:text-amber-200">
                    <span>Читать главы</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* 3. Jugar */}
                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('find');
                  }}
                  className="group p-5 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-purple-950/30 border border-amber-900/50 hover:border-amber-500/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-black transition-all">
                      <Gamepad2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                        Juegos interactivos
                      </h3>
                      <p className="text-xs text-amber-400/80 font-medium mt-0.5">
                        Интерактивные игры (7)
                      </p>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                        Найди на картине, Детектив, Хронология, Что бы ты сделал?...
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-amber-400 group-hover:text-amber-200">
                    <span>Играть</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* 4. Hacer el quiz */}
                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('quiz');
                  }}
                  className="group p-5 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-emerald-950/30 border border-amber-900/50 hover:border-amber-500/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                        Hacer el quiz
                      </h3>
                      <p className="text-xs text-amber-400/80 font-medium mt-0.5">
                        Пройти викторину
                      </p>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                        20 вопросов с 4 вариантами ответа и подробными объяснениями.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-amber-400 group-hover:text-amber-200">
                    <span>Начать quiz</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* 5. Aprender vocabulario */}
                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('vocab');
                  }}
                  className="group p-5 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-blue-950/30 border border-amber-900/50 hover:border-amber-500/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-black transition-all">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                        Aprender vocabulario
                      </h3>
                      <p className="text-xs text-amber-400/80 font-medium mt-0.5">
                        Учить слова
                      </p>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                        Ключевые слова, аудио произношение и примеры предложений.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-amber-400 group-hover:text-amber-200">
                    <span>Учить слова</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>

            {/* Quick Games Showcase Grid */}
            <div className="bg-neutral-900/60 border border-amber-900/40 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-amber-100">
                    Los 7 Juegos Educativos
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Diseñados para aprender español (A2–B1) y ejercitar la agudeza visual
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('find');
                  }}
                  className="p-3.5 rounded-2xl bg-neutral-950/80 hover:bg-amber-950/40 border border-neutral-800 hover:border-amber-700/60 transition-all text-left cursor-pointer"
                >
                  <span className="text-xs font-bold text-amber-400 block">Juego 1</span>
                  <span className="text-sm font-semibold text-neutral-200 block">Encuentra en el cuadro</span>
                  <span className="text-[11px] text-neutral-400">12 misiones en la pintura</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('quiz');
                  }}
                  className="p-3.5 rounded-2xl bg-neutral-950/80 hover:bg-amber-950/40 border border-neutral-800 hover:border-amber-700/60 transition-all text-left cursor-pointer"
                >
                  <span className="text-xs font-bold text-amber-400 block">Juego 2</span>
                  <span className="text-sm font-semibold text-neutral-200 block">Quiz: ¿Qué sabes?</span>
                  <span className="text-[11px] text-neutral-400">20 preguntas históricas</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('truefalse');
                  }}
                  className="p-3.5 rounded-2xl bg-neutral-950/80 hover:bg-amber-950/40 border border-neutral-800 hover:border-amber-700/60 transition-all text-left cursor-pointer"
                >
                  <span className="text-xs font-bold text-amber-400 block">Juego 3</span>
                  <span className="text-sm font-semibold text-neutral-200 block">Verdadero o Falso</span>
                  <span className="text-[11px] text-neutral-400">15 afirmaciones didácticas</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('detective');
                  }}
                  className="p-3.5 rounded-2xl bg-neutral-950/80 hover:bg-amber-950/40 border border-neutral-800 hover:border-amber-700/60 transition-all text-left cursor-pointer"
                >
                  <span className="text-xs font-bold text-amber-400 block">Juego 4</span>
                  <span className="text-sm font-semibold text-neutral-200 block">Detective del arte</span>
                  <span className="text-[11px] text-neutral-400">12 misterios visuales</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('timeline');
                  }}
                  className="p-3.5 rounded-2xl bg-neutral-950/80 hover:bg-amber-950/40 border border-neutral-800 hover:border-amber-700/60 transition-all text-left cursor-pointer"
                >
                  <span className="text-xs font-bold text-amber-400 block">Juego 5</span>
                  <span className="text-sm font-semibold text-neutral-200 block">Ordena la historia</span>
                  <span className="text-[11px] text-neutral-400">Línea del tiempo romana</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('fillblanks');
                  }}
                  className="p-3.5 rounded-2xl bg-neutral-950/80 hover:bg-amber-950/40 border border-neutral-800 hover:border-amber-700/60 transition-all text-left cursor-pointer"
                >
                  <span className="text-xs font-bold text-amber-400 block">Juego 6</span>
                  <span className="text-sm font-semibold text-neutral-200 block">Completa la frase</span>
                  <span className="text-[11px] text-neutral-400">15 oraciones de gramática</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('adventure');
                  }}
                  className="p-3.5 rounded-2xl bg-neutral-950/80 hover:bg-amber-950/40 border border-neutral-800 hover:border-amber-700/60 transition-all text-left cursor-pointer"
                >
                  <span className="text-xs font-bold text-amber-400 block">Juego 7</span>
                  <span className="text-sm font-semibold text-neutral-200 block">¿Qué harías tú?</span>
                  <span className="text-[11px] text-neutral-400">Aventura interactiva</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab('vocab');
                  }}
                  className="p-3.5 rounded-2xl bg-neutral-950/80 hover:bg-amber-950/40 border border-neutral-800 hover:border-amber-700/60 transition-all text-left cursor-pointer"
                >
                  <span className="text-xs font-bold text-amber-400 block">Vocabulario</span>
                  <span className="text-sm font-semibold text-neutral-200 block">Palabras y audio</span>
                  <span className="text-[11px] text-neutral-400">20 términos con traducción</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* EXPLORE VIEW */}
        {activeTab === 'explore' && (
          <ExploreView uiLang={uiLang} onAddScore={handleAddScore} />
        )}

        {/* HISTORY VIEW */}
        {activeTab === 'history' && (
          <HistoryView
            uiLang={uiLang}
            onExplorePainting={() => setActiveTab('explore')}
          />
        )}

        {/* GAME 1: FIND */}
        {activeTab === 'find' && (
          <GameFind uiLang={uiLang} onAddScore={handleAddScore} />
        )}

        {/* GAME 2: QUIZ */}
        {activeTab === 'quiz' && (
          <GameQuiz
            uiLang={uiLang}
            onAddScore={handleAddScore}
            onGoHome={() => setActiveTab('home')}
          />
        )}

        {/* GAME 3: TRUE OR FALSE */}
        {activeTab === 'truefalse' && (
          <GameTrueFalse
            uiLang={uiLang}
            onAddScore={handleAddScore}
            onGoHome={() => setActiveTab('home')}
          />
        )}

        {/* GAME 4: ART DETECTIVE */}
        {activeTab === 'detective' && (
          <GameDetective
            uiLang={uiLang}
            onAddScore={handleAddScore}
            onGoHome={() => setActiveTab('home')}
          />
        )}

        {/* GAME 5: ORDER TIMELINE */}
        {activeTab === 'timeline' && (
          <GameOrder
            uiLang={uiLang}
            onAddScore={handleAddScore}
            onGoHome={() => setActiveTab('home')}
          />
        )}

        {/* GAME 6: FILL BLANKS */}
        {activeTab === 'fillblanks' && (
          <GameFillBlanks
            uiLang={uiLang}
            onAddScore={handleAddScore}
            onGoHome={() => setActiveTab('home')}
          />
        )}

        {/* GAME 7: ADVENTURE */}
        {activeTab === 'adventure' && (
          <GameAdventure
            uiLang={uiLang}
            onAddScore={handleAddScore}
            onGoHome={() => setActiveTab('home')}
          />
        )}

        {/* VOCABULARY VIEW */}
        {activeTab === 'vocab' && <VocabView uiLang={uiLang} />}
      </main>

      {/* Museum Footer */}
      <footer className="bg-[#0b0506] border-t border-amber-950 py-8 px-4 sm:px-6 lg:px-8 mt-12 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-600/30 border border-amber-500/40 flex items-center justify-center font-display font-bold text-amber-300">
              P
            </div>
            <div>
              <p className="font-semibold text-neutral-200">
                Karl Briullov — El último día de Pompeya (1833)
              </p>
              <p className="text-[11px] text-neutral-500">
                Museo Estatal Ruso, San Petersburgo • Óleo sobre lienzo (456.5 × 651 cm)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={PAINTING_INFO.wikimediaOriginalUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <span>Fuente de la imagen: Wikimedia Commons</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-neutral-700">|</span>
            <span>Español A2–B1 / Հայերեն / Русский</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
