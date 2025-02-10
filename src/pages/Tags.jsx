import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../components/PostsProvider";

const Tags = () => {
  const { current_tag } = useParams();
  const { postsData, tagsData } = useContext(PostsContext);

  const posts = postsData;
  console.log(posts);

  //   return <div>{posts.length > 0 ? `${current_tag}` : "loading..."}</div>;
  return <div>asdf</div>;
};

export default Tags;
