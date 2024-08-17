import React, { useRef } from 'react'

const SimpleForm: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if (emailRef.current && passwordRef.current) {
            alert('Validate....');
            // alert(`Email:${emailRef.current.value} password:${passwordRef.current.value}`);
        }
    }
    return (
        <>
        <form className='mt-8 mb-3' onSubmit={onSubmit}>
            <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-bold mb-2'>Email</label>
                <input 
                    className='border border-gray-300 rounded px-3 py-2 w-1/2'
                    id='email'
                    ref={emailRef}
                    type='email'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='password' className='block text-sm font-bold mb-2'>Password</label>
                <input 
                    className='border border-gray-300 rounded px-3 py-2 w-1/2'
                    id='password'
                    ref={passwordRef}
                    type='password'
                />
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow'>Log in</button>
        </form>
        <div className='flex flex-row items-center'>
            <p className='mr-2 text-sm'>Do not have an account?</p>
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow' onClick={() => alert('Register')}>Register</button>
        </div>
        </>
  )
}

export default SimpleForm