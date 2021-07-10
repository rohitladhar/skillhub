import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import axiosInstance from '../Axios';
import "./css/login.css";
import './css/home.css';
function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const token = localStorage.getItem('token')
  const mentor = localStorage.getItem('mentor')
  const apprentice = localStorage.getItem('apprentice')
  useEffect(() => {

    if (token !== null && mentor === 'true') window.location.href = '/admin'
    if (token !== null && apprentice === 'true') window.location.href = '/apprenticehome'

  })
  const loginClicked = () => {
    axiosInstance
      .post('token/', {
        username: username,
        password: password,
      })

      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('apprentice', res.data.is_apprentice)
        localStorage.setItem('mentor', res.data.is_mentor)
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('status', res.data.is_active)
        localStorage.setItem('group', res.data.group)
        localStorage.setItem('instructor', res.data.mentor)
        if (localStorage.getItem('status') === 'false') {

          window.location.href = '/';

        }
        if (localStorage.getItem('apprentice') === 'true') {
          window.location.href = '/apprenticehome';
        }
        if (localStorage.getItem('mentor') === 'true') {
          window.location.href = '/admin';
        }
      }
      );
  }

  const isDisabled = username.length === 0 || password.length === 0;

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src='logo.png' alt="SkillHub" />
        </Link>
      </div>
      <div className="home-details">

        <div className="home-details-info">
          <ul>
            <br /><br />
            <li>
              <img src='home.jpg' className="img-fluid animated" alt="home" />
            </li>
            <li>
              <h4 className="home-info">A Perfect Destination for Future Leaders.</h4>
            </li>
            <br /><br />
            <li>
              <Link to="/contact" className="home-button">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="home-details-image">
          <ul>

            <li>
              <h1 className="home-heading-h1">Welcome to  <span className="brand-name">SkillHub</span></h1>
              <div className="login">

                <div className="login__container">
                  <h1> Login</h1>
                  <input type="text"
                    name="username"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    placeholder="username"
                  /><br />
                  <input type="password"
                    value={password}
                    name="password"
                    placeholder="password"
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  /><br />
                  <button onClick={loginClicked}
                    disabled={isDisabled}
                    className="login__button"
                  >Login</button>
                </div>
              </div>
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default Home;
