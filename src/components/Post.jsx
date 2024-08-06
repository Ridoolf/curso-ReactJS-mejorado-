import { useFetch } from "./hooks/useFetch";

export const Post = () => {
  const [posts] = useFetch({}, "https://jsonplaceholder.typicode.com/posts");
  console.log(posts);
  return <div>Post</div>;
};
