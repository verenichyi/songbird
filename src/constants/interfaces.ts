export interface Bird {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

export interface Indicator {
  id: number;
  status: string;
}

export interface defaultData {
  image: string;
  name: string;
}

export interface State {
  fail: HTMLAudioElement;
  success: HTMLAudioElement;
  defaultBirdData: defaultData;
  birdsData: Bird[][];
  indicators: Indicator[];
  currentLevel: number;
  score: number;
  currentLevelScore: number;
  isButtonDisabled: boolean;
  isMatch: boolean;
  isQuizEnded: boolean;
  clickedOptionsIDs: number[];
  questionBirdID?: number;
  descriptionBirdID?: number;
}
