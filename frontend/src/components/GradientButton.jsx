import React from 'react';
import { Heart } from 'lucide-react';

const GradientButton = ({ children, onClick, className = '', type = 'button', showIcon = true }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`gradient-btn ${className}`}
        >
            {showIcon && <Heart size={18} fill="currentColor" />}
            {children}
        </button>
    );
};

export default GradientButton;
