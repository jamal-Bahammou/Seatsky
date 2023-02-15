import Link from 'next/link';
import React from 'react';
import { useSeatskyStore } from '../../database/zustand';

const Card = ({ name, slug }) => {
    const { setSelectedEvent } = useSeatskyStore();

    return (
        <Link href={`/details/${slug}`} onClick={() => setSelectedEvent({ name, slug })}>
            <div className="cursor-pointer">
                <img className="rounded-lg" src={`/events/${slug}.png`} alt={slug} />
                <h4 className="text-xl font-semibold my-2">{name}</h4>
            </div>
        </Link>
    );
};

export default Card;
