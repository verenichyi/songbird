import { handleActions } from 'redux-actions';
import actions from 'src/redux/action-creators';
import { Bird } from 'src/constants/types';
import birdsData from 'src/constants/birdsData';
import mockImage from 'src/assets/images/mock.jpg';
import failAudio from 'src/assets/audio/fail.mp3';
import successAudio from 'src/assets/audio/success.mp3';

interface State {
  fail: HTMLAudioElement;
  success: HTMLAudioElement;
  mockImage: string;
  mockName: string;
  birdsData: Bird[][];
  questionBirdID: number | null;
  descriptionBirdID: number | null;
  currentLevel: number;
  score: number;
  currentLevelScore: number;
  isButtonDisabled: boolean;
  isMatch: boolean;
  currentLevelClickedOptions: number[] | [];
  indicators: { id: number; status: string }[];
}

const initialState: State = {
  fail: new Audio(failAudio),
  success: new Audio(successAudio),
  mockImage,
  mockName: '******',
  birdsData,
  questionBirdID: null,
  descriptionBirdID: null,
  currentLevel: 0,
  score: 0,
  currentLevelScore: 5,
  isButtonDisabled: true,
  isMatch: false,
  currentLevelClickedOptions: [],
  indicators: [
    { id: 1, status: 'default' },
    { id: 2, status: 'default' },
    { id: 3, status: 'default' },
    { id: 4, status: 'default' },
    { id: 5, status: 'default' },
    { id: 6, status: 'default' },
  ],
};

const app = handleActions(
  {
    [actions.setNextLevel]: (
      state: State,
      { payload }: { payload: number }
    ) => ({
      ...state,
      currentLevel: payload,
    }),
    [actions.setDescriptionBirdID]: (
      state: State,
      { payload }: { payload: number }
    ) => ({
      ...state,
      descriptionBirdID: payload,
    }),
    [actions.setQuestionBirdID]: (
      state: State,
      { payload }: { payload: number }
    ) => ({
      ...state,
      questionBirdID: payload,
    }),
    [actions.setIsButtonDisabled]: (
      state: State,
      { payload }: { payload: boolean }
    ) => ({
      ...state,
      isButtonDisabled: payload,
    }),
    [actions.setIsMatch]: (
      state: State,
      { payload }: { payload: boolean }
    ) => ({
      ...state,
      isMatch: payload,
    }),
    [actions.setCurrentLevelScore]: (
      state: State,
      { payload }: { payload: boolean }
    ) => ({
      ...state,
      currentLevelScore: payload,
    }),
    [actions.setScore]: (state: State, { payload }: { payload: boolean }) => ({
      ...state,
      score: payload,
    }),
    [actions.setCurrentLevelClickedOptions]: (
      state: State,
      { payload }: { payload: number }
    ) => ({
      ...state,
      currentLevelClickedOptions: Array.from(
        new Set([...state.currentLevelClickedOptions, payload])
      ),
    }),
    [actions.resetClickedOptions]: (state: State) => ({
      ...state,
      currentLevelClickedOptions: [] as [],
    }),
    [actions.setIndicatorStatus]: (
      state: State,
      { payload }: { payload: { id: number; status: string } }
    ) => ({
      ...state,
      indicators: state.indicators.map((indicator) => {
        if (indicator.id === payload.id) {
          return { id: indicator.id, status: payload.status };
        }

        return indicator;
      }),
    }),
    [actions.resetIndicatorStatus]: (state: State) => ({
      ...state,
      indicators: state.indicators.map((indicator) => ({
        id: indicator.id,
        status: 'default',
      })),
    }),
  },
  initialState
);

export default app;
