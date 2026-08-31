import PlantService from '@/services/plant.service';
import Link from 'next/link';

// /plante
export default function PlanteListPage() {

    // Récuperation de toutes les plantes
    const plants = PlantService.getAll();

    return (
        <main className='p-3'>
            <h1 className='text-3xl'>Liste des plantes</h1>
            <section className='flex flex-col gap-2'>
                {plants.map((p) => (
                    <article key={p.id}>
                        <p className='text-xl text-green-700'>{p.name}</p>
                        <p>{p.family} - {p.category}</p>
                        <Link href={`/plante/detail/${p.id}`}>Voir plus d'info</Link>
                    </article>
                ))}
            </section>
        </main>
    );
}