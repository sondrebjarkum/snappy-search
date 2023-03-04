import { Box, Button, HStack } from "@hope-ui/solid"
import { SearchItem } from "./SnappySearch"

const SnappySearchItem = ({ item, actionCallback }: { item: SearchItem, actionCallback: (action: any) => void }) => {

    return (
        <HStack spacing="$5" alignItems={"center"}>
            <Button
                variant={"ghost"}
                size="md"
                w={"$full"}
                height="48px"
                justifyContent={"left"}
                borderWidth="0px"
                p="$7 $3"
                onClick={() => actionCallback(item.action())}
                leftIcon={
                    <Box w="35px" h="35px">
                        <Box innerHTML={item.icon}></Box>
                    </Box>
                }>{item.name}</Button>
        </HStack>
    )
}

export default SnappySearchItem