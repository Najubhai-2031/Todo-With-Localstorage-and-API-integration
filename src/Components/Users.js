import React, { useState } from 'react';
import '../style.css'
import { CgSortAz } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

function Users(props) {

    const navigate = useNavigate();
    const [ans, setAns] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    return (
        <React.Fragment>
            <div className='add-user-btn'>
                <button onClick={() => navigate('/Add')}>ADD USER</button>
            </div>
            <div className='user-main menu-bar'>
                <div className='user-table menu-bar'>
                    <table>
                        <thead>
                            <tr>
                                <th>NAME<CgSortAz /></th>
                                <th>USERNAME</th>
                                <th>EMAIL<CgSortAz /></th>
                                <th>ADDRESS<CgSortAz /></th>
                                <th>PHONE</th>
                                <th>WEBSITE</th>
                                <th>COMPANY<CgSortAz /></th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                props.user.map((item) =>
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address.city}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.website}</td>
                                        <td>{item.company.name}</td>
                                    </tr>
                                )
                            }
                            {
                                ans.map(item =>

                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.website}</td>
                                        <td>{item.company}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Users;