import type { NextPage } from 'next';
import Head from 'next/head';
import { categories } from '../database';
import CategoryCards from './components/CategoryCards';
import Footer from './components/Footer';
import Header from './components/Header';

const Home: NextPage = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>HEITZ System | Home</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header category="/" />

            <div className="bg-white h-full px-8 grid gap-5 my-8">{categories.map((category, index) => (category.status ? <CategoryCards key={index} category={category} more={true} /> : null))}</div>

            <Footer />
        </div>
    );
};

export default Home;
