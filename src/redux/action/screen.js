import axios from "axios";
import { SCREEN_LIST_FETCHING } from "../constants";

export const fetchScreen = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios({
      method: "GET",
      url: "https://ecom-react-task.herokuapp.com/screens",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.success) {
      dispatch({
        type: SCREEN_LIST_FETCHING,
        payload: response?.data?.data,
      });
    }
  } catch (err) {
    alert(err);
  }
};
