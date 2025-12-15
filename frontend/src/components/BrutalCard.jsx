import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const BrutalCard = ({ children, className }) => {
    return (
        <motion.div
            className={twMerge("brutal-card border-3 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6", className)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default BrutalCard;
