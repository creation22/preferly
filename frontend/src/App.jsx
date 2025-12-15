import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import VotePage from './pages/VotePage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoginPage from './pages/LoginPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { registerUser } from './api';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = ({ erp }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><VotePage erp={erp} /></PageWrapper>} />
        <Route path="/leaderboard" element={<PageWrapper><LeaderboardPage /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [erp, setErp] = useState(localStorage.getItem('erp') || null);

  const handleLogin = async (newErp) => {
    try {
      await registerUser(newErp);
      localStorage.setItem('erp', newErp);
      setErp(newErp);
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed, please try again.');
    }
  };

  if (!erp) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-text-primary)] selection:bg-[var(--color-purple)] selection:text-white pb-20">
        <Navbar erp={erp} />
        <AnimatedRoutes erp={erp} />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
