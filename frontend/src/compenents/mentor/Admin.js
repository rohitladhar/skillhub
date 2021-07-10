import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import '../css/dashboard.css'
import AddDashboard from './AddDashBoard'
function Admin() {
  const apprentice = localStorage.getItem('apprentice')
  const mentor = localStorage.getItem('mentor')
  const group = localStorage.getItem('group')
  const user = localStorage.getItem('username')
  const [list, setList] = useState({ detail: [] })

  const deleteDashboard = id => {
    axios.delete('http://127.0.0.1:8000/api/management/adddashboard/' + id)

      .then(response => {
        console.log(response);
        window.location.reload();
      })

  }
  useEffect(() => {

    if (apprentice === 'true') window.location.href = '/';
    if (mentor === 'true') {
      axios.get('http://127.0.0.1:8000/api/management/list/', {
        params: {
          user: user,
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

  }, [apprentice, mentor])



  return (
    <div>
      <div className="header">
        <Link to="/admin">
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
          <AddDashboard />
          <div className="list">
            {list && list.detail.map((item) => {
              return (
                <li key={item.id} className="list-item">
                  <span className="chatboxes">{item.question}</span>
                  <span className="chatboxesusername">{item.username}</span>
                  <div>
                    <Link
                      to={{
                        pathname: `/viewdashboard/${item.id}/${item.question}`,
                      }}
                      className="btn-view"

                    >View
                  </Link>
                    <button
                      className="clear-btn"
                      onClick={() => deleteDashboard(item.id)}

                    >Delete
                  </button>

                  </div>

                </li>
              )
            })}
          </div>
        </div>
      </div>


    </div>
  );
}

export default withRouter(Admin);
