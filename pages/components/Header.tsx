import Link from 'next/link';
import React from 'react';
import { categories } from '../../database';
import { useSeatskyStore } from '../../database/zustand';

const Header = ({ category }) => {
    const {
        auth: { authenticated, user },
        signOut,
        panier,
    } = useSeatskyStore();

    const logOut = () => {
        // zustand -
        signOut();
        // localstorage -
        window.localStorage.setItem('signInformation', JSON.stringify({}));
    };

    return (
        <div className="px-8 py-4 shadow-md">
            <div className="flex justify-between pb-4">
                <div className="flex space-x-6 h-10">
                    <Link href="/" className="grid">
                        <img className="w-[140px] cursor-pointer place-self-center " src="/img/ticketmaster-logo.png" alt="logo" />
                    </Link>
                    <div className="flex items-center space-x-4 w-96 rounded-full bg-[#F6F8F9] border border-[#e3e6e8] px-5">
                        <img className="h-[22px] w-[22px]" src="/img/search.png" alt="search" />
                        <input className="bg-[#F6F8F9] grow outline-none" name="search" placeholder="Événement, artiste ou équipe" />
                    </div>
                </div>
                <div className="flex items-center space-x-6 font-medium">
                    <Link href="/panier" className={category == 'panier' ? 'text-[#54B2E5] border-b-2 border-[#54B2E5] cursor-pointer hover:text-[#54B2E5] relative' : 'cursor-pointer hover:text-[#54B2E5] relative'}>
                        Panier
                        {panier.length > 0 && <span className="bg-[#fc114c] h-[6px] w-[6px] rounded-full absolute"></span>}
                    </Link>
                    <Link href="/billetterie" className={category == 'billetterie' ? 'text-[#54B2E5] border-b-2 border-[#54B2E5] cursor-pointer hover:text-[#54B2E5]' : 'cursor-pointer hover:text-[#54B2E5]'}>
                        Billetterie
                    </Link>
                    {!authenticated ? (
                        <Link href="/login" className="flex items-center space-x-3 cursor-pointer hover:text-[#54B2E5]">
                            <p>Se connecter</p>
                            <div className="bg-[#EFF5F8] h-[35px] w-[35px] grid place-content-center rounded-full">
                                <img className="h-[30px] w-[30px] rounded-full" src="/img/user.png" alt="user" />
                            </div>
                        </Link>
                    ) : (
                        <>
                            <p onClick={() => logOut()} className="cursor-pointer hover:text-[#54B2E5]">
                                Déconnexion
                            </p>
                            <div className="flex items-center space-x-3 cursor-default">
                                <p className="lowercase first-letter:capitalize">{user.firstName}</p>
                                <div className="bg-[#EFF5F8] h-[35px] w-[35px] grid place-content-center rounded-full">
                                    <img className="h-[35px] w-[35px] rounded-full" src={`http://fitness.e78.cloud0305.heitzsystem.com:8081/${user.photo}`} alt="user" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="flex space-x-6 font-medium px-[100px]">
                <Link className={category == '/' ? 'text-[#54B2E5] border-b-2 border-[#54B2E5]' : ''} href="/">
                    Home
                </Link>
                {categories.map(({ name, slug }, index) => (
                    <Link className={category?.slug == slug ? 'text-[#54B2E5] border-b-2 border-[#54B2E5]' : ''} key={index} href={`/categories/${slug}`}>
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Header;
