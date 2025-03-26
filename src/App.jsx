import React from "react";
import PostList from "./features/post/PostList";
import AddPostForm from "./features/post/AddPostForm";

export default function App() {
  return (
    <div className="wrapper">
      <AddPostForm/>
      <PostList/>

      
      
    </div>
  );
}
