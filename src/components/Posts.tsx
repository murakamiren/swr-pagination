import { Box, HStack, Spinner, Text } from "@chakra-ui/react";
import { FC } from "react";
import useSWR from "swr";
import { fetcher } from "../libs/fetcher";
import { PostType } from "../types/types";

const Posts: FC = () => {
	const { data } = useSWR<PostType[]>(`https://jsonplaceholder.typicode.com/posts?_page=${1}`, fetcher);

	if (!data) {
		return (
			<Box w="screen" h="100vh" display="flex" justifyContent="center" alignItems="center">
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
			{data.map((d) => (
				<Box key={d.id}>
					<Text>{d.title}</Text>
				</Box>
			))}
		</Box>
	);
};

export default Posts;
