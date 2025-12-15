import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const BrutalButton = ({ children, onClick, className, href, disabled }) => {
    const baseClasses = "brutal-btn-base px-6 py-3 text-xl font-bold border-3 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";

    const mergedClasses = twMerge(baseClasses, className);

    if (href) {
        return (
            <motion.a
                href={href}
                className={mergedClasses}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={mergedClasses}
            disabled={disabled}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

export default BrutalButton;
