import Head from 'next/head';
import React from 'react';
import BilletterieCard from './components/BilletterieCard';
import Footer from './components/Footer';
import Header from './components/Header';

const Billetterie = () => {
    return (
        <div className="h-screen">
            <Head>
                <title>HEITZ System | Billetterie</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header category="billetterie" />
            <div className="flex flex-col items-center space-y-8 px-8 py-10 bg-[#f6f8f9]">
                <BilletterieCard />
                <BilletterieCard />
                <BilletterieCard />
            </div>
            <Footer />
        </div>
    );
};

export default Billetterie;
