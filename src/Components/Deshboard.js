import React from 'react';
import '../style.css';
import { useNavigate } from 'react-router-dom';

function Deshboard(props) {

    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div className='deshboad'>
                <div>
                    <h1>Go to User Page</h1>
                </div>
                <div className='add-user-btn'>
                    <button onClick={() => navigate('/user')}>Go to User Page</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Deshboard;