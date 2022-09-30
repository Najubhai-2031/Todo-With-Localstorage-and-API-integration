import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style.css'

function AddUser(props) {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState({});
    const [index,setIndex] = useState(10)

    const [ans, setAns] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    const handleClick = (e) => {
        e.preventDefault();
        let isValid = formValidation();
        if (isValid) {
            setAns([
                ...ans,
                {
                    name: name,
                    username: username,
                    email: email,
                    address: address,
                    phone: phone,
                    website: website,
                    company: company,
                    id:index+1,
                },
            ]);

            setName('')
            setUsername('')
            setEmail('')
            setAddress('')
            setPhone('')
            setWebsite('')
            setCompany('')
            setError({})
            toast.success("User Added Succesfull")
        }
    }

    const formValidation = () => {
        let isValid = true;
        const errors = {};
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".");
        var dotposi = website.lastIndexOf(".");
        var dot = website.indexOf('.');

        //Name
        if (!name) {
            errors.name = "Enter Name"
            isValid = false
        }
        else if (name.length < 3 || name.length > 10) {
            errors.name = "Name Should Contain Min 3 Characters and Max 10 Characters"
            isValid = false
        }
        else if (isNaN(!name) || name < 1 || name > 10) {
            errors.name = "Name should only Contains Alphabates"
            isValid = false
        }

        //username
        if (!username) {
            errors.username = "Enter Username"
            isValid = false
        }
        else if (username.length < 3 || username.length > 10) {
            errors.username = "Username Should Contain Min 3 Characters and Max 10 Characters"
            isValid = false
        }


        // Email
        if (!email) {
            errors.email = "Enter Email"
            isValid = false
        }
        else if (atposition < 1) {
            errors.email = `Email id Must contain Atleat 1 character Before the @`
            isValid = false
        }
        else if (dotposition < atposition + 2) {
            errors.email = `There must be at least one character before and after the @`
            isValid = false
        }
        else if (dotposition + 2 >= email.length) {
            errors.email = `There must be at least two characters after . (dot)`
            isValid = false
        }

        // Mobile
        if (!phone) {
            errors.phone = "Enter Phone Number"
            isValid = false
        }
        else if (phone.length > 10) {
            errors.phone = "Phone Number Should be Less then 10 Digits"
            isValid = false
        }
        else if (phone.length < 10) {
            errors.phone = "Phone Number Should be 10 Digits"
            isValid = false
        }

        // Address
        if (!address) {
            errors.address = "Enter Address"
            isValid = false
        }
        else if (address.length < 3 || address.length > 10) {
            errors.address = "Address Should Contain Min 3 Characters and Max 10 Characters"
            isValid = false
        }

        // Website
        if (!website) {
            errors.website = "Enter Website Link"
            isValid = false
        }
        else if(dot === -1){
            errors.website = `Website Must Contain . (dot)`
            isValid = false
        }
        else if (dot === 0) {
            errors.website = `There must be at least one character before . (dot)`
            isValid = false
        }
        else if (dotposi + 2 >= website.length) {
            errors.website = `There must be at least two characters after . (dot)`
            isValid = false
        }
       

        // Company
        if (!company) {
            errors.company = "Enter Company Name"
            isValid = false
        }
        else if (company.length < 3) {
            errors.company = "Company Should Contain Min 3 Characters"
            isValid = false
        }


        setError(errors)
        return isValid;

    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(ans));
    }, [ans])
    return (
        <div className='user-input'>
        <div className='user-input-sub-div'>
            <form onSubmit={handleClick}>
                <input value={name} type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <div className='error'>{error.name}</div>

                <input value={username} type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                <div className='error'>{error.username}</div>

                <input value={email} type='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                <div className='error'>{error.email}</div>

                <input value={address} type='text' placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                <div className='error'>{error.address}</div>

                <input value={phone} type='number' placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} />
                <div className='error'>{error.phone}</div>

                <input value={website} type='text' placeholder='Website Link' onChange={(e) => setWebsite(e.target.value)} />
                <div className='error'>{error.website}</div>

                <input value={company} type='text' placeholder='Company Name' onChange={(e) => setCompany(e.target.value)} />
                <div className='error'>{error.company}</div>

                <div className='btns'>
                    <div>
                        <button type='submit'>Submit</button>
                        <ToastContainer/>
                    </div>
                    <div>
                        <button onClick={() => navigate('/user')}>See Users</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
}

export default AddUser;