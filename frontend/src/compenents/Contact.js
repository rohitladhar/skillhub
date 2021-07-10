import React, { useEffect } from 'react'
import "./css/contact.css";
import { Link } from 'react-router-dom'
import useContact from './useContact'
import validate from './Validation'
const Contact = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useContact(submitForm, validate);
    const token = localStorage.getItem('token')
    const mentor = localStorage.getItem('mentor')
    const apprentice = localStorage.getItem('apprentice')


    useEffect(() => {

        if (token !== null && mentor === 'true') window.location.href = '/admin'
        if (token !== null && apprentice === 'true') window.location.href = '/apprenticehome'

    })


    return (
        <div>
            <div className="header">
                <Link to="/">
                    <img className="header__logo" src='logo.png' alt="SkillHub" />
                </Link>

            </div>
            <div className="contact">

                <div className="contact__container">
                    <h1> Contact Us</h1>
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={values.firstname}
                            onChange={handleChange}
                            placeholder="Enter Your Name"
                        /><br />
                        {errors.firstname && <h3 className="errorMessage">{errors.firstname}</h3>}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email"
                        /><br />
                        {errors.email && <h3 className="errorMessage">{errors.email}</h3>}
                        <input
                            type="text"
                            id="comment"
                            name="comment"

                            value={values.comment}
                            onChange={handleChange}
                            placeholder="Enter Your Comment"
                        /><br />
                        {errors.comment && <h3 className="errorMessage">{errors.comment}</h3>}
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Enter Your Description"
                            value={values.description}
                            onChange={handleChange}

                        ></textarea>
                        {errors.description && <h3 className="errorMessage">{errors.description}</h3>}
                        <button
                            className="contact__button"
                            type="submit"
                        >Submit</button>
                    </form>

                </div>

            </div>
        </div>)

}

export default Contact;