import FlowerService from '@/services/flower.service';

export default async function FlowerCount() {

    const nbTotal = await FlowerService.getCount();

    return (
        <p>Nombre de fleur encodée : {nbTotal}</p>
    )
}

export function FlowerCountSkeleton() {
    return (
        <p className='w-48 h-5 bg-green-700'></p>
    )
}