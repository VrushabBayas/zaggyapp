import Link from "next/link";
import React from "react";

import "./page.css";
export default function BlogPage() {
  return (
    <div className="blog-list">
      <h1>Blog Page</h1>
      <p>
        <Link href={"/blog/1 "}>Post 1</Link>{" "}
      </p>
      <p>
        <Link href={"/blog/2"}> Post2 </Link>{" "}
      </p>
    </div>
  );
}
