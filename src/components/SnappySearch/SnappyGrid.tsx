import { Box, Flex, Grid, GridItem, Heading, VStack } from "@hope-ui/solid";
import { For, Show } from "solid-js";
import "./snappy-search.css";
import { SearchItem } from "./SnappySearch";
import SnappySearchItem from "./SnappySearchItem";

export type Letter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

interface Props {
    items?: SearchItem[],
    letters: Letter[],
    setLetterCallback: (letter: string) => void,
    actionCallback: (action: any) => void
    sortLetter: string,
    align: "left" | "right" | "center"
}
const SnappyGrid = (props: Props) => {

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
            borderRadius="$md"
            shadow={"$lg"}
            position={"absolute"}
            top="$1"
            // maxH="624px"
            h="624px"
            w="250px"
            templateRows="1fr"
            templateColumns="10fr 1fr"
            gap="$4"
            bgColor={"$neutral3"}
        >
            <GridItem rowSpan={2} colSpan={1} p="$2" overflowY="scroll" className="apps-grid-container">
                <span style={{ width: "100%", height: "3vh", display: "block" }} />
                <Show when={props.sortLetter !== "All"}>
                    <Heading size="base">{props.sortLetter}</Heading>
                </Show>
                <Flex direction={"column"} gap="$2" mt="$3" >
                    <For each={props.items}>
                        {
                            item => <SnappySearchItem item={item} actionCallback={(action: any) => props.actionCallback(action)}></SnappySearchItem>
                        }
                    </For>
                </Flex>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} m="auto 0">
                <VStack>
                    <LetterItem setLetterCallback={(letter) => props.setLetterCallback(letter)} letter="All" />
                    <For each={props.letters}>
                        {
                            letter => <LetterItem letter={letter} setLetterCallback={(letter) => props.setLetterCallback(letter)} />
                        }
                    </For>
                </VStack>
            </GridItem>
        </Grid >
    )
}

export const LetterItem = ({ letter, setLetterCallback }: { letter: string, setLetterCallback: (l: string) => void }) => {
    // const { sortLetter, setSortLetter } = stores

    const handleMouseOver = () => {
        setLetterCallback(letter)
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

export default SnappyGrid
