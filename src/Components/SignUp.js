import PropTypes from 'prop-types';

const Signup = ({nameChangeHandler, emailChangeHandler, submitHandler}) => {

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter Name" onChange={nameChangeHandler}/>
            <input type="text" placeholder="Enter Email" onChange={emailChangeHandler}/>
            <button type="submit">Sign Up</button>
        </form>
    )
}

Signup.propTypes = {
    emailChangeHandle: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired,
    nameChangeHandler: PropTypes.func.isRequired,
  };

export default Signup

