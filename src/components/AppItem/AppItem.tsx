import { HStack, Box, Flex, Button } from "@hope-ui/solid"
import { App } from "../../mock data/apps"

const AppItem = ({ item }: { item: App }) => {

    return (
        <HStack spacing="$5" alignItems={"center"}>
            {/* <Box w="40px" h="40px">
                <Box innerHTML={item.icon}></Box>
            </Box>
            <Flex>
                {item.name}
            </Flex> */}
            <Button
                variant={"ghost"}
                size="md"
                w={"$full"}
                height="48px"
                justifyContent={"left"}
                borderWidth="0px"
                p="$7 $3"

                leftIcon={
                    <Box w="35px" h="35px">
                        <Box innerHTML={item.icon}></Box>
                    </Box>
                }>{item.name}</Button>
        </HStack>
    )
}

export default AppItem