import React, { useState } from 'react';
import './CoffeeInvite.css';

const CoffeeInvite = () => {
    const [message, setMessage] = useState('');
    const [noButtonStyle, setNoButtonStyle] = useState({ position: 'absolute', left: '50%', top: '50%' });

    const handleYesClick = () => {
        setMessage(' Then be ready for be mine !!😘❤️');
    };

    const handleNoMouseEnter = () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        setNoButtonStyle({
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`
        });
    };

    return (
        <div className="invite-container">
            <p className="invite-text"> Hey Shaheen You Love Me ? 🤔</p>
            <div className='fs'>
                <button onClick={handleYesClick} className="yes-button">Yes</button>
                <button
                    onMouseEnter={handleNoMouseEnter}
                    style={noButtonStyle}
                    className="no-button"
                >
                    No
                </button>
            </div>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default CoffeeInvite;
