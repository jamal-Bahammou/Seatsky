import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import axios from 'axios';
import { useSeatskyStore } from '../database/zustand';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import '../styles/globals.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
    const { loggedIn, setPanier, quantity } = useSeatskyStore();

    useEffect(() => {
        (async () => {
            const signInformation = window.localStorage.getItem('signInformation');
            const data = JSON.parse(signInformation);
            if (!!data?.id && !!data?.token) {
                let res2 = await axios.get(`http://fitness.e78.cloud0305.heitzsystem.com:8081/api/users/${data?.id}`, {
                    headers: { Authorization: data?.token },
                });
                loggedIn(res2.data);
            }
        })();
    }, []);

    useEffect(() => {
        const storagePanier = window.localStorage.getItem('storagePanier');
        if (!!storagePanier) {
            const panier = JSON.parse(storagePanier);
            setPanier(panier);
        }
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
