import { Box, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { PostType } from "../types/types";

type PostProps = {
	data: PostType[] | undefined;
};

const Posts: FC<PostProps> = ({ data }) => {
	if (!data) {
		return (
			<Box w="screen" my={16} display="flex" justifyContent="center" alignItems="center">
				<HStack spacing={3}>
					<Text fontSize="xl" fontWeight="semibold">
						Loading...
					</Text>
					<Spinner speed="0.5s" size="md" />
				</HStack>
			</Box>
		);
	}

	return (
		<Box>
			<VStack>
				{data.map((d) => (
					<Box key={d.id}>
						<Text>{d.title}</Text>
					</Box>
				))}
			</VStack>
		</Box>
	);
};

export default Posts;
