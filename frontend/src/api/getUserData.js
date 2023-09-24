import axios from "axios";

const getUserData = (userEmail, onSuccess, onFailure) => {
  axios
    .get("http://localhost:5000/user/" + userEmail)
    .then((e) => {
      onSuccess(e);
    })
    .catch((e) => onFailure(e));
};

export default getUserData;
