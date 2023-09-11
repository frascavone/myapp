import { NextResponse } from "next/server";

const posts = [
	{
		title: "Lorem Ipsum 1",
		slug: "lorem-ipsum-1",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
	},
	{
		title: "Lorem Ipsum 2",
		slug: "lorem-ipsum-2",
		content: "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
	},
	{
		title: "Lorem Ipsum 3",
		slug: "lorem-ipsum-3",
		content: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
	},
	{
		title: "Lorem Ipsum 4",
		slug: "lorem-ipsum-4",
		content: "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
	},
	{
		title: "Lorem Ipsum 5",
		slug: "lorem-ipsum-5",
		content: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.",
	},
	{
		title: "Lorem Ipsum 6",
		slug: "lorem-ipsum-6",
		content: "Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.",
	},
	{
		title: "Lorem Ipsum 7",
		slug: "lorem-ipsum-7",
		content: "Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.",
	},
	{
		title: "Lorem Ipsum 8",
		slug: "lorem-ipsum-8",
		content:
			"Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.",
	},
	{
		title: "Lorem Ipsum 9",
		slug: "lorem-ipsum-9",
		content: "Mauris sit amet neque nec nunc gravida ornare. In hac habitasse platea dictumst.",
	},
	{
		title: "Lorem Ipsum 10",
		slug: "lorem-ipsum-10",
		content: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.",
	},
	{
		title: "Lorem Ipsum 11",
		slug: "lorem-ipsum-11",
		content: "Vivamus pharetra posuere sapien. Nam convallis, odio in pretium viverra, nisi dolor.",
	},
	{
		title: "Lorem Ipsum 12",
		slug: "lorem-ipsum-12",
		content: "Nullam malesuada egestas tincidunt. Pellentesque habitant morbi tristique senectus et netus.",
	},
	{
		title: "Lorem Ipsum 13",
		slug: "lorem-ipsum-13",
		content:
			"Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
	},
	{
		title: "Lorem Ipsum 14",
		slug: "lorem-ipsum-14",
		content:
			"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus.",
	},
	{
		title: "Lorem Ipsum 15",
		slug: "lorem-ipsum-15",
		content:
			"Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis.",
	},
	{
		title: "Lorem Ipsum 16",
		slug: "lorem-ipsum-16",
		content: "Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt.",
	},
	{
		title: "Lorem Ipsum 17",
		slug: "lorem-ipsum-17",
		content: "Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum.",
	},
	{
		title: "Lorem Ipsum 18",
		slug: "lorem-ipsum-18",
		content: "Sed lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
	},
	{
		title: "Lorem Ipsum 19",
		slug: "lorem-ipsum-19",
		content: "Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.",
	},
	{
		title: "Lorem Ipsum 20",
		slug: "lorem-ipsum-20",
		content:
			"Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.",
	},
];

export const GET = async () => {
	return NextResponse.json(posts);
};
