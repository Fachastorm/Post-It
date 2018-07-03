import React from 'react'; 
import Navbar from './Navbar'

const Home = () => { 
    return(
        <div>
        <Navbar />
        <h1 className="Title">Post-It!</h1>
        <h3> Welcome to Post-It! This page allows you to set notes to remind yourself of anything you want!</h3>
        </div>
    )
}

export default Home;