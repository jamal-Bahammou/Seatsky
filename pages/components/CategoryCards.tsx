import React from 'react';
import Card from './Card';
import { items } from '../../database';
import Link from 'next/link';

const CategoryCards = ({ category, more }) => {
    return (
        <div className="">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-[#2B246A] text-2xl font-semibold capitalize">{category?.name}</h4>
                {more && (
                    <Link href={`/categories/${category?.slug}`} className="text-[#2B246A] text-md font-normal hover:text-[#54B2E5] hover:cursor-pointer hover:underline">
                        tout afficher
                    </Link>
                )}
            </div>
            <div className="grid grid-cols-5 grid-rows-1 gap-4">{more ? items[category?.slug]?.slice(0, 5).map(({ name, slug }, index) => <Card key={index} name={name} slug={slug} />) : items[category?.slug]?.map(({ name, slug }, index) => <Card key={index} name={name} slug={slug} />)}</div>
        </div>
    );
};

export default CategoryCards;
