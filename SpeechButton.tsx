import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sounds } from './sound';

interface SpeechButtonProps {
  text: string;
  lang?: string;
  rate?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SpeechButton: React.FC<SpeechButtonProps> = ({
  text,
  lang = 'es-ES',
  rate = 0.88,
  className = '',
  size = 'md'
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    // Clean any markup if present
    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = rate;

    // Pick best Spanish voice if available
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.startsWith('es') || v.lang.includes('ES') || v.lang.includes('es'));
    if (esVoice) {
      utterance.voice = esVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <button
      type="button"
      onClick={handleSpeak}
      title={isSpeaking ? 'Detener voz' : 'Escuchar en español'}
      aria-label="Escuchar pronunciación"
      className={`inline-flex items-center justify-center p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
        isSpeaking
          ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/40 ring-2 ring-amber-300 animate-pulse'
          : 'bg-neutral-800/80 hover:bg-amber-600/30 text-amber-300 hover:text-amber-200 border border-amber-900/40'
      } ${className}`}
    >
      {isSpeaking ? (
        <VolumeX className={iconSizes[size]} />
      ) : (
        <Volume2 className={iconSizes[size]} />
      )}
    </button>
  );
};
