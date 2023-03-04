import { createAvatar, Result } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { SearchItem } from '../components/SnappySearch/SnappySearch';
import { randomId } from './randomid';


const getRandomIcon = (seed: string) => createAvatar(avataaars, {
    seed: seed,
    radius: 100
}).toString();



const mockAction = (e: any) => e

export const people = [
    {
        id: randomId(),
        icon: getRandomIcon("Sondre Bjarkum"),
        name: "Sondre Bjarkum",
        action: () => mockAction("Sondre Bjarkum")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Marie Havre"),
        name: "Marie Havre",
        action: () => mockAction("Marie Havre")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Alejandro Miguel Martinez"),
        name: "Alejandro Miguel Martinez",
        action: () => mockAction("Alejandro Miguel Martinez")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Captain Picard"),
        name: "Captain Picard",
        action: () => mockAction("Captain Picard")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Kalle Jumbo Krøll"),
        name: "Kalle Jumbo Krøll",
        action: () => mockAction("Kalle Jumbo Krøll")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Hans Hugo"),
        name: "Hans Hugo",
        action: () => mockAction("Hans Hugo")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Carlos Bandanas"),
        name: "Carlos Bandanas",
        action: () => mockAction("Carlos Bandanas")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Klondrik Kleggen"),
        name: "Klondrik Kleggen",
        action: () => mockAction("Klondrik Kleggen")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Mao Dao"),
        name: "Mao Dao",
        action: () => mockAction("Mao Dao")
    }
]satisfies SearchItem[]


