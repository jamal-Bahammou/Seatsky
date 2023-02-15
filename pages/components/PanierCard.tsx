import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { useSeatskyStore } from '../../database/zustand';
import Link from 'next/link';

const PanierCard = ({ card }) => {
    const { panier, setPanier, setSelectedPanier } = useSeatskyStore();
    const {
        id,
        name,
        slug,
        quantity,
        ticket: { address, date, price, section, zone },
    } = card;
    moment.locale('fr');

    const deleteCardHandler = (id) => {
        const delPanier = panier.filter((item) => item.id !== id);
        setPanier(delPanier);
        window.localStorage.setItem('storagePanier', JSON.stringify(delPanier));
    };
    return (
        <div className="flex items-stretch justify-between bg-white text-[#677383] border border-[#cfd4d9] p-4 cursor-pointer ease-in duration-200 hover:bg-[#dafafc] min-w-[75%]">
            <div className="flex">
                <div className="flex flex-col justify-center items-center border-r border-[#cfd4d9] pr-2">
                    <div className="text-xs rounded-full px-2 py-[2px] text-[#db2c7b] bg-[#fbeaf1] mb-1">{moment(new Date(date)).endOf('day').fromNow()}</div>
                    <div className="text-xl font-bold text-[#29b2b2] uppercase">{moment(date).format('DD MMM')}</div>
                    <div className="text-sm uppercase">{moment(date).format('ddd')}</div>
                    <div className="text-sm">{moment(date).format('HH:mm')}</div>
                </div>
                <div className="flex flex-col justify-center px-5">
                    <div className="text-xl text-[#0d8282]">{name}</div>
                    <div className="text-lg">{address}</div>
                    {/* <div className="text-sm">{section}</div> */}
                    <div className="text-sm">{`${section} ( zone ${zone} )`}</div>
                </div>
            </div>
            <div className="flex items-stretch">
                <div className="flex flex-col items-center justify-center flex-shrink border-x border-[#cfd4d9] px-4">
                    <div className="text-lg font-bold text-[#29b2b2] uppercase">{quantity} billet(s)</div>
                    <div className="text-base">{quantity * price} €‎</div>
                </div>
                <div className="self-center grid place-items-center pl-5 pr-3">
                    <Link href={`/details/${slug}?type=modifier`} onClick={() => setSelectedPanier(card)} className="text-lg capitalize cursor-pointer hover:text-[#2B246A]">
                        Modifier
                    </Link>
                    <div onClick={() => deleteCardHandler(id)} className="text-lg capitalize cursor-pointer hover:text-[#fc114c]">
                        supprimer
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PanierCard;
