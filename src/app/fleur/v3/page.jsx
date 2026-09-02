import FlowerAvgPrice, { FlowerAvgPriceSkeleton } from '@/compenents/Flower/FlowerAvgPrice';
import FlowerCount, { FlowerCountSkeleton } from '@/compenents/Flower/FlowerCount';
import { FlowerListSkeleton } from '@/compenents/Flower/FlowerList';
import FlowerListPagination from '@/compenents/Flower/FlowerListPagination';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function FleurListPageV3({ searchParams }) {

    // ↓ Récuperer la valeur des parametres dans le format "string" !!!
    const { page } = await searchParams

    // Traitement du numero de page (string) vers le format number
    let pageValue = parseInt(page);

    // Si la page est erroné → Osef, on met 1
    if(isNaN(pageValue)) {
        pageValue = 1;
    }

    return (
        <main className='p-3'>
            <h1 className='text-3xl'>Information des fleurs</h1>
            <section>
                <Suspense fallback={<FlowerCountSkeleton />}>
                    <FlowerCount />
                </Suspense>
                <Suspense fallback={<FlowerAvgPriceSkeleton />}>
                    <FlowerAvgPrice />
                </Suspense>
            </section>

            <h2 className='text-2xl mt-2'>Liste des fleurs</h2>
            <Suspense fallback={<FlowerListSkeleton />}>
                <FlowerListPagination page={pageValue} nbElem={3} />
                {pageValue > 1 && (
                    <Link href={`/fleur/v3?page=${pageValue - 1}`}>Précédent</Link>
                )}
                <Link href={`/fleur/v3?page=${pageValue + 1}`}>Suivant</Link>
            </Suspense>
        </main>
    );
}