import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useSeatskyStore = create(
    devtools((set) => ({
        auth: {
            authenticated: false,
            signInformation: {},
            user: {},
        },
        signedIn: (sign) => set((state) => ({ ...state, auth: { ...state.auth, signInformation: sign } })),
        loggedIn: (login) => set((state) => ({ ...state, auth: { ...state.auth, authenticated: true, user: login } })),
        signOut: () => set((state) => ({ ...state, auth: { authenticated: false, signInformation: {}, user: {} } })),

        quantity: 1,
        setQuantity: (qut) => set((state) => ({ ...state, quantity: qut })),

        selectedTicket: { id: '', name: '', slug: '', ticket: { section: '', zone: '', price: 0, date: '', address: '' } },
        setSelectedTicket: (ticket) => set((state) => ({ ...state, selectedTicket: ticket })),

        selectedEvent: { name: 'Arizona Cardinals', slug: 'arizona-cardinals' },
        setSelectedEvent: (event) => set((state) => ({ ...state, selectedEvent: event })),

        panier: [],
        setPanier: (panier) => set((state) => ({ ...state, panier })),

        selectedPanier: { id: '', name: '', slug: '', ticket: { section: '', zone: '', price: 0, date: '', address: '' } },
        setSelectedPanier: (ticket) => set((state) => ({ ...state, selectedPanier: ticket })),
    }))
);
