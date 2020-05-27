import React, { useState } from 'react';
import './Contact.css';
import { TextField, makeStyles, Button, Typography } from '@material-ui/core';
import Plane from '../../icons/send-plane.svg';
import emailjs from 'emailjs-com';
import Footer from '../Footer/Footer';

const useStyles = makeStyles({
    textField: {
        margin: '0.3rem',
        '& label': {
            color: '#ACACAC',
        },
        '& label.Mui-focused': {
            color: '#ACACAC',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
        '& .MuiOutlinedInput-root': {
            width: '25rem',
            ['@media (max-width:780px)']: {
                // eslint-disable-line no-useless-computed-key
                width: '72vw',
            },
            backgroundColor: '#fff',
            '& fieldset': {
                borderColor: '#ACACAC',
            },
            '&:hover fieldset': {
                borderColor: '#ACACAC',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ACACAC',
            },
        },
    },
    addButton: {
        backgroundColor: '#fff',
        color: '#000',
        borderColor: '€ACACAC',

        borderRadius: '20px',
        margin: '0.4rem 0',
    },
});

const Contact = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    function validateEmail() {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    function validateMessage() {
        return message.length === 0;
    }
    async function sendMessage() {
        setError(false);
        setMessageError(false);
        let isError = false;
        if (!validateEmail()) {
            setError(true);
            isError = true;
        }
        if (validateMessage()) {
            setMessageError(true);
            isError = true;
        }
        if (!isError) {
            var service_id = 'default_service';
            var template_id = 'template_VhHfxn4A';
            var user_id = 'user_XYrhv13HJdrAUmT3Q6QLq';

            emailjs.send(
                service_id,
                template_id,
                { from_name: email, message_html: message },
                user_id
            );
            setEmail('');
            setMessage('');
        }
    }

    return (
        <section className="contact" id="contact">
            <div data-aos="fade-up" className="contact-header">
                <h1>Contact</h1>
            </div>
            <div data-aos="fade-up" className="contact-info">
                <p>
                    Feel free to send me a direct message here or via my social
                    links if you are interested in my work, have a project to
                    work on or simply want to know my favorite football team .
                </p>

                <TextField
                    error={error}
                    label="Email"
                    id="custom-css-outlined-input"
                    variant="outlined"
                    className={classes.textField}
                    onChange={(e, n) => {
                        setEmail(e.target.value);
                    }}
                    InputProps={{
                        style: {
                            color: 'black',
                            fontFamily: 'Source Sans Pro',
                        },
                    }}
                    value={email}
                    helperText={
                        error ? 'You must enter a valid email adress' : ''
                    }
                ></TextField>
                <TextField
                    error={messageError}
                    label="Message"
                    id="custom-css-outlined-input"
                    variant="outlined"
                    className={classes.textField}
                    multiline
                    rows={10}
                    onChange={(e, n) => {
                        setMessage(e.target.value);
                    }}
                    InputProps={{
                        style: {
                            color: 'black',
                            fontFamily: 'Source Sans Pro',
                        },
                    }}
                    value={message}
                    helperText={
                        messageError
                            ? 'Please do not send me empty messages!'
                            : ''
                    }
                ></TextField>
                <Button
                    variant="contained"
                    className={classes.addButton}
                    onClick={sendMessage}
                >
                    <img className="plane" src={Plane} alt=" "></img>
                    <Typography
                        variant="button"
                        style={{ padding: '0 0.4rem' }}
                    >
                        Send
                    </Typography>
                </Button>
            </div>
            <Footer />
        </section>
    );
};

export default Contact;
