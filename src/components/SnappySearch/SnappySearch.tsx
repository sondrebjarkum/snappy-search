import { Stack, IconButton, Box } from "@hope-ui/solid";
import { createEffect, createSignal, JSXElement } from "solid-js";
import { Transition } from "solid-transition-group";
import SnappyGrid, { Letter } from "./SnappyGrid";

export type SearchItem = {
    id: number,
    name: string,
    icon: string,
    action: () => any,
}

interface Props {
    isOpen?: (toggle: boolean) => any,
    letters: Letter[],
    items: any[],
    icon: JSXElement,
    onBlur?: "keep-open" | "close",
    align?: "left" | "right" | "center",
    itemAction?: (action: any) => any
}
const SnappySearch = (props: Props) => {

    const [drawerOpen, setDrawerOpen] = createSignal(false)
    const [sortedItems, setSortedItems] = createSignal([...props.items])
    const [sortLetter, setSortLetter] = createSignal("All")

    const handleToggleDrawer = () => {
        setDrawerOpen(prev => !prev)
        props.isOpen && props.isOpen(drawerOpen())
    }

    createEffect(() => {
        sortLetter().toUpperCase() == "ALL"
            ? setSortedItems([...props.items])
            : setSortedItems(props.items.filter(e => e.name.charAt(0).toUpperCase() == sortLetter() && e))
    })

    const transformOrigin = `top ${props.align ?? "right"}`
    const animateFrom = { opacity: 0, transformOrigin: transformOrigin, transform: "scale(.8)", }
    const animateTo = { opacity: 1, transformOrigin: transformOrigin, transform: "scale(1)", }

    return (
        <Stack position={"relative"} direction="column">
            <IconButton
                onClick={handleToggleDrawer}
                aria-label={props.items[0].name}
                icon={props.icon}
                // onFocusOut={}
                onBlur={(props.onBlur === "close" || props.onBlur === undefined) ? handleToggleDrawer : () => null}
            />
            <Box position={"relative"}>
                <Transition
                    onEnter={(el, done) => {
                        const a = el.animate([animateFrom, animateTo], {
                            duration: 111
                        });
                        a.finished.then(done);
                    }}
                    onExit={(el, done) => {
                        const a = el.animate([animateTo, animateFrom], {
                            duration: 111
                        });
                        a.finished.then(done);
                    }}
                >
                    {
                        drawerOpen() && (
                            <SnappyGrid
                                setLetterCallback={(letter: string) => setSortLetter(letter)}
                                sortLetter={sortLetter()}
                                letters={props.letters}
                                items={sortedItems()}
                                align={props.align ?? "left"}
                                actionCallback={(action: any) => props.itemAction && props.itemAction(action)}
                            />)
                    }
                </Transition>
            </Box>
        </Stack>
    )
}

export default SnappySearch