import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSeatskyStore } from '../database/zustand';

const login = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const { signedIn, loggedIn } = useSeatskyStore();

    const handleLoginForm = async (values) => {
        try {
            const res1 = await axios.post(`http://fitness.e78.cloud0305.heitzsystem.com:8081/api/auth/signin`, values);
            signedIn(res1.data);
            window.localStorage.setItem('signInformation', JSON.stringify(res1.data));

            let res2 = await axios.get(`http://fitness.e78.cloud0305.heitzsystem.com:8081/api/users/${res1.data?.id}`, {
                headers: { Authorization: res1.data?.token },
            });
            loggedIn(res2.data);

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-[#F6F8F9] grid place-content-center h-screen">
            <Head>
                <title>HEITZ System | Connexion</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex flex-col items-center bg-white w-[414px] m-h-[50vh] p-5 rounded-md">
                <div className="mb-[20px] grow-1">
                    <Link href="/">
                        <img className="w-[190px] my-3 cursor-pointer place-self-center" src="/img/ticketmaster-logo.png" alt="logo" />
                    </Link>
                    <p className="text-[22px] font-semibold text-[#677383] text-center">Se connecter</p>
                </div>
                <form onSubmit={handleSubmit(handleLoginForm)} className="flex flex-col">
                    <input {...register('email')} type="text" autoComplete="new-email" className="text-[] text-lg text-[#677383] bg-[#f6f8f9] rounded-md outline-none px-4 py-2 mb-2 border border-[#cfd4d9]" placeholder="Email" />
                    <input {...register('password')} type="password" autoComplete="new-password" className="text-[] text-lg text-[#677383] bg-[#f6f8f9] rounded-md outline-none px-4 py-2 border border-[#cfd4d9]" placeholder="Mot de passe" />
                    <div className="text-base text-[#0d8282] my-2 self-end">Mot de passe oublié</div>
                    <div className="">
                        <button className="text-[17px] text-white bg-[#2B246A] px-5 py-[7px] rounded-full hover:bg-[#54B2E5] w-full">Connexion</button>
                        <div className="text-[13px] leading-[14px] text-[#677383] text-center mt-[6px]">
                            En vous connectant ou en créant un compte, vous reconnaissez et acceptez notre <span className="text-[#1475c4]">politique de confidentialité</span>
                        </div>
                    </div>
                    <div className="text-[#677383] text-center my-2">
                        Nouveau sur heitz system ?{' '}
                        <Link href="/register" className="text-[#0d8282] hover:text-[#af346b]">
                            Créer un compte
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default login;
