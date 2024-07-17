import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaCopy } from "react-icons/fa";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { MdDeleteSweep } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Hero = () => {
    const [queries, setQueries] = useState({ id: "", site: "", username: "", password: "" });
    const [passArray, setPassArray] = useState([]);
    const [eye, setEye] = useState(false);

    const getPass = async () => {
        let req = await fetch("http://127.0.0.1:3000/");
        let passwords = await req.json();
        setPassArray(passwords);
    };

    useEffect(() => {
        getPass();
    }, []);

    const toggleEye = () => {
        setEye(eye => !eye);
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        if (queries.site.length > 4 && queries.username.length > 4 && queries.password.length > 6) {
            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: queries.id }) })
            setPassArray([...passArray, { ...queries, id: uuidv4() }])
            await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...queries, id: uuidv4() }) })
            setQueries({ site: "", username: "", password: "" })
        } else {
            alert("Invalid Inputs");
        }
    };

    const addPassword = async (queries) => {
        await fetch("http://localhost:3000/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(queries)
        });
    };

    const updatePassword = async (queries) => {
        await fetch(`http://localhost:3000/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id })
        });
    };

    const handleChange = (e) => {
        setQueries({ ...queries, [e.target.name]: e.target.value });
    };

    const handleEdit = (e, id) => {
        setQueries({ ...passArray.filter(i => i.id === id)[0], id: id })
        setPassArray(passArray.filter(item => item.id !== id))
    };

    const handleDelete = async (e, id) => {
        let c = confirm("Do you really want to delete this password?");
        if (c) {
            setPassArray(passArray.filter(item => item.id !== id));
            await deletePassword(id);
            getPass();
        }
    };

    const deletePassword = async (id) => {
        await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id}) })
    };

    const handleCopy = (password) => {
        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(password);
    };

    return (
        <>
            <ToastContainer />
            <div className='min-h-[84vh] bg-gray-200'>
                <div className="mx-auto max-w-full p-4 flex items-center flex-col">
                    <h1 className='font-serif font-bold text-2xl'>
                        <span className='text-green-700'>&lt;</span>
                        <span className='text-yellow-500'>Pass</span>
                        <span className='text-green-700'>Manager</span>
                        <span className='text-green-700'>/&gt;</span>
                    </h1>
                    <p className='text-green-600 font-serif text-center text-sm pb-5'>Your own password manager</p>

                    <input name='site' value={queries.site} onChange={handleChange} className='border w-2/3 border-gray-950 rounded-lg' type="text" placeholder='Enter site name' />
                    <div className='flex flex-col sm:flex-row relative py-3 w-2/3 gap-5'>
                        <input name='username' value={queries.username} onChange={handleChange} className='border w-full sm:w-3/4 border-gray-950 rounded-lg' type="text" placeholder='Enter username' />
                        <input name='password' value={queries.password} onChange={handleChange} className='border w-full sm:w-1/4 border-gray-950 rounded-lg' type={eye ? "text" : "password"} placeholder='Enter password' />
                        <button onClick={toggleEye} className='absolute sm:right-[10px] sm:top-[17px] top-16 right-2'>{eye ? <FaEye /> : <FaEyeSlash />}</button>
                    </div>
                    <button onClick={handleAdd} className='border text-xl bg-green-700 text-gray-200 rounded-3xl w-36 font-bold font-serif h-12 gap-1 flex items-center justify-center'>
                        <span className='p-1'><HiMiniSquaresPlus /></span>
                        <span>Save</span>
                    </button>
                    <div className='text-2xl flex sm:justify-start justify-center items-start w-2/3 font-serif text-green-900'>
                        <p>Your Passwords</p>
                    </div>
                    {passArray.length === 0 && <div className='sm:w-2/3 font-serif font-bold'>No passwords to show!!</div>}
                    {passArray.length !== 0 && <div className='flex items-center sm:w-2/3 w-full justify-start bg-green-700 text-gray-200 font-bold'>
                        <span style={{ wordBreak: 'break-all' }} className='w-1/4 p-2'>Site</span>
                        <span style={{ wordBreak: 'break-all' }} className='w-1/4 p-2'>Username</span>
                        <span style={{ wordBreak: 'break-all' }} className='w-1/4 p-2'>Password</span>
                        <div className=''>
                            <span style={{ wordBreak: 'break-all' }} className='w-1/4 p-2'>Modify</span>
                        </div>
                    </div>}

                    <div className='flex w-full sm:w-2/3 flex-col justify-center'>
                        {passArray.map(item => (
                            <div className='flex justify-between items-center text-gray-200 bg-green-500' key={item.id}>
                                <span style={{ wordBreak: 'break-all' }} className='font-serif w-1/4 p-2'>
                                    <a href={item.site} target='_blank' rel='noopener noreferrer'>{item.site}</a>
                                </span>
                                <span style={{ wordBreak: 'break-all' }} className='font-serif w-1/4 p-2'>{item.username}</span>
                                <span style={{ wordBreak: 'break-all' }} className='font-serif w-1/4 p-2'>{"*".repeat(item.password.length)}</span>
                                <div className='flex gap-2 w-1/4 justify-start p-2'>
                                    <button onClick={(e) => handleEdit(e, item.id)}><TbEdit /></button>
                                    <button onClick={(e) => handleDelete(e, item.id)}><MdDeleteSweep /></button>
                                    <button onClick={(e) => handleCopy(item.password)}><FaCopy /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
