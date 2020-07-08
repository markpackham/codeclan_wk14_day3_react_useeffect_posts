import React, { useState, useEffect } from "react";

export default function App() {
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost();
  });

  const getPost = () => {
    fetch(`http://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  };

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
