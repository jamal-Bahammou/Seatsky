import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { PAYBOX_CONNECTION } from '../pages/api/constants';

const paybox = require('paybox');

// FONCTION DE PAYBOX PAYMENT (GENERATE FORMULAIRE DE PAYMENT)
export const handlePayment = (total, email, setBody) => {
    var transactionId = new Date().valueOf();
    const { SITE, RANG, IDENTIFIANT, key, HOST } = PAYBOX_CONNECTION;

    console.log('total is :', total);

    paybox.createTransaction(
        {
            offer: 'system',
            key: key,
            isTest: false,
            PBX_: {
                SITE: SITE,
                RANG: RANG,
                IDENTIFIANT: IDENTIFIANT,
                TOTAL: Math.ceil(total * 100),
                DEVISE: '978',
                CMD: `HEITZ.SYSTEM.TICKETING&transaction=${transactionId}`,
                PORTEUR: email,
                RETOUR: 'Mt:M;Erreur:E;Ref:R;Auto:A',
                HASH: 'SHA512',
                ANNULE: `${HOST}/panier?type=annuler`,
                EFFECTUE: `${HOST}/`,
                REFUSE: `${HOST}/panier?type=refuser`,
                REPONDER_A: `${HOST}/`,
            },
        },
        async function (error, transaction) {
            if (!error) {
                setBody(transaction);
                console.log('💸💸💸 TRANSACTION : ', transaction);
            } else {
                console.log('🛑🛑🛑 error : ', error);
            }
        }
    );
};

const Paybox = ({ body }) => {
    const { URL } = PAYBOX_CONNECTION;
    return (
        <form method={'POST'} action={URL}>
            {ReactHtmlParser(body.body)}
            <button className="flex items-center text-white bg-[#2B246A] text-[18px]  rounded-full w-full px-5 py-2 hover:bg-[#54B2E5]">
                <img className="h-[22px] w-[22px] mr-2" src="/img/credit-card.png" alt="shop" />
                Acheter Mes Billets
            </button>
        </form>
    );
};

export default Paybox;
