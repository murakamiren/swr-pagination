import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../libs/fetcher";
import { PostType } from "../types/types";
import Posts from "./Posts";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const iconSize = 3;

const PostView: FC = () => {
	const [pageIndex, setPageIndex] = useState(1);
	const { data } = useSWR<PostType[]>(`https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}`, fetcher);

	const handlePrevPage = () => {
		if (pageIndex > 1) {
			setPageIndex((pre) => pre - 1);
		}
	};

	const handleNextPage = () => {
		setPageIndex((pre) => pre + 1);
	};

	return (
		<>
			<Posts data={data} />
			<HStack spacing={4} justify="center">
				<Button leftIcon={<ArrowLeftIcon boxSize={iconSize} />} colorScheme="messenger" onClick={handlePrevPage}>
					prev
				</Button>
				<Text fontWeight="semibold">Current Index: {pageIndex}</Text>
				<Button rightIcon={<ArrowRightIcon boxSize={iconSize} />} colorScheme="messenger" onClick={handleNextPage}>
					next
				</Button>
			</HStack>
		</>
	);
};

export default PostView;
