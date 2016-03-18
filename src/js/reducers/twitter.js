import seedData from './data/seed';
import { MOCK_CHANGE } from '../constants/Twitter';

const initialState = seedData.candidates;

export default function twitter(state = initialState, action) {
  switch (action.type) {
    case MOCK_CHANGE:
      console.log(state);
      const res = state.map(candidate => {
        if (Math.random() > 0.33) {
          const { positive, negative, volume } = candidate;
          let sentimentChange = Math.random();
          if (Math.random() >= 0.5) sentimentChange *= -1;
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