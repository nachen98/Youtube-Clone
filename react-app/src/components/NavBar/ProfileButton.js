import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const COLORS = ['red', 'green', 'purple', 'blue', 'yellow', 'gray']
  const colorInd = user.id % COLORS.length
  console.log('user.username!!!!!!!!!!!!!!!', user.username)
  const userName = user.usernamme
  const firstLetter=userName[0]
  return (
    <>
      {/* <CreateVideoModal /> */}
      <button onClick={openMenu} className={`profile-icon ${COLORS[colorInd]}-bg`}>
        {firstLetter}
      </button>
      {showMenu && (
        <div className="div-profile-dropdown">
            <div className="user-info">{user.username}</div>
            <div className="user-info">{user.email}</div>
            <div id="logout-button">
              {LogoutButton}
            </div>
        </div>

      )}
    </>
  );
}

export default ProfileButton;