import React, { createContext, useState } from "react";

export const PostsContext = createContext();

const initialPostData = [
  {
    id: 1,
    title: "This is title your title his title their title",
    description: "먼저 p리고 최대…",
    date: "2024-01-01",
    link: "/#/posts/1",
    tags: ["Spring", "Design Pattern"],
    markdownFile: "/posts/1.md",
  },

  {
    id: 2,
    title: "title2",
    description: "개발을 하다 보면 소다…",
    date: "2025-01-01",
    link: "/#/posts/2",
    tags: ["Kotlin"],
    markdownFile: "/posts/2.md",
  },
];

const initialTagData = [
  { name: "All", count: 3 },
  { name: "Kotlin", count: 1 },
  { name: "Design Pattern", count: 1 },
  { name: "Spring", count: 1 },
];

const PostsProvider = ({ children }) => {
  const [postsData, setPostsData] = useState(initialPostData);
  const [tagsData, setTagsData] = useState(initialTagData);

  return (
    <PostsContext.Provider value={{ postsData, tagsData }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
