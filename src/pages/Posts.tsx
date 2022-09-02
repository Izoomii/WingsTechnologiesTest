import React, { useEffect, useState } from "react";
import { Box, Spinner, Stack } from "@chakra-ui/react";
import { getPosts } from "../api/posts";
import PostCard from "../components/PostCard";
import { Post } from "../utils/types/posts";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Stack paddingX={32}>
      <Box fontSize={50} fontWeight="bold" w="100%">
        Posts
      </Box>
      {loading ? (
        <Stack alignItems={"center"}>
          <Spinner size={"xl"} />
        </Stack>
      ) : (
        <Stack justifyContent={"center"} direction={"row"} flexWrap="wrap">
          {posts.map((elem, index) => {
            return <PostCard post={elem} key={index} />;
          })}
        </Stack>
      )}
    </Stack>
  );
}
