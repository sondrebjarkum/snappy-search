import { Container } from "@hope-ui/solid"
import { children, JSX } from "solid-js";

const Layout = (props: { children?: JSX.Element }) => {
    const c = children(() => props.children);
    return (
        <Container h="$full" >
            {c()}
        </Container>
    )
}

export default Layout