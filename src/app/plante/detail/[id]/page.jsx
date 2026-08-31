import PlantService from '@/services/plant.service';
import { notFound } from 'next/navigation';


// /plante/detail/:id
export default async function PlantDetailPage({ params }) {

    // Récuperation de la valeur de l'id (Route dynamique)
    const id = parseInt((await params).id);

    // Utilisation de PlantService pour obtenir les données
    const plant = PlantService.getById(id);

    // Cas de figure : La plante n'est pas trouvé (valeur null)
    if(!plant) {
        notFound(); // → Déclanche l'erreur 404
    }
 
    return (
        <main className='p-3'>
            <h1 className='text-3xl'>Détail de {plant.commonName} ({plant.scientificName})</h1>
            <p>Famille : {plant.family}</p>
            <p>Categorie : {plant.category}</p>
            <p>Origine : {plant.origin}</p>
            {/* Rappel → Un boolean n'est JAMAIS affiché dans react, il faut le traiter */}
            {plant.isIndoor && (
                <p>Plante d'intérieur</p>
            )}
            <p>Toxique pour les annimaux : {plant.isToxicToPets ? 'Oui' : 'Non'}</p>
        </main>
    );
}