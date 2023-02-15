import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import TicketCard from '../components/TicketCard';
import InnerImageZoom from 'react-inner-image-zoom';

import { useSeatskyStore } from '../../database/zustand';
import BilletsModal from '../components/BilletsModal';
import { items, tickets } from '../../database';
import { useRouter } from 'next/router';
import Link from 'next/link';

const detail = () => {
    const router = useRouter();
    const { slug, type } = router.query;

    const { panier, setPanier, selectedEvent, setSelectedEvent, quantity, setQuantity, selectedTicket, setSelectedTicket, selectedPanier, setSelectedPanier } = useSeatskyStore();
    const [billetsModalStatus, setBilletsModalStatus] = useState(true);
    const [billetsButtonStatus, setBilletsButtonStatus] = useState(true);

    const [billetBUttonValid, setBilletButtonValid] = useState(true);

    useEffect(() => {
        if (type === 'modifier') if (!selectedPanier.id) router.push('/panier');
    }, [type, selectedPanier]);

    useEffect(() => {
        console.log(quantity);
    }, [quantity]);

    const onBilletsButtonHandler = (item) => {
        setQuantity(item);
        setBilletsButtonStatus(true);
    };

    const onBackToLists = () => {
        setBilletButtonValid(true);
        setSelectedTicket({ id: '', quantity, name: '', slug: '', ticket: { section: '', zone: '', price: 0, date: '', address: '' } });
    };

    const addTicketToPanier = () => {
        let newPanier = panier;
        if (type === 'modifier') newPanier = panier.filter(({ id }) => id !== selectedPanier.id);
        selectedTicket.quantity = quantity;
        newPanier.unshift(selectedTicket);
        setPanier(newPanier);
        window.localStorage.setItem('storagePanier', JSON.stringify(newPanier));
        onBackToLists();
    };

    // LEFT PART CONTENT 1
    const BilletsLists = () => {
        return (
            <div className="h-[84vh] overflow-y-scroll">
                {tickets.map((ticket, index) => (
                    <TicketCard key={index} ticket={ticket} setBilletButtonValid={setBilletButtonValid} />
                ))}
            </div>
        );
    };

    // LEFT PART CONTENT 2
    const BilletsDetails = () => {
        const {
            ticket: { section, zone, price },
        } = selectedTicket;
        return (
            <div className="h-full flex flex-col">
                <div onClick={() => onBackToLists()} className="bg-white flex items-center border-y border-[#BFC0C0] p-3 drop-shadow-md cursor-pointer hover:bg-[#ebebeb]">
                    <img className="h-6 m-2" src="/img/left-arrow.png" alt="left-arrow" />
                    <div className="text-[19px] text-[#677383]">Retour vers les billets</div>
                </div>
                <div className="bg-white flex-1 overflow-y-scroll">
                    <div className="border-y border-[#BFC0C0] p-3">
                        <h4 className="text-[19px] font-semibold">Section: {section}</h4>
                        <div className="text-base text-[#677383]">Rang {zone}</div>
                    </div>
                    <div className="flex justify-between items-center border-y border-[#BFC0C0] px-4 py-5">
                        <div className="">
                            <h4 className="text-[19px] font-semibold">Vous paierez</h4>
                            <div className="flex items-center">
                                <h4 className="text-[19px] font-semibold">{price} €</h4>
                                <p className="text-base text-[#677383] ml-2">par ticket</p>
                            </div>
                        </div>
                        <div className="bg-[#d8dbe058] border border-[#BFC0C0] rounded-md px-3 py-2 flex flex-col w-44 text-lg">
                            <label htmlFor="billets" className="text-xs text-[#677383]">
                                Quantité
                            </label>
                            <select onChange={(e) => setQuantity(e.target.value * 1)} name="billets" id="billets" className="bg-transparent outline-none cursor-pointer">
                                {[1, 2, 3, 4, 5, 6, 8, 10].map((item, index) => (
                                    <option key={index} selected={quantity === item} value={item}>
                                        {item} billets
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* <div className="my-4">
                        <div className="flex px-4">
                            <img className="h-[28px] w-[28px]" src="/img/billet.png" alt="billet" />
                            <p className="text-[19px] ml-1">Billet mobile</p>
                        </div>
                        <div className="flex mt-4 px-4">
                            <img className="h-[28px] w-[28px]" src="/img/billet.png" alt="billet" />
                            <p className="text-[19px] ml-1">Vue dégagée</p>
                        </div>
                    </div> */}
                </div>
                <div className="bg-white drop-shadow-md px-3">
                    <div onClick={() => addTicketToPanier()} className="text-white text-center bg-[#2B246A] text-[18px] leading-[30px] rounded-full w-full px-4 py-1 my-4 cursor-pointer hover:bg-[#54B2E5]">
                        Ajouter au panier
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden">
            <Head>
                <title>HEITZ System | {selectedEvent.name}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header category={null} />

            <div className="grow grid grid-cols-9">
                {/* LEFT PART  */}
                <div className="bg-gray-200 col-span-3">{billetBUttonValid ? <BilletsLists /> : <BilletsDetails />}</div>

                {/* MIDDLE PART */}
                <div className="bg-gray-100 col-span-4">
                    <InnerImageZoom fadeDuration={250} hasSpacer={true} width="100%" height="100%" className="w-full h-full" src="/stades/stade-1.png" zoomSrc="/stades/stade-1-zoom.png" />
                </div>

                {/* RIGHT PART */}
                <div className="bg-gray-200 col-span-2">
                    {!billetsButtonStatus ? (
                        <div className="bg-white border-y border-[#BFC0C0] p-4">
                            <h4 className="text-base font-semibold">Nombre de billets</h4>
                            <div className="flex justify-between mt-2">
                                {[1, 2, 3, 4, 5].map((item, index) => (
                                    <div key={index} onClick={() => onBilletsButtonHandler(item)} className="text-xl font-semibold cursor-pointer border-2 border-[#2f343b] rounded-md w-11 h-11 grid content-center text-center hover:bg-[#2F343B] hover:text-white">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white border-y border-[#BFC0C0] p-4">
                            <div className="flex justify-between items-center">
                                <h4 className="text-base font-semibold">Nombre de billets</h4>
                                <button onClick={() => setBilletsButtonStatus(false)} className="self-end text-white text-sm bg-[#2B246A] px-4 py-1 mt-1 rounded-full hover:bg-[#54B2E5]">
                                    {quantity} billet(s)
                                </button>
                            </div>
                            <p className="flex items-center text-[16px] leading-[19px] font-normal mt-2">
                                <img className="h-[18px] mr-2 ml-[-6px]" src="/img/info.png" alt="info" />
                                Des places garanties en sièges adjacents pour l'achat de deux billets ou plus .
                            </p>
                        </div>
                    )}
                </div>

                {panier.length > 0 && (
                    <div className="flex flex-col items-end fixed bottom-6 right-6">
                        <Link href="/panier" className="flex items-center text-white bg-[#29b2b2] text-[18px] w-fit rounded-full px-5 py-2 mb-2 cursor-pointer hover:bg-[#1d9797]">
                            <img className="h-[22px] w-[22px] mr-2" src="/img/shopping-cart.png" alt="price" />
                            Valide mon panier
                        </Link>
                    </div>
                )}
            </div>

            <BilletsModal billetsModalStatus={billetsModalStatus} setBilletsModalStatus={setBilletsModalStatus} />
        </div>
    );
};

export default detail;
