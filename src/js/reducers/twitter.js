import seedData from './data/seed';
import { MOCK_CHANGE } from '../constants/Twitter';

const initialState = seedData.candidates;

export default function twitter(state = initialState, action) {
  switch (action.type) {
    case MOCK_CHANGE:
      const res = state.map(candidate => {
        return candidate;
      });
      return res;
    default:
      return state;
  }
};