import { createSignal, createMemo, createRoot, batch, } from "solid-js";
import { createStore } from "solid-js/store";

import { apps } from "../mock data/apps";

function createLetters() {
    const [sortLetter, setSort] = createSignal<string>("All")
    const setSortLetter = (letter: string) => {
        setSort(() => letter)
    }

    return { sortLetter, setSortLetter, }
}

// function createApps() {
//     const [applications, setApplications] = createStore(apps)
//     // const pick = (letter: string) => letter === "ALL"
//     //     ? setApplications(apps)
//     //     : setApplications(apps.filter(e => e.name.charAt(0).toUpperCase() === letter && e))
//     const pick = () => createLetters().sortLetter() === "ALL"
//         ? setApplications(apps)
//         : setApplications(apps.filter(e => e.name.charAt(0).toUpperCase() === createLetters().sortLetter() && e))
//     return { applications, pick }
// }

export default createRoot(createLetters);