import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Tags = () => {
  const { current_tag } = useParams();
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/postInfo.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched posts:", data[0].posts);
        console.log("Fetched tags:", data[1].tags);
        setPosts(data[0].posts);
        setTags(data[1].tags);
        setLoaded(true);
      })
      .catch((err) => {
        console.log("Error fetching posts:", err);
        setLoaded(false);
      });
  }, []);

  return <div>{posts.length > 0 ? `${current_tag}` : "loading..."}</div>;
};

export default Tags;
