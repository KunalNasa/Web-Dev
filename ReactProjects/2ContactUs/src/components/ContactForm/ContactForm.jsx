import React from 'react'
import './ContactForm.css'
import { useState } from 'react';
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import logo from "/contact.svg"


const ContactForm = () => {
    const [name, setname] = useState("Kunal");
    const [email, setemail] = useState("Abcde@gmail.com");
    const [text, settext] = useState("Ok");

    const onSubmit = (event) =>
    {
        event.preventDefault();
        setname(event.target[0].value);
        setemail(event.target[1].value);
        settext(event.target[2].value);
    }
    return (
        <section className='contact_Form_Container'>
            <div className='contact_form'>
                <div className="top_btn">
                    <Button className="primary_button" text="VIA CHAT " icon={<MdMessage fontSize={20} />} />
                    <Button className="primary_button" text="VIA CALL " icon={<IoMdCall fontSize={20} />} />
                </div>
                <Button className="outline_button" text="VIA EMAIL FORM" icon={<MdEmail fontSize={20} />} />
                <form onSubmit={onSubmit}>
                <div className="form_control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name = "name"/>
                </div>
                <div className="form_control">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name = "email"/>
                </div>
                <div className="form_control">
                    <label htmlFor="text">Text</label>
                    <textarea name = "text" rows={10}/>
                </div>
                <div style={{
                    display : 'flex',
                    justifyContent : 'flex-end'
                }}>
                <Button className ="primary_button" text="Submit" />
                
                </div>
                <div>{name + " " + email + " " + text}</div>
                </form>
            </div>
            <div className='container_image'>
                <img src= {logo} alt="Contact Image" />
            </div>
        </section>
    )
}

export default ContactForm
