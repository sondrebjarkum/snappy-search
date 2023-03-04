import { Stack, IconButton, Box } from "@hope-ui/solid";
import { createSignal } from "solid-js";
import { Transition } from "solid-transition-group";
import { BoxIcon } from "../../solid-feather-icons";
import AppView, { Letter } from "../Layouts/AppView";

interface Props {
    isOpen?: (toggle: boolean) => any,
    letters: Letter[],
    items: any[],
    align?: "left" | "right" | "center"
}
const SnappySearch = (props: Props) => {
    const [drawerOpen, setDrawerOpen] = createSignal(false)
    const handleToggleDrawer = () => {
        setDrawerOpen(prev => !prev)
        // drawerOpen() && setSortLetter("All")
        props.isOpen && props.isOpen(drawerOpen())
    }
    return (
        <Stack position={"relative"} direction="column">
            <IconButton onClick={handleToggleDrawer} aria-label="Apps" icon={<BoxIcon />} />
            <Box position={"relative"}>
                <Transition
                    onEnter={(el, done) => {
                        const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
                            duration: 200
                        });
                        a.finished.then(done);
                    }}
                    onExit={(el, done) => {
                        const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
                            duration: 200
                        });
                        a.finished.then(done);
                    }}
                >
                    {drawerOpen() && <AppView letters={props.letters} apps={props.items} align={props.align ?? "right"} />}
                </Transition>
            </Box>
        </Stack>
    )
}

export default SnappySearch