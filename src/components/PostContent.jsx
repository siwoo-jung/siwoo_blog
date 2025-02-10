import React, { Suspense } from "react";

const PostContent = ({ postId }) => {
  try {
    // const PostComponent = React.lazy(() => import(`/src/posts/${postId}.jsx`));
    const PostComponent = React.lazy(() =>
      import(`../../src/posts/${postId}.jsx`)
    );

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PostComponent />
      </Suspense>
    );
  } catch (error) {
    return <div>Error loading post</div>;
  }
};

export default PostContent;
