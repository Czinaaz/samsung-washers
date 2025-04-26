import image1 from '../images/washer1.png';
import image2 from '../images/washer2.png';

export interface Washer {
    id: number;
    name: string;
    capacity: string;
    features: string[];
    energyClass: string;
    price: number;
    image: string;
}

const washersData: Washer [] = [
    {
        id: 1,
        name: 'WW90T986ASH, Pralka QuickDrive™ 9kg, biała',
        capacity: '9kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'A',
        price: 2899,
        image: image1,
    },
    {
        id: 2,
        name: 'WW10T654DLH, Pralka EcoBubble™ 10.5kg, biała',
        capacity: '10.5kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'F',
        price: 3199,
        image: image2,
    },
    {
        id: 3,
        name: 'WW90T986ASH, Pralka QuickDrive™ 8kg, biała',
        capacity: '8kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'A',
        price: 3159,
        image: image1,
    },
    {
        id: 4,
        name: 'WW10T654DLH, Pralka EcoBubble™ 10.5kg, biała',
        capacity: '10.5kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'B',
        price: 3199,
        image: image2,
    },
    {
        id: 5,
        name: 'WW90T986ASH, Pralka QuickDrive™ 9kg, biała',
        capacity: '9kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'F',
        price: 2999,
        image: image1,
    },
    {
        id: 6,
        name: 'WW10T654DLH, Pralka EcoBubble™ 10.5kg, biała',
        capacity: '10.5kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'E',
        price: 3199,
        image: image2,
    },
    {
        id: 7,
        name: 'WW90T986ASH, Pralka QuickDrive™ 9kg, biała',
        capacity: '9kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'C',
        price: 3599,
        image: image1,
    },
    {
        id: 8,
        name: 'WW10T654DLH, Pralka EcoBubble™ 8kg, biała',
        capacity: '8kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'C',
        price: 2999,
        image: image2,
    },
    {
        id: 9,
        name: 'WW90T986ASH, Pralka QuickDrive™ 9kg, biała',
        capacity: '9kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'F',
        price: 3099,
        image: image1,
    },
    {
        id: 10,
        name: 'WW10T654DLH, Pralka EcoBubble™ 10.5kg, biała',
        capacity: '10.5kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'E',
        price: 3199,
        image: image2,
    },
    {
        id: 11,
        name: 'WW90T986ASH, Pralka QuickDrive™ 8kg, biała',
        capacity: '8kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'A',
        price: 2699,
        image: image1,
    },
    {
        id: 12,
        name: 'WW10T654DLH, Pralka EcoBubble™ 9kg, biała',
        capacity: '9kg',
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'B',
        price: 3299,
        image: image2,
    },
]

export default washersData;