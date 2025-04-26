
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
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'A',
        price: 2899,
        image: './washer1.png',
    },
    {
        id: 2,
        name: 'WW10T654DLH, Pralka EcoBubble™ 10.5kg, biała',
        capacity: '10.5kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'F',
        price: 3199,
        image: './washer2.png',
    },
    {
        id: 3,
        name: 'WW90T986ASH, Pralka QuickDrive™ 8kg, biała',
        capacity: '8kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'A',
        price: 3159,
        image: './washer1.png',
    },
    {
        id: 4,
        name: 'WW10T654DLH, Pralka EcoBubble™ 10.5kg, biała',
        capacity: '10.5kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'B',
        price: 3199,
        image: './washer2.png',
    },
    {
        id: 5,
        name: 'WW90T986ASH, Pralka QuickDrive™ 9kg, biała',
        capacity: '9kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'F',
        price: 2999,
        image: './washer1.png',
    },
    {
        id: 6,
        name: 'WW10T654DLH, Pralka EcoBubble™ 10.5kg, biała',
        capacity: '10.5kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'E',
        price: 3199,
        image: './washer2.png',
    },
    {
        id: 7,
        name: 'WW90T986ASH, Pralka QuickDrive™ 9kg, biała',
        capacity: '9kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'C',
        price: 3599,
        image: './washer1.png',
    },
    {
        id: 8,
        name: 'WW10T654DLH, Pralka EcoBubble™ 8kg, biała',
        capacity: '8kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'C',
        price: 2999,
        image: './washer2.png',
    },
    {
        id: 9,
        name: 'WW90T986ASH, Pralka QuickDrive™ 9kg, biała',
        capacity: '9kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'F',
        price: 3099,
        image: './washer1.png',
    },
    {
        id: 10,
        name: 'WW10T654DLH, Pralka EcoBubble™ 10.5kg, biała',
        capacity: '10.5kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'E',
        price: 3199,
        image: './washer2.png',
    },
    {
        id: 11,
        name: 'WW90T986ASH, Pralka QuickDrive™ 8kg, biała',
        capacity: '8kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'A',
        price: 2699,
        image: './washer1.png',
    },
    {
        id: 12,
        name: 'WW10T654DLH, Pralka EcoBubble™ 9kg, biała',
        capacity: '9kg',
        features: ['Drzwi AddWash', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'B',
        price: 3299,
        image: './washer2.png',
    },
]

export default washersData;