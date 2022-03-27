import axios from "axios";
import { FETCH_ROLES } from "../constants";

export const fetchRole = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios({
      method: "GET",
      url: "https://ecom-react-task.herokuapp.com/roles",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.success) {
      dispatch({
        type: FETCH_ROLES,
        payload: response?.data?.data,
      });
    }
  } catch (err) {
    alert(err);
  }
};
