import { handleActions } from 'redux-actions';
import actions from 'src/redux/action-creators';
import { Indicator, State } from 'src/constants/interfaces';
import birdsData from 'src/constants/birdsData';
import { indicators, maxLevelScore, mockName, randomBirdID } from 'src/constants/common';
import mockImage from 'src/assets/images/mock.jpg';
import failAudio from 'src/assets/audio/fail.mp3';
import successAudio from 'src/assets/audio/success.mp3';

const initialState: State = {
  fail: new Audio(failAudio),
  success: new Audio(successAudio),
  mockImage,
  mockName,
  birdsData,
  indicators,
  currentLevel: 0,
  score: 0,
  currentLevelScore: maxLevelScore,
  isButtonDisabled: true,
  isMatch: false,
  isQuizEnded: false,
  clickedOptionsIDs: [],
  questionBirdID: randomBirdID(6),
  descriptionBirdID: null,
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
    [actions.setClickedOptionsIDs]: (
      state: State,
      { payload }: { payload: number }
    ) => {
      const newArr = [...state.clickedOptionsIDs];

      if (!state.clickedOptionsIDs.includes(payload)) {
        newArr.push(payload);
      }

      return {
        ...state,
        clickedOptionsIDs: newArr,
      };
    },
    [actions.resetClickedOptionsIDs]: (state: State) => ({
      ...state,
      clickedOptionsIDs: [] as [],
    }),
    [actions.setIndicatorStatusInfo]: (
      state: State,
      { payload }: { payload: Indicator }
    ) => ({
      ...state,
      indicators: state.indicators.map((indicator: Indicator) => {
        if (indicator.id === payload.id) {
          return { ...indicator, status: payload.status };
        }

        return indicator;
      }),
    }),
    [actions.resetIndicatorStatusInfo]: (state: State) => ({
      ...state,
      indicators: state.indicators.map((indicator: Indicator) => ({
        ...indicator,
        status: 'default',
      })),
    }),
    [actions.setIsQuizEnded]: (
      state: State,
      { payload }: { payload: boolean }
    ) => ({
      ...state,
      isQuizEnded: payload,
    }),
  },
  initialState
);

export default app;
