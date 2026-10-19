import React, { useState } from 'react';
import { AdventureScene, AdventureChoice, UiLanguage } from './types';
import { ADVENTURE_SCENES } from './data';
import { InteractiveSentence } from './InteractiveSentence';
import { SpeechButton } from './SpeechButton';
import { Compass, Sparkles, AlertTriangle, CheckCircle2, RotateCcw, Heart, Shield, Award } from 'lucide-react';
import { sounds } from './sound';

interface GameAdventureProps {
  uiLang: UiLanguage;
  onAddScore: (points: number) => void;
  onGoHome?: () => void;
}

export const GameAdventure: React.FC<GameAdventureProps> = ({ uiLang, onAddScore, onGoHome }) => {
  const [currentSceneId, setCurrentSceneId] = useState<string>('escena-1');
  const [lastChoice, setLastChoice] = useState<AdventureChoice | null>(null);
  const [learnedPhrases, setLearnedPhrases] = useState<{ es: string; hy: string }[]>([]);

  const currentScene = ADVENTURE_SCENES.find(s => s.id === currentSceneId) || ADVENTURE_SCENES[0];
  const isEnding = currentScene.isEnding || false;

  const handleMakeChoice = (choice: AdventureChoice) => {
    sounds.playWhoosh();
    setLastChoice(choice);
    if (!learnedPhrases.some(p => p.es === choice.usefulPhrase.es)) {
      setLearnedPhrases(prev => [...prev, choice.usefulPhrase]);
      onAddScore(15);
    }
    setCurrentSceneId(choice.nextSceneId);
  };

  const handleRestart = () => {
    sounds.playClick();
    setCurrentSceneId('escena-1');
    setLastChoice(null);
    setLearnedPhrases([]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          {uiLang === 'es' ? 'Juego 7' : uiLang === 'hy' ? 'Խաղ 7' : 'Игра 7'}
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl text-amber-100">
          {uiLang === 'es' ? '¿Qué harías tú? Un día en Pompeya' : uiLang === 'hy' ? 'Ի՞նչ կանեիր դու. Մի օր Պոմպեյում' : 'Что бы ты сделал? Один день в Помпеях'}
        </h1>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto">
          {uiLang === 'es'
            ? 'Una aventura interactiva de reconstrucción histórica. Toma decisiones, salva a tus seres queridos y aprende expresiones en español.'
            : uiLang === 'hy'
            ? 'Ինտերակտիվ պատմական արկած։ Կայացրու որոշումներ, փրկիր հարազատներիդ և սովորիր իսպաներեն արտահայտություններ։'
            : 'Интерактивная историческая реконструкция. Принимай решения и учи полезные фразы.'}
        </p>

        {/* Disclaimer badge */}
        <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-amber-950 text-[11px] text-neutral-400">
          Nota: Es una recreación artística y educativa con fines pedagógicos.
        </div>
      </div>

      {/* Main Adventure Card */}
      <div className="bg-neutral-900/90 border border-amber-900/50 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
        {/* Scene Title */}
        <div className="flex items-center justify-between border-b border-amber-950 pb-3">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-amber-100">
              {currentScene.title.es}
            </h2>
            <p className="text-xs text-amber-400 font-medium">
              {currentScene.title.ru || currentScene.title.hy}
            </p>
          </div>
          <SpeechButton text={currentScene.situation.es} />
        </div>

        {/* Situation description with Russian tap-to-reveal */}
        <div>
          <InteractiveSentence
            content={currentScene.situation}
            uiLang={uiLang}
            defaultExpanded={false}
            className="bg-amber-950/30 border-amber-800/40 text-base sm:text-lg"
          />
        </div>

        {/* Previous feedback / survival tip if available */}
        {lastChoice && !isEnding && (
          <div className="space-y-2 p-4 rounded-2xl bg-amber-950/40 border border-amber-700/50 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Shield className="w-4 h-4" />
              <span>Consecuencia y consejo de supervivencia</span>
            </div>
            <InteractiveSentence content={lastChoice.feedback} uiLang={uiLang} defaultExpanded={false} />
            <div className="pt-1 flex items-center justify-between bg-black/40 p-2.5 rounded-xl border border-amber-900/40">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-amber-200">
                  Frase aprendida: {lastChoice.usefulPhrase.es}
                </span>
              </div>
              <SpeechButton text={lastChoice.usefulPhrase.es} size="sm" />
            </div>
          </div>
        )}

        {/* Choices if not ending */}
        {!isEnding && (
          <div className="space-y-3 pt-2">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              ¿Qué decides hacer? (Что ты решишь сделать?)
            </label>
            <div className="space-y-3">
              {currentScene.choices.map((choice, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleMakeChoice(choice)}
                  className="w-full text-left p-4 sm:p-5 rounded-2xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 hover:border-amber-500/60 transition-all hover:scale-[1.01] cursor-pointer group shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                        Opción {idx === 0 ? 'A' : 'B'}
                      </span>
                      <p className="text-sm sm:text-base text-amber-100 font-semibold group-hover:text-amber-300 transition-colors">
                        {choice.text.es}
                      </p>
                      <p className="text-xs text-amber-300/80 font-normal">
                        {choice.text.ru || choice.text.hy}
                      </p>
                    </div>
                    <SpeechButton text={choice.text.es} size="sm" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Ending Screen */}
        {isEnding && (
          <div className="text-center py-6 space-y-6 animate-fadeIn">
            <Award className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
            <h3 className="font-display font-black text-2xl text-amber-100">
              ¡Has superado la reconstrucción histórica!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              Has demostrado gran empatía, valentía y has aprendido expresiones fundamentales en español.
            </p>

            {/* List of learned expressions */}
            {learnedPhrases.length > 0 && (
              <div className="text-left bg-neutral-950/80 border border-amber-950 rounded-2xl p-4 space-y-2 max-w-md mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Expresiones aprendidas:
                </span>
                {learnedPhrases.map((p, i) => (
                  <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-amber-950/60 last:border-none">
                    <span className="text-amber-200 font-semibold">{p.es}</span>
                    <SpeechButton text={p.es} size="sm" />
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2 flex justify-center gap-3">
              <button
                type="button"
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-xl transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Volver a jugar la historia</span>
              </button>
              {onGoHome && (
                <button
                  type="button"
                  onClick={onGoHome}
                  className="px-6 py-3 rounded-2xl bg-neutral-800 text-amber-200 font-bold text-sm border border-neutral-700 transition-colors cursor-pointer"
                >
                  Ir al inicio
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
