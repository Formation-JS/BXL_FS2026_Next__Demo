import FlowerService from '@/services/flower.service';

export default async function FlowerList() {

    const flowers = await FlowerService.getAll();

    return (
        <section className='flex flex-col gap-1'>
            {flowers.map(({ id, name, price }) => (
                <article key={id}>
                    <p>{name} {price.toLocaleString('fr-be', { style: 'currency', currency: 'EUR' })}</p>
                </article>
            ))}
        </section>
    );
}

export function FlowerListSkeleton() {
    return (
        <section className='flex flex-col gap-1'>
            <article className='w-24 h-5 bg-green-700'></article>
            <article className='w-20 h-5 bg-green-700'></article>
            <article className='w-32 h-5 bg-green-700'></article>
        </section>
    )
}