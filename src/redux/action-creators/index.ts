import { createAction } from 'redux-actions';

const actions = {
  setNextLevel: createAction('SET_CURRENT_LEVEL'),
  setDescriptionBirdID: createAction('SET_DESCRIPTION_BIRD_ID'),
  setQuestionBirdID: createAction('SET_QUESTION_BIRD_ID'),
  setIsButtonDisabled: createAction('SET_IS_BUTTON_DISABLED'),
  setIsMatch: createAction('SET_IS_MATCH'),
  setCurrentLevelScore: createAction('SET_CURRENT_LEVEL_SCORE'),
  setScore: createAction('SET_SCORE'),
  setClickedOptionsIDs: createAction('SET_CLICKED_OPTIONS_IDS'),
  resetClickedOptionsIDs: createAction('RESET_CLICKED_OPTIONS'),
  setIndicatorStatusInfo: createAction('SET_INDICATOR_STATUS_INFO'),
  resetIndicatorStatusInfo: createAction('RESET_INDICATOR_STATUS_INFO'),
  setIsQuizEnded: createAction('SET_IS_END_OF_QUIZ'),
};

export default actions;
