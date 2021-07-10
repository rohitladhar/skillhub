import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useHistory } from "react-router-dom";
import "../css/header.css";
import { withRouter } from 'react-router-dom'
import '../css/dashboard.css'
import AddResponse from './AddResponse'

const EditDashboard = () => {

    let history = useHistory();

    function goBack() {
        history.push("/apprenticehome");
    }
    const user = localStorage.getItem('username')
    const [userResponse, setUserResponse] = useState(null)
    const mentor = localStorage.getItem('mentor')
    const { question, actualQuestion } = useParams()
    const [viewQuestion, setViewQuestion] = useState({ detail: [] })

    const checkResponse = user => {
        axios.get('http://127.0.0.1:8000/api/management/response/', {
            params: {
                username: user,
                question: question
            }
        })
            .then((res) => {
                console.log(res.data)
                setUserResponse(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (mentor === 'true') window.location.href = '/';
        if (question !== 'null') {
            axios.get('http://127.0.0.1:8000/api/management/viewresponse/', {
                params: {
                    question: question
                }
            })
                .then((res) => {
                    setViewQuestion({
                        detail: res.data,
                    })
                })
                .catch(err => console.log(err))
        }
    }, [question])

    return (
        <div>
            <div className="header">

                <img className="header__logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="SkillHub" />

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
                    <h1 className="header__dashboard">View DashBoard</h1>
                    <h4 className="header__h4">{'`'}{actualQuestion}{'`'}</h4>
                    <div className="list">

                        {viewQuestion && viewQuestion.detail.map((item) => {
                            return (
                                <li key={item.id} className="list-item">
                                    <span className="chatbox">{item.answer}</span>
                                    <span className="chatusername">{item.username}</span>
                                </li>
                            )
                        })}
                    </div>
                    {userResponse ?
                        <AddResponse question={question} userResponse={userResponse} /> :
                        null}

                    <div>

                        <div className="back-align">
                            <button
                                className="btn-view"
                                onClick={() => checkResponse(user)}
                            >Check
                            </button>

                            <button
                                className="btn-back"
                                onClick={goBack}
                            >Back
                            </button>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default withRouter(EditDashboard)