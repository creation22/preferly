import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Trophy, User, Menu, X } from 'lucide-react';

const Navbar = ({ erp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="glass-strong sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent tracking-tight flex items-center gap-2">
              <Heart className="text-[var(--color-coral)]" fill="currentColor" size={24} />
              <span className="hidden sm:inline">preferly</span>
              <span className="sm:hidden">PF</span>
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-12 space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-300 px-4 py-2 rounded-full flex items-center gap-2 ${isActive
                    ? 'bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] text-white shadow-soft'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-coral)]'
                  }`
                }
              >
                <Heart size={18} />
                Vote
              </NavLink>
              <NavLink
                to="/leaderboard"
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-300 px-4 py-2 rounded-full flex items-center gap-2 ${isActive
                    ? 'bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] text-white shadow-soft'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-purple)]'
                  }`
                }
              >
                <Trophy size={18} />
                Leaderboard
              </NavLink>
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-300 px-4 py-2 rounded-full flex items-center gap-2 ${isActive
                    ? 'bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] text-white shadow-soft'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-purple)]'
                  }`
                }
              >
                Privacy
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* User Badge */}
            <div className="bg-gradient-to-r from-[var(--color-light-pink)] to-[var(--color-lavender)] px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-soft flex items-center gap-2">
              <User size={14} className="text-[var(--color-text-secondary)]" />
              <span className="text-[var(--color-text-secondary)] text-xs md:text-sm font-medium hidden sm:inline">User:</span>
              <span className="text-[var(--color-text-primary)] font-semibold text-xs md:text-sm">{erp}</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass-strong border-t border-white/20 shadow-large">
          <div className="px-4 py-4 space-y-2">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${isActive
                  ? 'bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] text-white shadow-soft'
                  : 'text-[var(--color-text-secondary)] hover:bg-white/50'
                }`
              }
            >
              <Heart size={20} />
              Vote
            </NavLink>
            <NavLink
              to="/leaderboard"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${isActive
                  ? 'bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] text-white shadow-soft'
                  : 'text-[var(--color-text-secondary)] hover:bg-white/50'
                }`
              }
            >
              <Trophy size={20} />
              Leaderboard
            </NavLink>
            <NavLink
              to="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${isActive
                  ? 'bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] text-white shadow-soft'
                  : 'text-[var(--color-text-secondary)] hover:bg-white/50'
                }`
              }
            >
              Privacy
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
