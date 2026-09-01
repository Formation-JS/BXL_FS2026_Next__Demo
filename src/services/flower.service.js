import flowers from '@/data/flowers.json';

//! Fonction pour simuler du délai. (NE PAS FAIRE CA EN PROD !!!)
//? → Acces à une DB
//? → Acces à des ressources
function delay(time = 1_000) {
    // Envoi d'une promesse
    return new Promise((resolve) => {
        // Le "resolve" de la promesse est activé après un delai (via timeout)
        setTimeout(resolve, time);
    });
}

const FlowerService = {

    getAll: async () => {
        // Attente de 3 secondes
        await delay(3_000);

        // Renvoi la liste avec l'id, le nom et le prix
        return flowers.map((f) => ({
            id: f.id,
            name: f.commonName,
            price: f.pricePerStem
        }));
    },

    getAveragePrice: async () => {
        // Attente de 10 secondes
        await delay(10_000);

        // Calculer la moyenne
        if(flowers.length === 0) {
            return -0;
        }

        let total = 0;
        for(const elem of flowers) {
            total += elem.pricePerStem;
        }
        return total / flowers.length;
    },

    getCount: async () => {
        // Attente de 1 secondes
        await delay(1_000);

        return flowers.length;
    },


    getById: async (id) => {
        // Attente de 2.5 secondes
        await delay(2_500);

        // Tentative de récuperation de l'élément
        const idx = flowers.findIndex(f => f.id === id)

        // Envoi "null" si aucun élément trouvé
        if(idx < 0) return null;

        // Envoi les données
        return flowers[idx];
    }

};

export default FlowerService;