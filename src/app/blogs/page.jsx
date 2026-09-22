import Post from "../Components/Post";

// TODO: Fetch data 
const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Riadul Islam",
    category: "React",
    description:
      "Learn the fundamentals of React, including components, props, state, and how to build interactive user interfaces.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    publishedDate: "2026-09-01",
  },
  {
    id: 2,
    title: "Understanding JavaScript Promises",
    author: "Sarah Ahmed",
    category: "JavaScript",
    description:
      "A beginner-friendly guide to JavaScript promises, async operations, and handling asynchronous code effectively.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    publishedDate: "2026-09-05",
  },
  {
    id: 3,
    title: "Why You Should Learn TypeScript",
    author: "Tanvir Hasan",
    category: "TypeScript",
    description:
      "Discover how TypeScript improves JavaScript development with static typing, better tooling, and safer code.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    publishedDate: "2026-09-10",
  },
  {
    id: 4,
    title: "Building Your First Next.js App",
    author: "Nusrat Jahan",
    category: "Next.js",
    description:
      "Explore the basics of Next.js App Router, pages, layouts, navigation, and server components.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    publishedDate: "2026-09-15",
  },
  {
    id: 5,
    title: "Responsive Web Design with Tailwind CSS",
    author: "Rakib Hossain",
    category: "Tailwind CSS",
    description:
      "Learn how to create modern, responsive websites quickly using Tailwind CSS utility classes.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    publishedDate: "2026-09-20",
  },
];



const BlogsPage = () => {
    return (
        <div>
            
            {
                blogsData.map((post) => <Post key={post.id} post = {post}></Post>)
            }
        </div>
    );
};

export default BlogsPage;