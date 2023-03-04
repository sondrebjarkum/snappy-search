import { createAvatar, Result } from '@dicebear/core';
import { initials, icons, shapes } from '@dicebear/collection';
import { SearchItem } from '../components/SnappySearch/SnappySearch';
import { randomId } from './randomid';


const getRandomIcon = (seed: string) => createAvatar(seed.length > 7 ? initials : shapes, {
    seed: seed,
    radius: 100
}).toString();



const mockAction = (e: any) => console.log(e)

export const apps = [
    {
        id: randomId(),
        icon: getRandomIcon("Apotify"),
        name: "Apotify",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Bpotify"),
        name: "Bpotify",
        action: () => mockAction("Bpotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Spotify"),
        name: "Spotify",
        action: () => mockAction("Spotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Gloony"),
        name: "Gloony",
        action: () => mockAction("Gloony")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Hloony"),
        name: "Hloony",
        action: () => mockAction("Hloony")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Iloony"),
        name: "Iloony",
        action: () => mockAction("Iloony")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Jayy"),
        name: "Jayy",
        action: () => mockAction("Jayy")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Klobbifi"),
        name: "Klobbifi",
        action: () => mockAction("Klobbifi")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Omega"),
        name: "Omega",
        action: () => mockAction("Omega")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Q"),
        name: "Q",
        action: () => mockAction("Q")
    },
    {
        id: randomId(),
        icon: getRandomIcon("U"),
        name: "U",
        action: () => mockAction("U")
    },
    {
        id: randomId(),
        icon: getRandomIcon("W"),
        name: "W",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Spotify"),
        name: "Spotify",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Slick"),
        name: "Slick",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("ShareSpace"),
        name: "ShareSpace",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Mindful"),
        name: "Mindful",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("FitWise"),
        name: "FitWise",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Netflix"),
        name: "Netflix",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Porterbuddy"),
        name: "Porterbuddy",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Relaxify"),
        name: "Relaxify",
        action: () => mockAction("Apotify")
    },

    {
        id: randomId(),
        icon: getRandomIcon("TastyBites"),
        name: "TastyBites",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("DashDrive"),
        name: "DashDrive",
        action: () => mockAction("DashDrive")
    },
    {
        id: randomId(),
        icon: getRandomIcon("Lifely"),
        name: "Lifely",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "PlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "PlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "PlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "YlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "YlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "YlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "YlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "FlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "VlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "ClayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "XlayWave",
        action: () => mockAction("Apotify")
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "ZlayWave",
        action: () => mockAction("Apotify")
    },
]satisfies SearchItem[]


