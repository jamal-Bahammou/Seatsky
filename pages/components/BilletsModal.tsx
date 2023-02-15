import React from 'react';
import { useSeatskyStore } from '../../database/zustand';

const BilletsModal = ({ billetsModalStatus, setBilletsModalStatus }) => {
    const { setQuantity } = useSeatskyStore();

    const onClickHandler = (qut) => {
        setQuantity(qut);
        setBilletsModalStatus(false);
    };

    if (!billetsModalStatus) return null;

    return (
        <div className="grid h-screen w-screen fixed z-50 bg-[#0000008d]">
            <div className="grid justify-start place-self-center w-3/5 bg-white rounded-md p-10">
                <h4 className="text-2xl font-bold mb-4">Combien de billets voulez-vous ?</h4>
                <p className="text-xl">Sélectionnez une quantité pour trouver rapidement les meilleurs billets disponibles pour le nombre de personnes assistant à l'événement. Il se peut qu'il reste moins de billets que la quantité sélectionnée.</p>
                <div className="place-self-center grid grid-cols-5 gap-x-6 mt-6 mb-4">
                    {[1, 2, 3, 4, 5].map((qut, index) => (
                        <div key={index} onClick={() => onClickHandler(qut)} className="text-3xl font-semibold cursor-pointer border-2 border-[#2f343b] rounded-md w-24 h-14 grid content-center text-center hover:bg-[#2F343B] hover:text-white">
                            {qut}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BilletsModal;
