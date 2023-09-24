import React, { useEffect, useState } from "react";
import getUserData from "../api/getUserData";
import postUserData from "../api/postUserData";
import updateUserData from "../api/updateUserData";
import { useNavigate } from "react-router-dom";
const UserForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    fatherName: "",
    location: "",
    age: "",
  });
  const [originalData, setOriginalData] = useState({
    name: "",
    email: "",
    number: "",
    fatherName: "",
    location: "",
    age: "",
  });
  const onSuccess = (data) => {
    data = data.data;
    setUserData({
      name: data.name || "",
      email: data.email || "",
      number: data.number || "",
      fatherName: data.fatherName || "",
      location: data.location || "",
      age: data.age || "",
    });
    setOriginalData({
      name: data.name || "",
      email: data.email || "",
      number: data.number || "",
      fatherName: data.fatherName || "",
      location: data.location || "",
      age: data.age || "",
    });
  };

  //check whether user data is present or not
  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (!userEmail) navigate("/");
    getUserData(userEmail, onSuccess, onFailure);
  }, []);
  //when any field is changed
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //to compare if our data is different or same
  function deepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }
  const onSuccessPost = (data) => {
    navigate("/result-page");
  };
  const onFailure = (data) => {
    // navigate("/result-page");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem("email");
    if (originalData.email.length > 0 && deepEqual(userData, originalData))
      alert("No change in data Please change any field to Update");
    else if (
      originalData.email.length > 0 &&
      !deepEqual(userData, originalData)
    )
      updateUserData(userData, userEmail, onSuccessPost);
    else postUserData(userData, onSuccessPost);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700"
          >
            Number:
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={userData.number}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fatherName"
            className="block text-sm font-medium text-gray-700"
          >
            Father's Name:
          </label>
          <input
            type="text"
            required
            id="fatherName"
            name="fatherName"
            value={userData.fatherName}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location:
          </label>
          <input
            type="text"
            required
            id="location"
            name="location"
            value={userData.location}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none"
          >
            {originalData.email.length > 0 ? "Update" : "Submit"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
