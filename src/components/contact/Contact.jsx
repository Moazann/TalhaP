import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import "./contact.css"
import db from '../../firebase'

const Contact = () => { 
    const [cname, setName] = useState('')
    const [cmail, setMail] = useState('')
    const [cnumber, setNumber] = useState(0)
    const [cproject, setProject] = useState('')
    

    const submit = (e) => {
        e.preventDefault();
        db.collection("clients").add({
            name: cname,
            mail: cmail,
            number: cnumber,
            project: cproject,

        })

        setName('');
        setMail('');
        setNumber(0);
        setProject('');

        emailjs.sendForm('service_x1hewh5', 'template_ttgrrbo', form.current, 'WVxSJIkh61Fgs2PnJ')
        e.target.reset()
    }


    const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_x1hewh5', 'template_ttgrrbo', form.current, 'WVxSJIkh61Fgs2PnJ')
    //     e.target.reset()
    // };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Have Questions?</h2>
            <span className="section__subtitle">Contact Me Now</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">talhasaleem80@gmail.com</span>

                            <a href="mailto:examplemail@gmail.com.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+923346722115</span>

                            <a href="https://api.whatsapp.com/send?phone=+923346722115&text=Hello, more information!" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-home-alt contact__card-icon"></i>

                            <h3 className="contact__card-title">Address</h3>
                            <span className="contact__card-data">Lahore, Pakistan.</span>

                            <p className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </p>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your Project</h3>

                    <form ref={form} onSubmit={submit} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" value={cname} onChange={(e) => setName(e.target.value)} className="contact__form-input" placeholder="Insert your name"  {...("name", {required: true, minLength:1, maxLength: 30})} />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" name="email" value={cmail} onChange={(e) => setMail(e.target.value)} className="contact__form-input" placeholder="Insert your email" {...("email", {required: true, minLength:5, maxLength: 30})} />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Phone no</label>
                            <input type="text" name="number" value={cnumber} onChange={(e) => setNumber(e.target.value)} className="contact__form-input" placeholder="Insert your phone number" {...("number", {required: true, minLength:11, maxLength: 20})} />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10" value={cproject} onChange={(e) => setProject(e.target.value)} className="contact__form-input" placeholder="Write your project" {...("project", {required: true, minLength:10, maxLength: 1000})} ></textarea>
                        </div>

                        <button  onSubmit={submit} className="button button--flex">
                            Send Message

                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="46">
                                <defs>
                                    <linearGradient
                                        id="1"
                                        x1="468.533"
                                        x2="977.65"
                                        y1="1641.865"
                                        y2="728.687"
                                    >
                                        <stop offset="0%" stopColor="#FFF"></stop>
                                        <stop offset="100%" stopColor="#F2F2F2"></stop>
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="var(--title-color)"
                                    d="M-2522.857 465.22l285.714 294.285 352.857 72.857-127.143-351.428-511.428-15.715z"
                                    transform="scale(.20122 .19913) scale(.22043 .21958) matrix(-1 0 0 1 -3000 -360) translate(-82.857 -80) rotate(15.159 -2397.205 2960.712) matrix(.62826 0 0 .62826 -2917.652 923.952) scale(-1 1) rotate(15.159 -714.674 13701.92)"
                                ></path>
                                <path
                                    fill="var(--title-color)"
                                    d="M-1840 292.362l560 280 80 240-160-160-480-360z"
                                    transform="scale(.20122 .19913) scale(.22043 .21958) matrix(-1 0 0 1 -3000 -360) translate(-82.857 -80) rotate(15.159 -2397.205 2960.712) matrix(.62826 0 0 .62826 -2917.652 923.952)"
                                ></path>
                                <path
                                    fill="#FFFFFF"
                                    d="M-1200 812.362l-280-200 120 40 160 160z"
                                    transform="scale(.20122 .19913) scale(.22043 .21958) matrix(-1 0 0 1 -3000 -360) translate(-82.857 -80) rotate(15.159 -2397.205 2960.712) matrix(.62826 0 0 .62826 -2917.652 923.952)"
                                ></path>
                                <path
                                    fill="#FFFFFF"
                                    d="M-1840 292.362l320 680 160-320-480-360zM-1280 572.362l280-120-840-160 560 280z"
                                    transform="scale(.20122 .19913) scale(.22043 .21958) matrix(-1 0 0 1 -3000 -360) translate(-82.857 -80) rotate(15.159 -2397.205 2960.712) matrix(.62826 0 0 .62826 -2917.652 923.952)"
                                ></path>
                            </svg>

                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
