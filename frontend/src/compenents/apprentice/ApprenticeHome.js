import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../compenents/css/header.css";
import { withRouter } from 'react-router-dom'
import '../css/dashboard.css';
import axios from 'axios';
function ApprenticeHome() {
  const mentor = localStorage.getItem('mentor')
  const apprentice = localStorage.getItem('apprentice')
  const instructor = localStorage.getItem('instructor')
  const group = localStorage.getItem('group')
  const [list, setList] = useState({ detail: [] })
  useEffect(() => {

    if (mentor === 'true') window.location.href = '/';
    if (apprentice === 'true') {
      axios.get('http://127.0.0.1:8000/api/management/list/', {
        params: {
          user: instructor,
          group: group
        }
      })
        .then((res) => {
          setList({
            detail: res.data,
          })
        })

        .catch(err => console.log(err))
    }


  }, [mentor])
  return (
    <div>
      <div className="header">
        <Link to="/apprenticehome">
          <img className="header__logo" src='logo.png' alt="SkillHub" />
        </Link>
        <ul className="header__ul">
          <li className="header__li">
            <Link className="header__li__link" to='/logout'>
              Logout
            </Link>
          </li>
          <li className="header__li">
            Hi,  {localStorage.getItem('username')}

          </li>

        </ul>
      </div>
      <div className="container">
        <div className="app-wrapper">

          <h1 className="header__dashboard">DashBoard</h1>

          <div className="list">
            {list && list.detail.map((item) => {
              return (
                <li key={item.id} className="list-item">
                  <span className="chatboxes">{item.question}</span>
                  <span className="chatboxesusername">{item.username}</span>
                  <span>
                    <Link
                      to={{ pathname: `/editdashboard/${item.id}/${item.question}` }}
                      className="btn-view-home"
                    >View
                  </Link>


                  </span>

                </li>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ApprenticeHome);
