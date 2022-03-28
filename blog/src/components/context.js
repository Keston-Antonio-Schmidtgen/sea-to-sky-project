import { createContext, useState } from "react";
import React from "react";

export const SeaContext = createContext();

export default function SeaContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState([]);

  const [post, setPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const [blog, setBlog] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  const [comment, setComment] = useState();
  const [allComments, setAllComments] = useState();

  return (
    <SeaContext.Provider
      value={{
        users,
        setUsers,
        post,
        setPost,
        allPosts,
        setAllPosts,
        blog,
        setBlog,
        allBlogs,
        setAllBlogs,
        currentAdmin,
        setCurrentAdmin,
        comment,
        setComment,
        allComments,
        setAllComments,
      }}
    >
      {children}
    </SeaContext.Provider>
  );
}
