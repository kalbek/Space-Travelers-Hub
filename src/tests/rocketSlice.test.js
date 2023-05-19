import rocketsReducer, {
  bookRocket,
  leaveRocket,
} from '../redux/rockets/rocketsSlice';

describe('rocketsSlice', () => {
  describe('reducer', () => {
    it('should handle bookRocket', () => {
      const initialState = {
        rocketList: [
          { id: 1, reserved: false },
          { id: 2, reserved: false },
        ],
      };
      const action = bookRocket(1);
      const expectedState = {
        rocketList: [
          { id: 1, reserved: true },
          { id: 2, reserved: false },
        ],
      };
      expect(rocketsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle leaveRocket', () => {
      const initialState = {
        rocketList: [
          { id: 1, reserved: true },
          { id: 2, reserved: false },
        ],
      };
      const action = leaveRocket(1);
      const expectedState = {
        rocketList: [
          { id: 1, reserved: false },
          { id: 2, reserved: false },
        ],
      };
      expect(rocketsReducer(initialState, action)).toEqual(expectedState);
    });
  });
});
