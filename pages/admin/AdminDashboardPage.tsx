import React, { useState, useEffect, FormEvent } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useVideos } from '../../hooks/useVideos';
import { User, UserRole } from '../../types';
import { DUMMY_USERS } from '../../data/dummyData';
import { UserPlusIcon, TrashIcon, UserCogIcon, FilmIcon } from '../../components/icons';

const AdminDashboardPage: React.FC = () => {
    // LookLooker State
    const { createLookLooker, deleteUser } = useAuth();
    const [representatives, setRepresentatives] = useState<User[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repError, setRepError] = useState('');
    const [repSuccess, setRepSuccess] = useState('');
    const [repLoading, setRepLoading] = useState(false);

    // Video State
    const { videos, addVideo, deleteVideo } = useVideos();
    const [videoTitle, setVideoTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [videoThumbnail, setVideoThumbnail] = useState('');
    const [videoError, setVideoError] = useState('');
    const [videoSuccess, setVideoSuccess] = useState('');
    const [videoLoading, setVideoLoading] = useState(false);

    useEffect(() => {
        setRepresentatives(DUMMY_USERS.filter(u => u.role === UserRole.LOOKLOOKER));
    }, []);

    const handleAddRep = async (e: FormEvent) => {
        e.preventDefault();
        setRepLoading(true);
        setRepError('');
        setRepSuccess('');

        if (!name || !email || !password) {
            setRepError("All fields are required.");
            setRepLoading(false);
            return;
        }

        const newUser = await createLookLooker(email, name, password);
        if (newUser) {
            setRepresentatives(prev => [...prev, newUser]);
            setRepSuccess(`Successfully added ${name} as a LookLooker.`);
            setName('');
            setEmail('');
            setPassword('');
        } else {
            setRepError(`A LookLooker with the email ${email} already exists.`);
        }
        setRepLoading(false);
    };

    const handleRemoveRep = async (userId: string, userName: string) => {
        if (window.confirm(`Are you sure you want to remove ${userName}?`)) {
            await deleteUser(userId);
            setRepresentatives(prev => prev.filter(u => u.id !== userId));
            setRepSuccess(`Successfully removed ${userName}.`);
        }
    };

    const handleAddVideo = (e: FormEvent) => {
        e.preventDefault();
        setVideoLoading(true);
        setVideoError('');
        setVideoSuccess('');

        if (!videoTitle || !videoUrl || !videoThumbnail) {
            setVideoError("All fields are required for videos.");
            setVideoLoading(false);
            return;
        }
        addVideo({ title: videoTitle, url: videoUrl, thumbnail: videoThumbnail });
        setVideoSuccess(`Successfully added video: ${videoTitle}`);
        setVideoTitle('');
        setVideoUrl('');
        setVideoThumbnail('');
        setVideoLoading(false);
    };

    const handleRemoveVideo = (videoId: string, videoTitle: string) => {
        if (window.confirm(`Are you sure you want to remove the video "${videoTitle}"?`)) {
            deleteVideo(videoId);
            setVideoSuccess(`Successfully removed ${videoTitle}.`);
        }
    };

    return (
        <div className="relative -m-8 p-4 sm:p-6 lg:p-8 rounded-lg bg-cover bg-center min-h-[calc(100vh-10rem)]" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop')"}}>
            <div className="absolute inset-0 bg-black/30 -m-8"></div>
            <div className="relative z-10 space-y-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md text-center">
                    <UserCogIcon className="w-16 h-16 mx-auto text-primary mb-4" />
                    <h1 className="text-3xl font-bold text-dark-text">Admin Dashboard</h1>
                </div>

                {/* LookLooker Management */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-dark-text mb-4">Manage LookLooker Accounts</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><UserPlusIcon /> Add New LookLooker</h3>
                            {repError && <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4">{repError}</p>}
                            {repSuccess && <p className="bg-green-100 text-green-700 p-3 rounded-lg text-center mb-4">{repSuccess}</p>}
                            <form onSubmit={handleAddRep} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-dark-text">Full Name</label>
                                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-dark-text">Email Address</label>
                                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text" />
                                </div>
                                <div>
                                    <label htmlFor="password"  className="block text-sm font-medium text-dark-text">Set Password</label>
                                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text" />
                                </div>
                                <button type="submit" disabled={repLoading} className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-colors disabled:bg-dark-text/40">
                                {repLoading ? 'Adding...' : 'Add LookLooker'}
                                </button>
                            </form>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Current LookLookers ({representatives.length})</h3>
                            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                {representatives.length > 0 ? representatives.map(rep => (
                                    <div key={rep.id} className="bg-white/80 p-4 rounded-lg flex justify-between items-center border border-dark-text/10 shadow-sm">
                                        <div>
                                            <p className="font-semibold text-dark-text">{rep.name}</p>
                                            <p className="text-sm text-dark-text/75">{rep.email}</p>
                                        </div>
                                        <button onClick={() => handleRemoveRep(rep.id, rep.name)} className="text-accent hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors">
                                            <TrashIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                )) : <p className="text-center text-dark-text/75 py-8">No LookLookers found.</p>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Management */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-dark-text mb-4">Manage Meels (Videos)</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FilmIcon /> Add New Video</h3>
                            {videoError && <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4">{videoError}</p>}
                            {videoSuccess && <p className="bg-green-100 text-green-700 p-3 rounded-lg text-center mb-4">{videoSuccess}</p>}
                            <form onSubmit={handleAddVideo} className="space-y-4">
                                <div>
                                    <label htmlFor="videoTitle" className="block text-sm font-medium text-dark-text">Video Title</label>
                                    <input type="text" id="videoTitle" value={videoTitle} onChange={e => setVideoTitle(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text" />
                                </div>
                                <div>
                                    <label htmlFor="videoUrl" className="block text-sm font-medium text-dark-text">Video URL</label>
                                    <input type="url" id="videoUrl" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text" placeholder="https://example.com/video.mp4" />
                                </div>
                                <div>
                                    <label htmlFor="videoThumbnail" className="block text-sm font-medium text-dark-text">Thumbnail Image URL</label>
                                    <input type="url" id="videoThumbnail" value={videoThumbnail} onChange={e => setVideoThumbnail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-dark-text/20 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white text-dark-text" placeholder="https://example.com/image.jpg" />
                                </div>
                                <button type="submit" disabled={videoLoading} className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-colors disabled:bg-dark-text/40">
                                    {videoLoading ? 'Adding...' : 'Add Video'}
                                </button>
                            </form>
                        </div>
                        <div>
                             <h3 className="text-xl font-semibold mb-4">Current Videos ({videos.length})</h3>
                            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                {videos.length > 0 ? videos.map(video => (
                                    <div key={video.id} className="bg-white/80 p-2 rounded-lg flex justify-between items-center border border-dark-text/10 shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <img src={video.thumbnail} alt={video.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                                            <p className="font-semibold text-dark-text">{video.title}</p>
                                        </div>
                                        <button onClick={() => handleRemoveVideo(video.id, video.title)} className="text-accent hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors flex-shrink-0 ml-2">
                                            <TrashIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                )) : <p className="text-center text-dark-text/75 py-8">No videos found.</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;