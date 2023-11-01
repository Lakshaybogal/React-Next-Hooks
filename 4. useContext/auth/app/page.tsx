'use client'
import { useState } from 'react'
import { useAuth } from './Auth/AuthContext/context'
import { useRouter } from 'next/navigation';
import "@utils/authApp.css"
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';
type User = {
  name: string;
  email: string;
}
const Log = () => {
  const auth = useAuth();
  const navigate = useRouter();
  const [user, setUser] = useState<User>({
    name: '',
    email: ''
  });
  const handleLogin = (e) => {
    e.preventDefault()
    const userData: User = {
      name: user.name,
      email: user.email
    }
    if (user.name !== '' && user.email !== '') {
      auth.login(userData);
      navigate.push('/Auth');
    } else {
      alert("Invalid Data")
    }
  }
  return (

    <section className="flex justify-center flex-col items-center ">
      <h1 className="font-mono font-black text-6xl pt-10 mb-4 text-center">
        Auth App
      </h1>
      <form className='flex flex-col gap-3 items-center' onSubmit={handleLogin}>
        <input
          className=' text-2xl border-2 border-white rounded-md'
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
          className='text-2xl border-2 border-white rounded-md'
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <button
          className='text-xl border-2 border-white rounded-full w-40 '>Login</button>
      </form>
      <h2 className="flex justify-center font-medium mt-20">
        <Link rel="stylesheet" href="https://github.com/Lakshaybogal" >
          <span className="flex justify-center items-center text-5xl font-normal pb-2">
            <FaGithubSquare />
          </span>

          Github Link
        </Link>
      </h2>
    </section>
  )
}

export default Log