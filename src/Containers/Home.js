import React, {useState} from 'react'
import axios from 'axios'
import Signup from "../Components/SignUp"


const Home = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        const newUser = {
            name: name,
            email: email
        }
        console.log(newUser)
    }

    return (
        <>
            <h2>Home Page</h2>
            <Signup 
                emailChangeHandler={emailChangeHandler}
                nameChangeHandler={nameChangeHandler}
                submitHandler={submitHandler}
            />
        </>
    )
}

export default Home