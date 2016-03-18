import seedData from './data/seed';
import { MOCK_CHANGE } from '../constants/Twitter';

const initialState = seedData.candidates;

const CHANGE_ODDS = 0.5;
const NEGATIVE_ODDS = 0.5;

export default function twitter(state = initialState, action) {
  switch (action.type) {
    case MOCK_CHANGE:
      const res = state.map(candidate => {
        if (Math.random() > CHANGE_ODDS) {
          const { positive, negative, volume } = candidate;
          let sentimentChange = Math.random() / 10;
          // Two ways for negative change, if above odds for making negative
          // or if positive percent is above 80
          if (Math.random() >= NEGATIVE_ODDS) {
            if (positive.percent > 15) sentimentChange *= -1;
          }
          else if (positive.percent > 80) {
            sentimentChange *= -1;
          }
          positive.percent += sentimentChange;
          positive.total = positive.percent * volume;
          negative.percent -= sentimentChange;
          negative.total = negative.percent * volume;
        }
        return candidate;
      });
      return res;
    default:
      return state;
  }
};