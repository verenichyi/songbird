import { createAction } from 'redux-actions';

const actions = {
  setNextLevel: createAction('SET_CURRENT_LEVEL'),
  setDescriptionBirdID: createAction('SET_DESCRIPTION_BIRD_ID'),
  setQuestionBirdID: createAction('SET_QUESTION_BIRD_ID'),
};

export default actions;
