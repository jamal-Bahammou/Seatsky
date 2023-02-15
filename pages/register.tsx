import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const register = () => {
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/');
    };

    return (
        <div className="bg-[#F6F8F9] grid place-content-center h-screen">
            <Head>
                <title>HEITZ System | Créer un compte</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex flex-col items-center bg-white w-[414px] m-h-[50vh] p-5 rounded-md">
                <div className="mb-[20px] grow-1">
                    <Link href="/">
                        <img className="w-[190px] my-3 cursor-pointer place-self-center" src="/img/ticketmaster-logo.png" alt="logo" />
                    </Link>
                    <p className="text-[22px] font-semibold text-[#677383] text-center">Créer un compte</p>
                </div>
                <form className="flex flex-col">
                    <div className="grid grid-cols-2 gap-2">
                        <input type="text" name="" className="text-lg text-[#677383] bg-[#f6f8f9] rounded-md outline-none px-4 py-2 mb-2 border border-[#cfd4d9]" placeholder="Prénom" />
                        <input type="text" name="" className="text-lg text-[#677383] bg-[#f6f8f9] rounded-md outline-none px-4 py-2 mb-2 border border-[#cfd4d9]" placeholder="Nom" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <select name="" id="" className="text-lg text-[#677383] px-4 py-2 mb-2 outline-none bg-[#f6f8f9] border border-[#cfd4d9] rounded-md">
                            <option value="" className="">
                                M.
                            </option>
                            <option value="" className="">
                                MME
                            </option>
                        </select>
                        <input type="date" lang="fr-CA" placeholder="Né(e) le" className="col-span-2 text-[#677383] px-4 py-2 mb-2 outline-none bg-[#f6f8f9] border border-[#cfd4d9] rounded-md" />
                    </div>
                    <input type="text" name="" className="text-lg text-[#677383] bg-[#f6f8f9] rounded-md outline-none px-4 py-2 mb-2 border border-[#cfd4d9]" placeholder="Email" />
                    <input type="text" name="phone" autoComplete="new-phone" className="text-lg text-[#677383] bg-[#f6f8f9] rounded-md outline-none px-4 py-2 mb-2 border border-[#cfd4d9]" placeholder="Numéro de téléphone" />
                    <input type="password" name="" autoComplete="new-password" className="text-lg text-[#677383] bg-[#f6f8f9] rounded-md outline-none px-4 py-2 mb-3 border border-[#cfd4d9]" placeholder="Mot de passe" />
                    <div className="">
                        <button onClick={() => handleSubmit()} className="text-[17px] text-white bg-[#2B246A] px-5 py-[7px] rounded-full hover:bg-[#54B2E5] w-full">
                            Créer un compte
                        </button>
                        <div className="text-[13px] leading-[14px] text-[#677383] text-center mt-[6px]">
                            En vous connectant ou en créant un compte, vous reconnaissez et acceptez notre <span className="text-[#1475c4]">politique de confidentialité</span>
                        </div>
                    </div>
                    <div className="text-[#677383] text-center my-2">
                        Vous avez un compte ?{' '}
                        <Link href="/login" className="text-[#0d8282] hover:text-[#af346b]">
                            Connexion
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default register;
