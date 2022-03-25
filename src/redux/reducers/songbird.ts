import { handleActions } from 'redux-actions';
import actions from 'src/redux/action-creators';
import { Bird } from 'src/constants/types';
import birdsData from 'src/constants/birdsData';

interface State {
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
}

const initialState: State = {
  mockImage: 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg',
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
  },
  initialState
);

export default app;
