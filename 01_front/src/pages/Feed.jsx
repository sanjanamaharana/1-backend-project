import React from 'react'
import { useState,useEffect } from 'react'
// if you not use useeffect then it call multiple time
import axios from 'axios'

function Feed() {

  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://thelenslounge.com/wp-content/uploads/2024/07/posing-women-in-photos.jpg",
      caption: "baby"
    }
  ])
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPosts(res.data.posts)
    })
  },[])
  return (
    <section className='feed-section'>
      {
        posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className='post'>
              <div className="image-container">
                <img src={post.image} className="post-image" alt={post.caption} />
              </div>

              <div className="post-footer">
                <p className="caption">{post.caption}</p>
                <div className="post-actions">
                  <button className="action-btn">😍</button>
                  <button className="action-btn">💬</button>
                  <button className="action-btn">✈️</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No post Available</h1>
        )
      }
    </section>
  )
}

export default Feed
