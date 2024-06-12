import React, { useContext, useEffect } from "react";
import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-page">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "./noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chat-container">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
