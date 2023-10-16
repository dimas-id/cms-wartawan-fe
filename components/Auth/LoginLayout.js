import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputText from "@/components/Inputs/Text";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import useInput from '@/hooks/useInput';
import { login } from '@/states/auth/action';

export default function LoginLayout() {

    const router = useRouter();

    const [email, setEmail] = useInput('')
    const [username, setUsername] = useInput('');
    const [password, setPassword] = useInput('');

    const [isUseUsername, setIsUseUsername] = useState(true);

    const handleUseUsername = (value) => {
        setIsUseUsername(value);
    };

    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (isUseUsername) {
            dispatch(login({
                username, password,
                onSuccess: () => {
                    router.push("/overview");
                }
            }));
        } else {
            dispatch(login({
                email, password,
                onSuccess: () => {
                    router.push("/overview");
                }
            }));
        }
    };


    return (
        <main className='flex justify-center items-center min-h-screen w-[640] bg-blue-50'>

            <div className="flex flex-col items-center place-items-center p-20 gap-y-4 rounded-xl bg-white border-2 border-blue-400">

                <div className='flex flex-col place-items-center pb-4'>
                    <h1 className="font-heading place-self-center text-6xl font-bold text-black">AINGS</h1>
                    <p className='font-body text-lg place-self-center text-center text-black'>Artificial Intelligence News Generator System</p>
                </div>

                <h1 className="font-heading place-self-center text-2xl font-bold pb-4 text-black">Masuk</h1>

                <div className='flex flex-col place-items-center gap-y-2 justify-stretch'>
                    {isUseUsername
                        ? <>
                            <p className='font-body text-black'>
                                Coba masuk dengan <span
                                    className='text-blue-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer'
                                    onClick={() => { handleUseUsername(false) }}>email</span></p>
                            <InputText id="username" type="text" placeholder="Username" onInputChange={setUsername} />
                        </>
                        : <>
                            <p className='font-body text-black'>
                                Coba masuk dengan <span
                                    className='text-blue-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer'
                                    onClick={() => { handleUseUsername(true) }}>username</span></p>
                            <InputText id="email" type="text" placeholder="Email" onInputChange={setEmail} />
                        </>
                    }
                    <InputText id="password" type="password" placeholder="Password" onInputChange={setPassword} />
                </div>

                <button className="font-body py-2 px-5 text-white bg-blue-600 rounded-lg hover:bg-blue-400"
                    onClick={handleLogin}>Masuk</button>

                <p className='font-body text-black'>
                    Belum punya akun? <Link href="/auth/register">
                        <span className='text-blue-500 hover:underline hover:decoration-blue-500'>Daftarkan</span></Link>.
                </p>

            </div>

        </main>
    );
}