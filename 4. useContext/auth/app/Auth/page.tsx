'use client'
import { useAuth } from './AuthContext/context';
const Welcome = () => {
    const auth = useAuth();
    return (
        <div>
            {
                auth.user !== null ? (
                    <h1 className='font-mono font-black text-6xl pt-10 mb-4 text-center'>Welcome {auth.user.name}</h1>
                ) : (
                    <h2 className='font-mono font-black text-6xl pt-10 mb-4 text-center'>Please Login</h2>
                )
            }
        </div>
    )
}

export default Welcome