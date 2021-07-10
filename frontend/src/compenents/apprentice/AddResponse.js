import React, { useState, useEffect } from 'react';
import '../css/dashboard.css'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Link, useParams, useHistory } from "react-router-dom";
const AddResponse = (props) => {
    const { question, userResponse } = props
    const group = localStorage.getItem('group')
    const user = localStorage.getItem('username')
    let history = useHistory();
    const showAlert = () => {
        alert('Response is already existed')
    }
    function goBack() {
        history.push("/apprenticehome");
    }
    const [answer, setAnswer] = useState('')
    const [favour, setFavour] = useState('')
    const isDisabled = answer.length === 0 || favour.length === 0;
    useEffect(() => {

    })
    const addResponse = e => {
        axios.post('http://127.0.0.1:8000/api/management/response/', {
            username: user,
            group: group,
            question: question,
            answer: answer,
            favour: favour,
            is_status: 'active'
        })
            .then(response => {
                console.log(response);
                window.location.reload();
            })
            .catch(res => console.log(res))
    }
    console.log(userResponse.length)
    return (
        <div>

            {(userResponse.length > 0) ? (<div className="no-tasks">Your Response Is Already Added.</div>) : (
                <div className="form-add">

                    <input
                        onChange={(e) =>
                            setAnswer(e.target.value)
                        }
                        value={answer}
                        type="text"
                        className="task-select"
                        placeholder="Answer..."

                    />
                    <select
                        value={favour}
                        className="task-select"
                        onChange={(e) =>
                            setFavour(e.target.value)
                        }
                    >
                        <option value="true">Favour</option>
                        <option value="true">Favour</option>
                        <option value="false">Against</option>
                    </select><button
                        type="submit"
                        onClick={addResponse}
                        disabled={isDisabled}
                        className="add-task-btn">
                        Add
                </button></div>)
            }
        </div>
    )

}
export default withRouter(AddResponse);