import React from 'react';
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

const Task = (props) =>{

    return(
    <div>
    <nav className = 'Navbar'>
            <ul>
                <li><Link to="/" className="nav-link" id ='NewRequesterTask'>New Requester Task</Link></li>
                <li><Link to="/WorkerTask" className="nav-link" id ='WokerTask'>Worker Task</Link></li>
            </ul>
    </nav>
    </div>
    )
}

export default Task