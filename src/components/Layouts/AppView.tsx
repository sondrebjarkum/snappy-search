import { Box, Flex, Grid, GridItem, VStack, Text, Heading } from "@hope-ui/solid"
import { createEffect, For, Show } from "solid-js";
import stores from "../../helpers/stores";
import { App } from "../../mock data/apps";
import AppItem from "../AppItem/AppItem";
import "./letters.css"

export type Letter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

interface AppViewProps {
    apps?: App[],
    letters: Letter[],
    align: "left" | "right" | "center"
}
const AppView = (props: AppViewProps) => {
    const { sortLetter } = stores
    const alignment = props.align === "right"
        ? { right: 0 }
        : props.align === "center"
            ? {
                left: "50%",
                transform: "translateX(-50%)"
            }
            : { left: 0 }
    return (
        <Grid
            {...alignment}
            position={"absolute"}
            top="$1"
            maxH="624px"
            w="250px"
            templateRows="1fr"
            templateColumns="10fr 1fr"
            gap="$4"
            bgColor={"$neutral6"}
        >
            <GridItem rowSpan={2} colSpan={1} p="$2" overflowY="scroll" className="apps-grid-container">
                <span style={{ width: "100%", height: "3vh", display: "block" }} />
                <Show when={sortLetter() !== "All"}>
                    <Heading size="base">{sortLetter()}</Heading>
                </Show>
                <Flex direction={"column"} gap="$2" mt="$3" >
                    <For each={props.apps}>
                        {
                            app => <AppItem item={app}></AppItem>
                        }
                    </For>
                </Flex>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} m="auto 0">
                <VStack>
                    <LetterItem letter="All" />
                    <For each={props.letters}>
                        {
                            letter => <LetterItem letter={letter} />
                        }
                    </For>
                </VStack>
            </GridItem>
        </Grid >
    )
}

export const LetterItem = ({ letter }: { letter: string }) => {
    const { sortLetter, setSortLetter } = stores

    const handleMouseOver = () => {
        setSortLetter(letter)
    }

    const itemStyle = {
        w: "100%",
        alignItems: "center",
        justifyContent: "center",
        h: "$6",

    }
    return (
        <Flex {...itemStyle} className="letter-container" pr="$4" onMouseOver={() => handleMouseOver()}>
            <Box fontSize={"$xs"} className="letter" w="$fill">{letter}</Box>
        </Flex>
    )
}

export default AppView
