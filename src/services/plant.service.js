import plants from '@/data/plants.json';

const PlantService = {

    getAll: () => {
        // Renvoi la copie de donnée transformé
        return plants.map(plant => ({
            id: plant.id,
            name: plant.commonName,
            family: plant.family,
            category: plant.category
        }));
    },

    getById: (id) => {
        // Renvoi les données d'une plante
        const idx = plants.findIndex(plant => plant.id === id);

        return (idx >= 0) ? plants[idx] : null;
    }

};

export default PlantService;