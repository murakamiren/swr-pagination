import { Box, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { PostType } from "../types/types";
import Post from "./Post";

type PostsProps = {
	data: PostType[] | undefined;
};

const Posts: FC<PostsProps> = ({ data }) => {
	if (!data) {
		return (
			<Box w="screen" my={8} display="flex" justifyContent="center" alignItems="center">
				<HStack spacing={3}>
					<Text fontSize="xl" fontWeight="semibold">
						Loading...
					</Text>
					<Spinner speed="0.5s" size="md" />
				</HStack>
			</Box>
		);
	}

	const handleIsLastPost = (Index: number) => {
		if (data.length - 1 === Index) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<Box mt={2} mb={8}>
			<VStack>
				{data.map((d, Index) => (
					<Post key={d.id} post={d} isLastPost={handleIsLastPost(Index)} />
				))}
			</VStack>
		</Box>
	);
};

export default Posts;
