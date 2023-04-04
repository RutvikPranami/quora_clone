import React, { useEffect, useState } from "react";
import "../CSS/Feed.css";
import Post from "./Post";
import QuoraBox from "./QuoraBox";
import db from "../firebase";
import { selectSearchResults } from "../features/searchResultslice";
import { useSelector } from "react-redux";

function Feed() {
  const searchInput = useSelector(selectSearchResults);
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState([]);

  useEffect(() => {
    const tempPost = [...posts]
      const newPosts = tempPost.filter((search) => {
        return search.questions.question
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setSearchPost(newPosts);
    
  }, [searchInput]);

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <QuoraBox />
      {searchInput
        ? searchPost.map(({ id, questions }) => (
            <Post
              key={id}
              Id={id}
              question={questions.question}
              imageUrl={questions.imageUrl}
              timestamp={questions.timestamp}
              users={questions.user}
            />
          ))
        : posts.map(({ id, questions }) => (
            <Post
              key={id}
              Id={id}
              question={questions.question}
              imageUrl={questions.imageUrl}
              timestamp={questions.timestamp}
              users={questions.user}
            />
          ))}
    </div>
  );
}

export default Feed;
