import { handleActions } from 'redux-actions';
import actions from 'src/redux/action-creators';
import { Bird } from 'src/constants/types';
import birdsData from 'src/constants/birdsData';

interface State {
  birdsData: Bird[][];
  questionBirdID: number | null;
  descriptionBirdID: number | null;
  currentLevel: number;
  score: number;
}

const initialState: State = {
  birdsData,
  questionBirdID: null,
  descriptionBirdID: null,
  currentLevel: 0,
  score: 0,
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
  },
  initialState
);

export default app;
