import FlowerService from '@/services/flower.service';

export default async function FlowerAvgPrice() {
    
    const avgPrice = await FlowerService.getAveragePrice();

    return (
        <p>Prix moyenne des fleurs : {avgPrice.toLocaleString('fr-be', { style: 'currency', currency: 'EUR' })}</p>
    )
}

export function FlowerAvgPriceSkeleton() {
    return (
        <p className='w-52 h-5 bg-green-700'></p>
    )
}