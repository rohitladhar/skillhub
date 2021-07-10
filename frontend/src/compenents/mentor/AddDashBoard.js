import React, { useState } from 'react';
import '../css/dashboard.css'
import axios from 'axios';
const AddDashboard = () => {
    const group = localStorage.getItem('group')
    const user = localStorage.getItem('username')
    const [question, setQuestion] = useState('')
    const [date, setDate] = useState('')

    const isDisabled = question.length === 0 || date.length === 0;
    const addDashboard = e => {
        axios.post('http://127.0.0.1:8000/api/management/adddashboard/', {
            username: user,
            group: group,
            question: question,
            date: date
        })
            .then(response => {
                console.log(response);
                window.location.reload();
            })
            .catch(res => console.log(res))
    }

    return (
        <div>
            <div className="form">
                <textarea
                    onChange={(e) =>
                        setQuestion(e.target.value)
                    }
                    value={question}
                    type="text"
                    rows="2"
                    className="task-textarea"
                    placeholder="Add Task..."
                    required
                />
                <input
                    onChange={(e) =>
                        setDate(e.target.value)
                    }
                    value={date}
                    type="date"
                    className="task-input"
                    placeholder="Date"
                    required
                />
                <button
                    type="submit"
                    onClick={addDashboard}
                    disabled={isDisabled}
                    className="add-task-btn">
                    Add
              </button>
            </div>
        </div>)


}
export default AddDashboard;