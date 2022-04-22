import { Indicator, State } from 'src/constants/interfaces';
import birdsData from 'src/constants/birdsData';
import { indicators, maxLevelScore } from 'src/constants/common';
import image from 'src/assets/images/mock.jpg';
import failAudio from 'src/assets/audio/fail.mp3';
import successAudio from 'src/assets/audio/success.mp3';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: State = {
  fail: new Audio(failAudio),
  success: new Audio(successAudio),
  defaultBirdData: {
    image,
    name: ''
  },
  birdsData,
  indicators,
  currentLevel: 0,
  score: 0,
  currentLevelScore: maxLevelScore,
  isButtonDisabled: true,
  isMatch: false,
  isQuizEnded: false,
  clickedOptionsIDs: [],
  questionBirdID: null,
  descriptionBirdID: null
};

const songbirdSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNextLevel: (
      state,
      { payload }: PayloadAction<number>
    ) => ({
      ...state,
      currentLevel: payload
    }),
    setDescriptionBirdID: (
      state,
      { payload }: PayloadAction<number>
    ) => ({
      ...state,
      descriptionBirdID: payload
    }),
    setQuestionBirdID: (
      state,
      { payload }: PayloadAction<number>
    ) => ({
      ...state,
      questionBirdID: payload
    }),
    setIsButtonDisabled: (
      state,
      { payload }: PayloadAction<boolean>
    ) => ({
      ...state,
      isButtonDisabled: payload
    }),
    setIsMatch: (
      state,
      { payload }: PayloadAction<boolean>
    ) => ({
      ...state,
      isMatch: payload
    }),
    setCurrentLevelScore: (
      state,
      { payload }: PayloadAction<number>
    ) => ({
      ...state,
      currentLevelScore: payload
    }),
    setScore: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      score: payload
    }),
    setClickedOptionsIDs: (
      state,
      { payload }: PayloadAction<number>
    ) => {
      const newArr = [...state.clickedOptionsIDs];

      if (!state.clickedOptionsIDs.includes(payload)) {
        newArr.push(payload);
      }

      return {
        ...state,
        clickedOptionsIDs: newArr
      };
    },
    resetClickedOptionsIDs: (state) => ({
      ...state,
      clickedOptionsIDs: [] as []
    }),
    setIndicatorStatusInfo: (
      state,
      { payload }: PayloadAction<Indicator>
    ) => ({
      ...state,
      indicators: state.indicators.map((indicator: Indicator) => {
        if (indicator.id === payload.id) {
          return { ...indicator, status: payload.status };
        }

        return indicator;
      })
    }),
    resetIndicatorStatusInfo: (state) => ({
      ...state,
      indicators: state.indicators.map((indicator: Indicator) => ({
        ...indicator,
        status: 'default'
      }))
    }),
    setIsQuizEnd: (
      state,
      { payload }: PayloadAction<boolean>
    ) => ({
      ...state,
      isQuizEnded: payload
    }),
    setMockName: (state, { payload }: { payload: string }) => {
      const birdData = {
        ...state.defaultBirdData,
        name: payload.replace(/./g, '*')
      };

      return {
        ...state,
        defaultBirdData: birdData
      };
    }
  }
});

export const actions = songbirdSlice.actions;
export default songbirdSlice.reducer;
