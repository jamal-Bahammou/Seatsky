import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CategoryCards from '../components/CategoryCards';
import Header from '../components/Header';
import { categories } from '../../database';
import Footer from '../components/Footer';

const CategoryPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [category, setCategory] = useState({ name: '', slug: '', status: false });

    useEffect(() => {
        const res = categories.find((item) => item.slug == slug);
        setCategory(res);
    }, [slug]);

    return (
        <div className="min-h-screen">
            <Head>
                <title>HEITZ System | {category?.name}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header category={category} />

            <div className="bg-white h-full px-8 grid gap-5 my-8 overflow-hidden">
                <CategoryCards category={category} more={false} />
            </div>

            <Footer />
        </div>
    );
};

export default CategoryPage;
