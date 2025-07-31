
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserRole } from '../../types';
import { LogInIcon, UserCogIcon } from '../../components/icons';

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await login(email, password, UserRole.ADMIN);
      if (user) {
        navigate('/admin/dashboard');
      } else {
        throw new Error('Invalid admin credentials.');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-6">
            <UserCogIcon className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-3xl font-bold text-dark-text">Admin Login</h1>
            <p className="text-dark-text/90 mt-2">Access the Have Bite control panel.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center">{error}</p>}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-text">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password"  className="block text-sm font-medium text-dark-text">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
              autoComplete="current-password"
            />
          </div>

          <div>
            <button type="submit" disabled={loading} className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-dark-text/40">
              {loading ? 'Authenticating...' : <><LogInIcon/>Login</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;