import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers'; 


function ContactForm () { 
    const [formState, setFormState] = useState( {name: '', email: '', message:'' } );  
    const { name, email, message} = formState; 
    const [errorMessage, setErrorMessage] =  useState(''); 

    const handleChange =(e)=>  { 

        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value); 
            console.log(isValid); 
            
            if(!isValid){
                setErrorMessage('Your email is fucked'); 
            } else {
                setErrorMessage(''); 
            }

        //console.log('errorMessage', errorMessage); 
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})


        }

        
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        console.log(formState); 

    } 

   // console.log(formState); 

    return ( 
        <section> 
            <h1>Contact Me </h1>
            <form id="contact-form" onSubmit={handleSubmit}>  
            <div>
                <label htmlFor="name"> Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
            </div>
            <div> 
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange}/> 
            </div>
            <div> 
                <label htmlFor="message">Message:</label>
                <textarea name="message" row="5" defaultValue={message} onBlur={handleChange}></textarea>
            </div>
            {
                errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage} </p>
                    </div>
                )
            }
            <button type="submit">Submit</button>
            
            </form>
        </section>
    )


}

export default ContactForm; 