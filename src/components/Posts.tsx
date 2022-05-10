import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import useSWR from "swr";
import { fetcher } from "../libs/fetcher";
import { PostType } from "../types/types";

const Posts: FC = () => {
	const { data } = useSWR<PostType>(`https://jsonplaceholder.typicode.com/posts?_page=${1}`, fetcher);
	return (
		<Box>
			<Text>hello</Text>
		</Box>
	);
};

export default Posts;
