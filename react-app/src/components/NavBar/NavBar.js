
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import LogoutButton from '../auth/LogoutButton';
import logo from '../Images/logo.png';
import ProfileButton from './ProfileButton';
import './NavBar.css'

function NavBar() {
  const currentUser = useSelector(state => state.session.user);

  let sessionLink
  if (currentUser) {
    sessionLink = (
      <ProfileButton user={currentUser} />
    )
  } else {
    sessionLink = (
      <NavLink to={"/login"}>
        <button id="login-button" >
          <i class="fa-regular fa-user"></i>
          SIGN IN
        </button>
      </NavLink>
    )
  }

  return (
    <div id="nav-container">
      <div id="inner-nav-container" className='flx-row-space-btw'>
        <nav>
          <NavLink exact to="/" id="navlink" className='flx-row-justify-align-ctr'>
            <img src={logo} id="home-logo" alt="logo" />
            <h1>WeTube</h1>
          </NavLink>
        </nav>
        <div id="RightNav">
          {sessionLink}
        </div>

      </div>
    </div>
  )
}
// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to='/' exact={true} activeClassName='active'>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/login' exact={true} activeClassName='active'>
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/sign-up' exact={true} activeClassName='active'>
//             Sign Up
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/users' exact={true} activeClassName='active'>
//             Users
//           </NavLink>
//         </li>
//         <li>
//           <LogoutButton />
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default NavBar;