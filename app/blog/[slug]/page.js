import React from "react";

import "./page.css";
export default function BlogPostPage({ params }) {
  console.log("params: ", params);
  return (
    <div className="blog-post">
      <h1>Blog post</h1>
      <h2>{params.slug}</h2>
      Sit culpa officia pariatur Lorem ex anim irure excepteur consectetur.
    </div>
  );
}
