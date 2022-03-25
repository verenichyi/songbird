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
  isButtonDisabled: boolean;
  isMatch: boolean;
}

const initialState: State = {
  mockImage: 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg',
  mockName: '******',
  birdsData,
  questionBirdID: null,
  descriptionBirdID: null,
  currentLevel: 0,
  score: 0,
  isButtonDisabled: true,
  isMatch: false,
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
  },
  initialState
);

export default app;
