import { Avatar, Box, Container, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import useSWR from "swr";
import { fetcher } from "../libs/fetcher";
import { PostType, UserType } from "../types/types";

type PostProps = {
	post: PostType;
	isLastPost: boolean;
};

const Post: FC<PostProps> = ({ post, isLastPost }) => {
	const { data: userInfo } = useSWR<UserType>(`https://jsonplaceholder.typicode.com/users/${post.userId}`, fetcher);

	return (
		<Container w="container.lg">
			<Divider my={4} />
			<VStack spacing={2} alignItems="start">
				<HStack spacing={4} mb={2}>
					<Avatar name={userInfo?.name} src="" size="sm" />
					<Text fontSize="sm">
						{userInfo?.name} @{userInfo?.username}
					</Text>
				</HStack>
				<Text>Title: {post.title}</Text>
			</VStack>
			{isLastPost && <Divider mt={4} />}
		</Container>
	);
};

export default Post;
