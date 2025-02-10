import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../components/PostsProvider";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import TagButton from "../components/TagButton";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>{`${post.title} | My Blog`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://siwoo-jung.github.io/posts/${postId}`}
        />
        <meta property="og:image" content="/default-thumbnail.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content="/default-thumbnail.jpg" />
      </Helmet>
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
