import React, { createContext, useState } from "react";

export const PostsContext = createContext();

const initialPostData = [
  {
    id: 1,
    title: "전략 패턴, 코틀린과 스프링으로 효율적으로 써보자",
    description: "먼저 p리고 최대…",
    date: "2024-01-01",
    link: "/posts/1",
    tags: ["Spring", "Design Pattern"],
  },
  {
    id: 2,
    title: "은행 개발자와 알아보는 코틀린 BigDecimal",
    description: "개발을 하다 보면 소다…",
    date: "2024-01-01",
    link: "/posts/2",
    tags: ["Kotlin"],
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
