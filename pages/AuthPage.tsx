import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';
import { LogInIcon, UserPlusIcon, LogoIcon } from '../components/icons';

const authImages = [
  'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1920&auto=format&fit=crop', // grocery shopping
  'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1920&auto=format&fit=crop', // community meal
  'https://images.unsplash.com/photo-1599057138244-325150e7a799?q=80&w=1920&auto=format&fit=crop', // farmer's market
];

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<UserRole>(UserRole.REPLATER);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [bgImage, setBgImage] = useState(authImages[0]);

  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Pick a random background image on mount
    setBgImage(authImages[Math.floor(Math.random() * authImages.length)]);
  }, []);

  useEffect(() => {
    if (location.state?.defaultRole) {
      setRole(location.state.defaultRole);
    }
  }, [location.state]);

  const roleOptionsForLogin = Object.values(UserRole).filter(r => r !== UserRole.ADMIN);
  const roleOptionsForRegister = [UserRole.REPLATER, UserRole.SHAREBITE];
  const currentRoleOptions = isLogin ? roleOptionsForLogin : roleOptionsForRegister;

  useEffect(() => {
    if (!isLogin && !roleOptionsForRegister.includes(role)) {
      setRole(UserRole.REPLATER);
    }
  }, [isLogin, role, roleOptionsForRegister]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let user;
      if (isLogin) {
        user = await login(email, password, role);
        if (!user) throw new Error("Invalid credentials or role mismatch. Please try again.");
      } else {
        user = await register(email, name, password, role);
        if (!user) throw new Error("An account with this email for the selected role already exists.");
      }
      
      switch (user.role) {
        case UserRole.REPLATER: navigate('/receiver/dashboard'); break;
        case UserRole.SHAREBITE: navigate('/provider/dashboard'); break;
        case UserRole.LOOKLOOKER: navigate('/representative/panel'); break;
        default: navigate('/');
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-10rem)] flex items-center justify-center py-12 -m-8 px-4 sm:px-6 lg:px-8">
       <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 w-full max-w-md bg-background/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
        <div className="flex justify-center mb-6">
            <LogoIcon className="h-12 w-12 text-primary" />
            <span className="text-4xl font-logo text-primary font-bold tracking-wider ml-2">Have Bite</span>
        </div>
        <div className="flex border-b border-dark-text/20 mb-6">
          <button onClick={() => setIsLogin(true)} className={`w-1/2 py-4 text-center font-semibold transition-colors ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-dark-text/90 hover:text-primary'}`}>
            Login
          </button>
          <button onClick={() => setIsLogin(false)} className={`w-1/2 py-4 text-center font-semibold transition-colors ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-dark-text/90 hover:text-primary'}`}>
            Sign Up
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center text-dark-text mb-4">{isLogin ? 'Welcome Back!' : 'Create Your Account'}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="bg-accent/20 text-red-700 font-semibold p-3 rounded-lg text-center">{error}</p>}

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-dark-text">I am a...</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text"
            >
              {currentRoleOptions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-text">Full Name / Organization</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text" />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-text">Email Address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text" />
          </div>

          <div>
            <label htmlFor="password"  className="block text-sm font-medium text-dark-text">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text" />
          </div>

          <div>
            <button type="submit" disabled={loading} className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-dark-text/40">
              {loading ? 'Processing...' : (isLogin ? <><LogInIcon/>Login</> : <><UserPlusIcon/>Sign Up</>)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;