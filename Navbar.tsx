import React, { useState } from 'react';
import {
  Volume2,
  VolumeX,
  Compass,
  BookOpen,
  Gamepad2,
  HelpCircle,
  Sparkles,
  Trophy,
  Menu,
  X,
  Languages,
  Layers,
  ChevronDown
} from 'lucide-react';
import { ActiveTab, UiLanguage } from './types';
import { sounds } from './sound';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  uiLang: UiLanguage;
  onLanguageChange: (lang: UiLanguage) => void;
  score: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  uiLang,
  onLanguageChange,
  score
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sounds.isEnabled());
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);

  const toggleSound = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
  };

  const navItems = [
    {
      id: 'home' as ActiveTab,
      label: { es: 'Inicio', hy: 'Գլխավոր', ru: 'Главная' },
      icon: Layers
    },
    {
      id: 'explore' as ActiveTab,
      label: { es: 'Explorar', hy: 'Ուսումնասիրել', ru: 'Исследовать' },
      icon: Compass
    },
    {
      id: 'history' as ActiveTab,
      label: { es: 'Historia', hy: 'Պատմություն', ru: 'История' },
      icon: BookOpen
    },
    {
      id: 'vocab' as ActiveTab,
      label: { es: 'Vocabulario', hy: 'Բառապաշար', ru: 'Словарь' },
      icon: Sparkles
    }
  ];

  const gameItems = [
    {
      id: 'find' as ActiveTab,
      title: { es: '1. Encuentra en el cuadro', hy: '1. Գտիր նկարում', ru: '1. Найди на картине' }
    },
    {
      id: 'quiz' as ActiveTab,
      title: { es: '2. Quiz: ¿Qué sabes?', hy: '2. Վիկտորինա', ru: '2. Викторина' }
    },
    {
      id: 'truefalse' as ActiveTab,
      title: { es: '3. Verdadero o Falso', hy: '3. Ճիշտ թե սխալ', ru: '3. Правда или ложь' }
    },
    {
      id: 'detective' as ActiveTab,
      title: { es: '4. Detective del arte', hy: '4. Արվեստի խուզարկու', ru: '4. Детектив искусства' }
    },
    {
      id: 'timeline' as ActiveTab,
      title: { es: '5. Ordena la historia', hy: '5. Դասավորիր պատմությունը', ru: '5. Восстанови историю' }
    },
    {
      id: 'fillblanks' as ActiveTab,
      title: { es: '6. Completa la frase', hy: '6. Լրացրու նախադասությունը', ru: '6. Заполни пропуски' }
    },
    {
      id: 'adventure' as ActiveTab,
      title: { es: '7. ¿Qué harías tú?', hy: '7. Ի՞նչ կանեիր դու', ru: '7. Что бы ты сделал?' }
    }
  ];

  const isGameActive = [
    'find',
    'quiz',
    'truefalse',
    'detective',
    'timeline',
    'fillblanks',
    'adventure'
  ].includes(activeTab);

  return (
    <header className="sticky top-0 z-50 bg-[#0e0708]/95 backdrop-blur-md border-b border-amber-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              onTabChange('home');
            }}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 via-red-600 to-amber-700 flex items-center justify-center shadow-lg shadow-red-950/60 ring-1 ring-amber-400/40 group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-white text-lg">P</span>
            </div>
            <div>
              <span className="font-display font-bold text-amber-200 text-base sm:text-lg block tracking-wide group-hover:text-amber-100 transition-colors">
                Pompeya 1833
              </span>
              <span className="text-[10px] text-amber-500/80 uppercase tracking-widest block font-medium">
                Karl Briullov
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    onTabChange(item.id);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 text-neutral-950 shadow-md shadow-amber-600/30'
                      : 'text-amber-200/80 hover:text-amber-100 hover:bg-neutral-900/80 border border-transparent hover:border-amber-900/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label[uiLang]}</span>
                </button>
              );
            })}

            {/* Games Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  setGamesDropdownOpen(!gamesDropdownOpen);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                  isGameActive
                    ? 'bg-amber-600 text-neutral-950 shadow-md shadow-amber-600/30'
                    : 'text-amber-200/80 hover:text-amber-100 hover:bg-neutral-900/80 border border-transparent hover:border-amber-900/40'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>
                  {uiLang === 'es' ? 'Juegos (7)' : uiLang === 'hy' ? 'Խաղեր (7)' : 'Игры (7)'}
                </span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {gamesDropdownOpen && (
                <div
                  onMouseLeave={() => setGamesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-64 rounded-2xl bg-neutral-950/95 backdrop-blur-xl border border-amber-900/60 shadow-2xl p-2 space-y-1 z-50 animate-fadeIn"
                >
                  {gameItems.map(game => (
                    <button
                      key={game.id}
                      type="button"
                      onClick={() => {
                        sounds.playClick();
                        onTabChange(game.id);
                        setGamesDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                        activeTab === game.id
                          ? 'bg-amber-600 text-black font-bold'
                          : 'text-amber-200/90 hover:bg-amber-950/60 hover:text-amber-100'
                      }`}
                    >
                      <span>{game.title[uiLang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right utility buttons: Language Switch, Sound, Score */}
          <div className="flex items-center gap-2">
            {/* Score Badge */}
            <div
              title="Tu puntuación acumulada"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 font-bold text-xs shadow-inner"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>{score} pts</span>
            </div>

            {/* Language Selector */}
            <div className="relative flex items-center rounded-xl bg-neutral-900/80 p-0.5 border border-amber-900/50">
              {(['ru', 'es', 'hy'] as UiLanguage[]).map(lang => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    onLanguageChange(lang);
                  }}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    uiLang === lang
                      ? 'bg-amber-500 text-neutral-950 shadow-sm'
                      : 'text-neutral-400 hover:text-amber-200'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Sound Toggle */}
            <button
              type="button"
              onClick={toggleSound}
              title={soundEnabled ? 'Silenciar sonidos' : 'Activar sonidos'}
              className="p-2 rounded-xl bg-neutral-900/80 hover:bg-amber-950/60 border border-amber-900/50 text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-500" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-xl bg-neutral-900/80 border border-amber-900/50 text-amber-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-amber-900/50 p-4 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    onTabChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold ${
                    isActive
                      ? 'bg-amber-600 text-black'
                      : 'bg-neutral-900 text-amber-200 border border-amber-950'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label[uiLang]}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-amber-950 space-y-1">
            <p className="text-[11px] font-bold text-amber-500 uppercase tracking-wider px-2">
              {uiLang === 'es' ? '7 Juegos interactivos' : uiLang === 'hy' ? '7 ինտերակտիվ խաղեր' : '7 интерактивных игр'}
            </p>
            {gameItems.map(game => (
              <button
                key={game.id}
                type="button"
                onClick={() => {
                  sounds.playClick();
                  onTabChange(game.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === game.id
                    ? 'bg-amber-600 text-black font-bold'
                    : 'text-amber-200 hover:bg-neutral-900'
                }`}
              >
                <span>{game.title[uiLang]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
