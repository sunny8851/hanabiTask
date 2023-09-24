import axios from "axios";

const postUserData = (userData, onSuccessPost) => {
  console.log(userData);
  axios
    .post("http://localhost:5000/user/", {
      ...userData,
    })
    .then((e) => {
      onSuccessPost(e);
    });
};

export default postUserData;
