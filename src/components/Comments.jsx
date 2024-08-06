import { useFetch } from "./hooks/useFetch";

export const Comments = () => {
  const [comments] = useFetch(
    {},
    "https://jsonplaceholder.typicode.com/comments"
  );
  console.log(comments);
  return <div>Comments</div>;
};
