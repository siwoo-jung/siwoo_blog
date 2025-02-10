import React, { useEffect, useState } from "react";
import TagButton from "../components/TagButton";

const Home = ({ darkMode }) => {
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen min-w-screen">
      {/* <a href="https://hits.sh/siwoo-jung.github.io/siwoo_blog/">
        <img
          alt="Hits"
          src="https://hits.sh/siwoo-jung.github.io/siwoo_blog.svg?view=today-total&style=plastic&label=visitors&color=000000&labelColor=000000"
        />
      </a> */}

      <div
        id="main-body"
        className={`flex flex-col space-y-10 mt-5 mx-5 md:mx-[100px] md:mt-20 xl:mx-[300px] 2xl:mx-[500px]`}
      >
        <div id="profile" className="flex flex-row space-x-5 items-center">
          <div id="selfie">
            <img
              src="/assets/selfie.png"
              alt="my_selfie"
              className="rounded-full max-w-20 md:min-w-30 xl:min-w-30"
            ></img>
          </div>
          <div id="my_info" className="flex flex-col justify-around">
            <p className="text-2xl font-bold font-mono">Siwoo JUNG</p>
            <p className="text-[12px] italic md:text-[15px]">
              Actively transitioning into the technology industry,
            </p>
            <p className="text-[12px] italic md:text-[15px]">
              driven by passion and enthusiasm for the field.
            </p>
            <div id="links" className="flex flex-row">
              <a
                href="https://github.com/siwoo-jung"
                className="flex justify-center"
              >
                {darkMode ? (
                  <img
                    src="/assets/github_dark.svg"
                    alt="gitub"
                    className="w-6"
                  ></img>
                ) : (
                  <img
                    src="/assets/github_light.svg"
                    alt="github"
                    className="w-6"
                  ></img>
                )}
              </a>
              <a
                href="https://www.linkedin.com/in/siwoojung/"
                className="flex justify-center"
              >
                {darkMode ? (
                  <img
                    src="/assets/linkedin_dark.svg"
                    alt="linkedIn"
                    className="w-8"
                  ></img>
                ) : (
                  <img
                    src="/assets/linkedin_light.svg"
                    alt="linkedIn"
                    className="w-8"
                  ></img>
                )}
              </a>
              <a
                href="mailto:siwoo.jg@gmail.com"
                className="flex justify-center ml-[5px]"
              >
                {darkMode ? (
                  <img
                    src="/assets/email_dark.svg"
                    alt="email"
                    className="w-5"
                  ></img>
                ) : (
                  <img
                    src="/assets/email_light.svg"
                    alt="email"
                    className="w-5"
                  ></img>
                )}
              </a>
            </div>
          </div>
        </div>
        <div id="main_body" className=" flex flex-row justify-between border-3">
          {
            <ul id="posts" className="space-y-10 w-full">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div className="space-y-10 border-3 w-full">
                    <hr className="border-stone-300 border-1.5"></hr>
                    <li key={post.id} className="flex flex-col">
                      <a
                        href={post.link}
                        className="text-2xl md:text-center font-bold font-mono"
                      >
                        <p>{post.title}</p>
                      </a>
                      <h1 className="mt-5 text-stone-500 font-bold text-[15px]">
                        {post.date}
                      </h1>
                      <p className="mt-3">{post.description}</p>
                      <div className="flex flex-row space-x-3 mt-5">
                        {post.tags.map((tag) => (
                          <TagButton tag={tag} />
                        ))}
                      </div>
                    </li>
                  </div>
                ))
              ) : (
                <p>No posts available.</p>
              )}
            </ul>
          }

          <div
            id="navigation"
            className="border-1 invisible w-0 xl:w-[20%] xl:visible xl:ml-[100px] flex flex-col space-y-4 items-center"
          >
            <p className="font-bold text-blue-600 ">Tag List</p>
            <ul className="flex flex-col items-center w-full space-y-2">
              {tags.map((tag) => (
                <a
                  className="w-full flex flex-row justify-between items-center"
                  href={`/#/tags/${tag.name}`}
                >
                  <p className="text-gray-700">{tag.name}</p>
                  <div className="rounded-sm bg-gray-300 dark:bg-gray-800">
                    <p className="w-[20px] text-center text-[14px]">
                      {tag.count}
                    </p>
                  </div>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
