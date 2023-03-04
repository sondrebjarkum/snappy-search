import { createAvatar, Result } from '@dicebear/core';
import { initials, icons, shapes } from '@dicebear/collection';

const randomId = () => Math.floor(Math.random() * 1000)

const getRandomIcon = (seed: string) => createAvatar(seed.length > 7 ? initials : shapes, {
    seed: seed,
    radius: 100
}).toString();

export type App = {
    id: number,
    name: string,
    icon: string
}

export const apps = [
    {
        id: randomId(),
        icon: getRandomIcon("Apotify"),
        name: "Apotify"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Bpotify"),
        name: "Bpotify"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Spotify"),
        name: "Spotify"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Gloony"),
        name: "Gloony"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Hloony"),
        name: "Hloony"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Iloony"),
        name: "Iloony"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Jayy"),
        name: "Jayy"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Klobbifi"),
        name: "Klobbifi"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Omega"),
        name: "Omega"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Q"),
        name: "Q"
    },
    {
        id: randomId(),
        icon: getRandomIcon("U"),
        name: "U"
    },
    {
        id: randomId(),
        icon: getRandomIcon("W"),
        name: "W"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Spotify"),
        name: "Spotify"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Slick"),
        name: "Slick"
    },
    {
        id: randomId(),
        icon: getRandomIcon("ShareSpace"),
        name: "ShareSpace"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Mindful"),
        name: "Mindful"
    },
    {
        id: randomId(),
        icon: getRandomIcon("FitWise"),
        name: "FitWise"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Netflix"),
        name: "Netflix"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Porterbuddy"),
        name: "Porterbuddy"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Relaxify"),
        name: "Relaxify"
    },

    {
        id: randomId(),
        icon: getRandomIcon("TastyBites"),
        name: "TastyBites"
    },
    {
        id: randomId(),
        icon: getRandomIcon("DashDrive"),
        name: "DashDrive"
    },
    {
        id: randomId(),
        icon: getRandomIcon("Lifely"),
        name: "Lifely"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "PlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "PlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "PlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "YlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "YlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "YlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "YlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "FlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "VlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "ClayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "XlayWave"
    },
    {
        id: randomId(),
        icon: getRandomIcon("PlayWave"),
        name: "ZlayWave"
    },
]satisfies App[]


