import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { API } from '../data';

function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch(`${API}/post`).then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}

export default IndexPage