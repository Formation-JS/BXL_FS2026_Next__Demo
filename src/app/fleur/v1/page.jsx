import FlowerService from '@/services/flower.service';

export default async function FleurListPageV1() {

    const flowers = await FlowerService.getAll();

    return (
        <main className='p-3'>
            <h1 className='text-3xl'>Liste des fleurs</h1>
            <section>
                {flowers.map(({ id, name, price}) => (
                    <article key={id}>
                        <p>{name} {price.toLocaleString('fr-be', {style : 'currency', currency: 'EUR'})}</p>
                    </article>
                ))}
            </section>
        </main>
    );
}