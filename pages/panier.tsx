import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useSeatskyStore } from '../database/zustand';
import Paybox, { handlePayment } from '../src/paybox';
import Footer from './components/Footer';
import Header from './components/Header';
import PanierCard from './components/PanierCard';

const Panier = () => {
    const { panier, setPanier } = useSeatskyStore();
    const [body, setBody] = useState(null);
    const [total, setTotal] = useState(0);

    // GENERATE PAYBOX FORM
    useEffect(() => {
        let total = 0;
        let email = 'jamal.bahammou456@gmail.com';
        panier.map(({ quantity, ticket }) => (total += quantity * ticket.price));
        setTotal(total);
        if (panier.length > 0) handlePayment(total, email, setBody);
    }, [panier]);

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>HEITZ System | Panier</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header category="panier" />
            <div className="flex flex-col items-center grow px-8 py-10 bg-[#f6f8f9]">
                {panier.map((card) => (
                    <PanierCard key={card.id} card={card} />
                ))}
            </div>
            <div className="flex flex-col items-end fixed bottom-6 right-6">
                <div className="flex items-center text-white bg-[#fc114c] text-[18px] w-fit rounded-full px-5 py-2 mb-2">
                    <img className="h-[22px] w-[22px] mr-2" src="/img/price-tag.png" alt="price" />
                    Total: {total} €
                </div>
                {body !== null && <Paybox body={body} />}
            </div>
            <Footer />
        </div>
    );
};

export default Panier;
