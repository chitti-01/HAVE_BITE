import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';
import { LogoIcon, LogOutIcon, UserIcon, BotMessageSquareIcon, FilmIcon, MapIcon, HandHeartIcon, ClipboardCheckIcon, UserCogIcon, LeafIcon } from './icons';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getNavLinks = () => {
    if (!user) {
      return (
        <Link to="/auth" className="bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Login / Sign Up
        </Link>
      );
    }

    const linkClass = "hover:text-accent transition-colors";

    let links: React.ReactNode[] = [];
    switch (user.role) {
      case UserRole.REPLATER:
        links = [
          <Link key="dash" to="/receiver/dashboard" className={linkClass}>Dashboard</Link>,
          <Link key="compost" to="/receiver/compost" className={`${linkClass} flex items-center gap-2`}><LeafIcon/> Compost Hub</Link>,
          <Link key="ai" to="/receiver/ai-recipes" className={`${linkClass} flex items-center gap-2`}><BotMessageSquareIcon/> Clove AI</Link>,
          <Link key="ent" to="/receiver/entertainment" className={`${linkClass} flex items-center gap-2`}><FilmIcon/> Meels</Link>,
          <Link key="map" to="/receiver/map" className={`${linkClass} flex items-center gap-2`}><MapIcon/> WNZ</Link>,
        ];
        break;
      case UserRole.SHAREBITE:
        links = [
          <Link key="dash" to="/provider/dashboard" className={`${linkClass} flex items-center gap-2`}><HandHeartIcon/> My Sharebites</Link>,
          <Link key="compost" to="/provider/compost" className={`${linkClass} flex items-center gap-2`}><LeafIcon/> Add Compost</Link>,
        ];
        break;
      case UserRole.LOOKLOOKER:
        links = [
          <Link key="panel" to="/representative/panel" className={`${linkClass} flex items-center gap-2`}><ClipboardCheckIcon/> LookLooker Panel</Link>,
        ];
        break;
       case UserRole.ADMIN:
        links = [
          <Link key="panel" to="/admin/dashboard" className={`${linkClass} flex items-center gap-2`}><UserCogIcon/> Admin Panel</Link>,
        ];
        break;
    }

    return (
      <>
        <nav className="hidden md:flex items-center space-x-6 text-background font-medium">
          {links}
        </nav>
        <div className="flex items-center space-x-4">
            <span className="text-sm text-background/80 flex items-center gap-2"><UserIcon className="text-background/80"/> {user.email} ({user.role})</span>
            <button onClick={handleLogout} className="bg-accent text-white px-3 py-2 rounded-lg hover:bg-red-500 transition-colors flex items-center gap-2">
                <LogOutIcon /> Logout
            </button>
        </div>
      </>
    );
  };

  return (
    <header className="bg-header-blue shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
             <LogoIcon className="h-10 w-10" />
             <span className="text-3xl font-logo text-background font-bold tracking-wider">Have Bite</span>
          </Link>
          <div className="flex items-center space-x-6">
            {getNavLinks()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;