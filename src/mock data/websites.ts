import { createAvatar, Result } from '@dicebear/core';
import { initials } from '@dicebear/collection';
import { SearchItem } from '../components/SnappySearch/SnappySearch';
import { randomId } from './randomid';

const getRandomIcon = (seed: string) => createAvatar(initials, {
    seed: seed,
    radius: 100
}).toString();



const mockAction = (e: any) => e

export const websites = [
    {
        id: randomId(),
        icon: getRandomIcon("google.com"),
        name: "google.com",
        action: () => mockAction("https://google.com")
    },
    {
        id: randomId(),
        icon: getRandomIcon("bjarkum.no"),
        name: "bjarkum.no",
        action: () => mockAction("https://bjarkum.no")
    },
    {
        id: randomId(),
        icon: getRandomIcon("finn.no"),
        name: "finn.no",
        action: () => mockAction("https://finn.no")
    },
    {
        id: randomId(),
        icon: getRandomIcon("NRK.no"),
        name: "NRK",
        action: () => mockAction("https://nrk.no")
    },

]satisfies SearchItem[]


