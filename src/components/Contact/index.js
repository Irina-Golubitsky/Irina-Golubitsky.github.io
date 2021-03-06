import React from 'react';
import { useState } from 'react';
//Send Email Directly From JavaScript
import { send } from 'emailjs-com';

function Contact() {
    const [formState, setformState] = useState({
        name: '',
        email: '',
        message: ''

    });
    const [emailRes, setemailRes] = useState(false);
    const { name, email, message } = formState;
    // change setFormState onChange
    const handleChange = (e) => {
        setformState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);

    };
    // sending email
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("sending");
        send(
            'service_ay9vov9',
            'template_m1hrzrn',
            formState,
            'user_XMVRxCLmrqelrGN5fzAgb'
        )
            .then((response) => {
                setformState({ name: '', email: '', message: '' });
                setemailRes(true);
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <section id="contact" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="section-title">
                            <h1><span>Contact</span> Me<i class="fa fa-star"></i></h1>
                            <p >Thank you for considering my application. Please don't hesitate to contact me with any questions or if you require any other documents from my end. I look forward to hearing from you.</p>
                            {emailRes && (

                                <h3 >Thank you for your email!</h3>

                            )}

                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-6 col-sm-6 col-xs-12 ">
                        <form class="form" onSubmit={onSubmit} >
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="name" value={name}
                                            placeholder="Full Name" required="required" onChange={handleChange} ></input>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" name="email" placeholder="Your Email" value={email}
                                            required="required" onChange={handleChange} ></input>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" rows="6" placeholder="Type Your Message Here" value={message}
                                            onChange={handleChange} ></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group button">
                                        <button type="submit" class="button primary"><i class="fa fa-send"></i>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12 ">
                        <div class="contact">
                            <div class="single-address">
                                <i class="fa fa-phone"></i>
                                <div class="title">
                                    <h4>My Phone</h4>
                                    <p>+1-818-306-6315</p>
                                </div>
                            </div>

                            <div class="single-address">
                                <i class="fa fa-envelope"></i>
                                <div class="title">
                                    <h4>Email Address</h4>
                                    <p>irina.golubitsky@gmail.com</p>
                                </div>
                            </div>
                            <div class="single-address">
                                <i class="fa fa-map"></i>
                                <div class="title">
                                    <h4>My Location</h4>
                                    <p>Tarzana, CA, USA</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Contact;