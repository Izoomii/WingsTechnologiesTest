import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { Post } from "../utils/types/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Stack padding={2}>
      <Stack
        paddingX={7}
        shadow={"md"}
        borderRadius={10}
        width={"sm"}
        height={"sm"}
        justify={"center"}
      >
        <Text fontWeight={"bold"} paddingY={5} fontSize={20}>
          {post.title}
        </Text>
        <Text fontSize={18}>{post.body}</Text>
      </Stack>
    </Stack>
  );
}
