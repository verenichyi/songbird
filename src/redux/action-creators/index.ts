import { createAction } from 'redux-actions';

const actions = {
  setNextLevel: createAction('SET_CURRENT_LEVEL'),
  setDescriptionBirdID: createAction('SET_DESCRIPTION_BIRD_ID'),
  setQuestionBirdID: createAction('SET_QUESTION_BIRD_ID'),
  setIsButtonDisabled: createAction('SET_IS_BUTTON_DISABLED'),
  setIsMatch: createAction('SET_IS_MATCH'),
  setCurrentLevelScore: createAction('SET_CURRENT_LEVEL_SCORE'),
  setScore: createAction('SET_SCORE'),
  setCurrentLevelClickedOptions: createAction('SET_CURRENT_LEVEL_CLICKED_OPTIONS'),
  resetClickedOptions: createAction('RESET_CLICKED_OPTIONS'),
};

export default actions;
