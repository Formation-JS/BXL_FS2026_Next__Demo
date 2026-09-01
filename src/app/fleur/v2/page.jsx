import FlowerAvgPrice, { FlowerAvgPriceSkeleton } from '@/compenents/Flower/FlowerAvgPrice';
import FlowerCount, { FlowerCountSkeleton } from '@/compenents/Flower/FlowerCount';
import FlowerList, { FlowerListSkeleton } from '@/compenents/Flower/FlowerList';
import { Suspense } from 'react';

export default async function FleurListPageV2() {

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
                <FlowerList />
            </Suspense>
        </main>
    );
}