import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../components/PostsProvider";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import TagButton from "../components/TagButton";

const PostPage = () => {
  const { postId } = useParams();
  const { postsData = [] } = useContext(PostsContext);
  const post = postsData[postId - 1];
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(post.markdownFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [post]);

  if (!post) return <h1>Post not found</h1>;

  return (
    <div className="main-margin border-3">
      <h1 className="text-xl md:text-4xl font-bold text-center dark:text-gray-600 font-mono">
        {post.title}
      </h1>

      <p className="dark:!text-gray-400 text-gray-500 mt-2 ">{post.date}</p>
      <div id="tags" className="flex flex-row space-x-3 mt-4">
        {post.tags.map((tag, index) => (
          <TagButton key={index} tag={tag} />
        ))}
      </div>
      <hr className="border-stone-300 border-1.5 mt-5"></hr>
      <ReactMarkdown className="mt-10">{content}</ReactMarkdown>
    </div>
  );
};

export default PostPage;
