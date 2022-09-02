import axios from "axios";
import { Post } from "../utils/types/posts";

const API = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const posts: Post[] = await axios.get(API).then(({ data }) => {
    return data;
  });
  return posts;
};
