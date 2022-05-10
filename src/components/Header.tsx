import { Box, Container, Heading } from "@chakra-ui/react";
import { FC } from "react";

const Header: FC = () => {
	return (
		<header>
			<Container w="container.lg" mt={4}>
				<Heading as="h1" fontSize="2xl">
					FEED
				</Heading>
			</Container>
		</header>
	);
};

export default Header;
