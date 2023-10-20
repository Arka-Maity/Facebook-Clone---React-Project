import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { getProduct } from "../store/productSlice";
//import { recomposeColor } from "@material-ui/core";

function Feed() {
  const dispatch = useDispatch([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPost() {
      var myHeaders = new Headers();
      myHeaders.append("projectId", "x57qvgem43cn");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const res = await fetch(
        "https://academics.newtonschool.co/api/v1/facebook/post?limit=100",
        requestOptions
      );
      const data = await res.json();
      dispatch(getProduct(data.data));
      // console.log(data.data);
      setPosts(data.data);
    }

    getPost();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts &&
        posts.map((item) => {
          return (
            <div key={item._id}>
              <Post
                name={item.author.name}
                profilepic={item.author.profileImage}
                massage={item.content}
                image={item.channel.image}
                like={item.likeCount}
                comment={item.commentCount}
              />
            </div>
            
          );
        })}
    </div>
  );
}

export default Feed;