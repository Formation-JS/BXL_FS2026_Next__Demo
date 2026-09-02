import FlowerService from '@/services/flower.service';

// Mecanisme de pagniation
// → Numero de page + Nombre d'element (page / nbElem)
// → Nombre l'element + Déclage        (offset / limit)

export default async function FlowerListPagination({ page = 1, nbElem = 3}) {

    const flowers = await FlowerService.getAllWithPagination(page, nbElem);

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