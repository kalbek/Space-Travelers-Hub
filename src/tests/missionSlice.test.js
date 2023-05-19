import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import missionsReducer, {
  getMissions,
  joinMission,
  leaveMission,
} from "../redux/missions/missionsSlice";
``;
const mockStore = configureMockStore([thunk]);

describe("missionsSlice", () => {
  describe("reducer", () => {
    it("should handle joinMission", () => {
      const initialState = {
        missions: [
          { mission_id: 1, reserved: false },
          { mission_id: 2, reserved: false },
        ],
      };
      const action = {
        type: joinMission.type,
        payload: { id: 1 },
      };
      const expectedState = {
        missions: [
          { mission_id: 1, reserved: true },
          { mission_id: 2, reserved: false },
        ],
      };
      expect(missionsReducer(initialState, action)).toEqual(expectedState);
    });

    it("should handle leaveMission", () => {
      const initialState = {
        missions: [
          { mission_id: 1, reserved: true },
          { mission_id: 2, reserved: false },
        ],
      };
      const action = {
        type: leaveMission.type,
        payload: { id: 1 },
      };
      const expectedState = {
        missions: [{ mission_id: 2, reserved: false }],
      };
      expect(missionsReducer(initialState, action)).toEqual(expectedState);
    });
  });
});
