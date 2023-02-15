import React from 'react';
import { useSeatskyStore } from '../../database/zustand';
import { v4 as uuidv4 } from 'uuid';

const TicketCard = ({ ticket, setBilletButtonValid }) => {
    const { selectedEvent, quantity, setSelectedTicket } = useSeatskyStore();
    const onSelectHandler = () => {
        if (ticket.placesEmpty > 0) {
            setBilletButtonValid(false);
            setSelectedTicket({ id: uuidv4(), quantity, ...selectedEvent, ticket });
        }
    };

    // <div className="grid bg-[#fc114c] w-[70px] h-[70px] top-0 right-0 absolute" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}>
    //     <div className="place-self-center text-sm font-semibold uppercase text-white rotate-45 ml-3 mb-4">Complet</div>
    // </div>

    return (
        <div className="grid relative">
            <div className={`bg-white flex flex-col p-3 border-y border-[#BFC0C0] ${ticket.placesEmpty < 1 && 'sepia cursor-not-allowed'}`}>
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-lg font-semibold">Section: {ticket?.section}</h4>
                        <p className="text-sm leading-[18px] text-[#2F343B]">Zone: Catégorie {ticket?.zone}</p>
                        <p className="text-sm leading-[18px] text-[#2F343B]">Billet(s) {quantity}</p>
                        <p className="text-sm leading-[18px] text-[#677383]">Sièges adjacents</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">{ticket?.price} €</h4>
                        <p className="text-xs text-[#677383]">par ticket</p>
                    </div>
                </div>
                <button onClick={() => onSelectHandler()} className={`self-end text-white bg-[#2B246A] px-5 py-1 mt-1 rounded-full ${ticket.placesEmpty < 1 ? 'cursor-not-allowed' : 'hover:bg-[#54B2E5]'}`}>
                    Sélectionner
                </button>
            </div>
            {ticket.placesEmpty < 1 && <div className="text-4xl font-bold text-[#00000057] cursor-not-allowed uppercase place-self-center absolute">Complet</div>}
        </div>
    );
};

export default TicketCard;
