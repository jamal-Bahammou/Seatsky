export const tickets = [
    { placesEmpty: 80, section: 'Lower Tier', zone: 'H2', price: 1223, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Lower Tier', zone: 'G8', price: 1423, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 0, section: 'Lower Tier', zone: 'G7', price: 1550, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Lower Tier', zone: 'D2', price: 1822, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 0, section: 'Lower Tier', zone: 'X5', price: 1090, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },

    { placesEmpty: 80, section: 'Club Level', zone: 'S14', price: 792, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Club Level', zone: 'T1', price: 640, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Club Level', zone: 'T2', price: 723, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Club Level', zone: 'U5', price: 430, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },

    { placesEmpty: 80, section: 'Executive Box Level', zone: 'R12', price: 331, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Executive Box Level', zone: 'Y16', price: 219, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Executive Box Level', zone: 'X4', price: 412, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },

    { placesEmpty: 80, section: 'Upper Tier', zone: 'A1', price: 229, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Upper Tier', zone: 'Z7', price: 154, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Upper Tier', zone: 'Z6', price: 192, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
    { placesEmpty: 80, section: 'Upper Tier', zone: 'U22', price: 312, date: '2023-06-01 20:00', address: 'Pedreira Paulo Leminski, Curitiba, Brésil' },
];

export const categories = [
    { name: 'Sports', slug: 'sports', status: true },
    { name: 'Concert', slug: 'concert', status: true },
    { name: 'Théâtre et comédie', slug: 'théâtre-et-comédie', status: true },
    { name: 'Cartes cadeaux', slug: 'cartes-cadeaux', status: false },
];

export const items = {
    sports: [
        { name: 'Arizona Cardinals', slug: 'arizona-cardinals' },
        { name: 'Green Bay Packers', slug: 'green-bay-packers' },
        { name: 'Philadelphia Eagles', slug: 'philadelphia-eagles' },
        { name: 'San Francisco 49ers', slug: 'san-francisco-49ers' },
        { name: 'Paris Basketball', slug: 'paris-basketball' },
        { name: 'Bellator MMA', slug: 'bellator-mma' },
        { name: 'Nanterre 92', slug: 'nanterre-92' },
        { name: 'Atalanta Falcons', slug: 'atalanta-falcons' },
    ],
    concert: [
        { name: 'The Weeknd', slug: 'the-weeknd' },
        { name: 'D Block Europe', slug: 'd-block-europe' },
        { name: 'Ryan Adams', slug: 'ryan-adams' },
        { name: 'Ziggy Alberts', slug: 'ziggy-alberts' },
        { name: 'Beyoncé', slug: 'beyoncé' },
        { name: 'Australian Pink Floyd', slug: 'australian-pink-floyd' },
        { name: 'Norah Jones', slug: 'norah-jones' },
        { name: 'Karnivool', slug: 'karnivool' },
    ],
    [`théâtre-et-comédie`]: [
        { name: 'Notre Dame de Paris', slug: 'notre-dame-de-paris' },
        { name: 'Messmer', slug: 'messmer' },
        { name: 'Jeremy Ferrari', slug: 'jeremy-ferrari' },
        { name: 'Redouane Bougheraba', slug: 'redouane-bougheraba' },
        { name: 'Beethoven', slug: 'beethoven' },
        { name: 'Ines Reg', slug: 'ines-reg' },
        { name: 'Roman Frayssinet', slug: 'roman-frayssinet' },
    ],
    [`cartes-cadeaux`]: [
        { name: 'Arizona Cardinals', slug: 'arizona-cardinals' },
        { name: 'Green Bay Packers', slug: 'green-bay-packers' },
        { name: 'Paris Basketball', slug: 'paris-basketball' },
        { name: 'Bellator MMA', slug: 'bellator-mma' },
        { name: 'The Weeknd', slug: 'the-weeknd' },
        { name: 'Ziggy Alberts', slug: 'ziggy-alberts' },
        { name: 'Beyoncé', slug: 'beyoncé' },
        { name: 'Norah Jones', slug: 'norah-jones' },
        { name: 'Notre Dame de Paris', slug: 'notre-dame-de-paris' },
        { name: 'Jeremy Ferrari', slug: 'jeremy-ferrari' },
        { name: 'Redouane Bougheraba', slug: 'redouane-bougheraba' },
        { name: 'Roman Frayssinet', slug: 'roman-frayssinet' },
    ],
};
