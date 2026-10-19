export type UiLanguage = 'es' | 'hy' | 'ru';

export interface TranslatedText {
  es: string;
  hy: string;
  ru?: string;
}

export interface PaintingHotspot {
  id: string;
  name: TranslatedText;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  radiusPercent?: number;
  description: TranslatedText;
  fact: TranslatedText;
  artSignificance: TranslatedText;
  question: {
    question: TranslatedText;
    options: TranslatedText[];
    correctIndex: number;
    explanation: TranslatedText;
  };
}

export interface FindTask {
  id: string;
  targetName: TranslatedText;
  prompt: TranslatedText;
  x: number; // target center percentage
  y: number;
  radius: number; // allowed tolerance percentage
  hint: TranslatedText;
  explanation: TranslatedText;
}

export interface QuizQuestion {
  id: string;
  question: TranslatedText;
  options: TranslatedText[];
  correctIndex: number;
  explanation: TranslatedText;
}

export interface TrueFalseStatement {
  id: string;
  statement: TranslatedText;
  isTrue: boolean;
  explanation: TranslatedText;
}

export interface DetectiveTask {
  id: string;
  title: TranslatedText;
  mystery: TranslatedText;
  clue: TranslatedText;
  focusX: number;
  focusY: number;
  question: TranslatedText;
  options: {
    text: TranslatedText;
    isCorrect: boolean;
    explanation: TranslatedText;
  }[];
}

export interface TimelineCard {
  id: string;
  year: string;
  title: TranslatedText;
  description: TranslatedText;
  correctOrder: number;
}

export interface FillBlankTask {
  id: string;
  sentenceBefore: string;
  sentenceAfter: string;
  missingWord: string;
  options: string[];
  correctIndex: number;
  fullTranslation: TranslatedText;
  explanation: TranslatedText;
}

export interface AdventureChoice {
  text: TranslatedText;
  nextSceneId: string;
  feedback: TranslatedText;
  survivalTip: TranslatedText;
  usefulPhrase: {
    es: string;
    hy: string;
    ru?: string;
  };
}

export interface AdventureScene {
  id: string;
  title: TranslatedText;
  situation: TranslatedText;
  backgroundFocus?: { x: number; y: number; zoom: number };
  choices: AdventureChoice[];
  isEnding?: boolean;
}

export interface VocabItem {
  id: string;
  wordEs: string;
  article?: string;
  partOfSpeech: string;
  pronunciation: string;
  translationHy: string;
  translationRu: string;
  exampleSentenceEs: string;
  exampleSentenceHy: string;
  exampleSentenceRu: string;
  category: 'volcan' | 'emociones' | 'arte' | 'personas' | 'acciones';
}

export interface HistoryChapter {
  id: string;
  number: number;
  title: TranslatedText;
  subtitle: TranslatedText;
  paragraphs: TranslatedText[];
  focusX?: number;
  focusY?: number;
  quote?: TranslatedText;
  quoteAuthor?: string;
}

export type ActiveTab = 
  | 'home'
  | 'explore'
  | 'history'
  | 'find'
  | 'quiz'
  | 'truefalse'
  | 'detective'
  | 'timeline'
  | 'fillblanks'
  | 'adventure'
  | 'vocab';
