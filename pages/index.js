import React, { useState } from 'react';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import { useRouter } from 'next/navigation'


export default function Home() {

    const router = useRouter()

    const handleRegister = async () => {
      router.push("/auth/register")
    };

    const handleLogin = async () => {
      router.push("/auth/login")  
    };
    
    return (
        <main className='flex justify-center items-center min-h-screen w-[640] bg-blue-50'>

            <BackgroundImage image_url="https://source.unsplash.com/WYd_PkCa1BY" />

                <div className="flex flex-col w-96 items-center place-items-center px-20 pt-12 pb-20 gap-y-4 
                    rounded-xl bg-white border-2 border-blue-400">
                    
                    <div className='flex flex-col place-items-center pb-6'>
                        <h1 className="font-heading place-self-center text-6xl font-bold">AINGS</h1>
                        <p className='font-body text-lg place-self-center text-center'>Artificial Intelligence News Generator System</p>
                    </div>

                    <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm self-stretch"
                            onClick={handleRegister}>Daftarkan Akun</button>

                    <button className="bg-blue-200 py-2 px-4 rounded-lg shadow-sm self-stretch"
                            onClick={handleLogin}>Masuk dengan Akun yang Sudah Ada</button>

                </div>
            
        </main>
    );
}