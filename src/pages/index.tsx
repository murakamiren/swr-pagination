import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import PostView from "../components/PostView";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>swr pagination</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<PostView />
		</div>
	);
};

export default Home;
