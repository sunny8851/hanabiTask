import axios from "axios";

const updateUserData = (userData, userEmail, onSuccessPost) => {
  console.log(userData);
  axios
    .put("http://localhost:5000/user/" + userEmail, {
      ...userData,
    })
    .then((e) => {
      onSuccessPost(e);
    });
};

export default updateUserData;
