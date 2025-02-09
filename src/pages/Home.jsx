import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// import github_light_logo from "/public/assets/github_light.svg";
// import github_dark_logo from "/public/assets/github_light.svg";
// import linkedin_light_logo from "/public/assets/linkedin_light.svg";
// import linkedin_dark_logo from "/public/assets/linkedin_dark.svg";
// import mail_light_logo from "/public/assets/mail_light.svg";
// import mail_dark_logo from "/public/assets/mail_dark.svg";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/public/posts.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched posts:", data);
        setPosts(data);
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
    <div className="bg-gray-100 min-h-screen min-w-screen dark:bg-black/90 ">
      {/* <a href="https://hits.sh/siwoo-jung.github.io/siwoo_blog/">
        <img
          alt="Hits"
          src="https://hits.sh/siwoo-jung.github.io/siwoo_blog.svg?view=today-total&style=plastic&label=visitors&color=000000&labelColor=000000"
        />
      </a> */}

      <div
        id="main-body"
        className={`border-3 flex flex-col space-y-10 mt-5 mx-5 md:mx-[100px] md:mt-10 xl:mx-[350px]`}
      >
        <div
          id="profile"
          className="flex flex-row justify-center space-x-5 items-center"
        >
          <div id="selfie">
            <img
              src="public/assets/selfie.png"
              alt="my_selfie"
              className="rounded-full max-w-20 md:min-w-30 xl:min-w-30"
            ></img>
          </div>
          <div id="my_info" className="flex flex-col justify-around">
            <p className="text-2xl font-bold font-mono">Siwoo JUNG</p>
            <p className="text-[12px] italic md:text-[15px]">
              Actively transitioning into the technology industry, driven by
              passion and enthusiasm for the field.
            </p>
            <div id="links" className="flex flex-row">
              {/* <a
                href="https://github.com/siwoo-jung"
                className="flex justify-center"
              >
                {darkMode ? (
                  <img src="/assets/github_light.svg" className="w-6"></img>
                ) : (
                  <img src="/assets/github_dark.svg" className="w-6"></img>
                )}
              </a> */}
              {/* <a
                href="https://www.linkedin.com/in/siwoojung/"
                className="flex justify-center"
              >
                {darkMode ? (
                  <img src={linkedin_dark_logo} className="w-8"></img>
                ) : (
                  <img src={linkedin_light_logo} className="w-8"></img>
                )}
              </a>
              <a
                href="mailto:siwoo.jg@gmail.com"
                className="flex justify-center ml-[5px]"
              >
                {darkMode ? (
                  <img src={mail_dark_logo} className="w-5"></img>
                ) : (
                  <img src={mail_light_logo} className="w-5"></img>
                )}
              </a> */}
            </div>
          </div>
        </div>
        <div
          id="main_body"
          className=" flex flex-row justify-between space-x-[100px]"
        >
          {
            <ul id="posts" className=" w-full space-y-10">
              {posts.map((post) => (
                <div className="space-y-10">
                  <li key={post.id} className="flex flex-col">
                    <a
                      href={post.link}
                      className="text-2xl md:text-center font-bold font-mono"
                    >
                      {post.title}
                    </a>
                    <p className="mt-5 text-stone-500 font-bold text-[15px]">
                      {post.date}
                    </p>
                    <p className="mt-3">{post.description}</p>
                    <div className="flex flex-row space-x-3 mt-5">
                      {post.tags.map((tag) => (
                        <button className="border-1">{tag}</button>
                      ))}
                    </div>
                  </li>
                  <hr className="border-stone-300 border-1.5"></hr>
                </div>
              ))}
            </ul>
          }

          <div
            id="navigation"
            className="invisible w-0 border-3 xl:w-[15%] xl:visible"
          >
            asdfasdfadsf
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
