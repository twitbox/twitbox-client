import seedData from './data/seed';

const initialState = seedData.candidates;

export default function twitter(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};