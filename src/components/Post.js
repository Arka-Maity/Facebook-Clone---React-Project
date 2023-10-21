import React from "react";
import "../styles/Post.css";
import { Avatar } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useSelector } from "react-redux";

/*
{            for reference only.....
            "_id": "64e6002d57dac0dd436b3d3f",
            "author": {
                "name": "Carmen Shanahan",
                "profileImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/366.jpg"
            },
            "content": "Can you believe how fast this year is going? Throwback to an unforgettable trip; can't wait to travel again soon. What a beautiful day it is outside! Just finished reading an incredible book; can't wait to share more about it. Caught the sunset today and it was a breathtaking sight. Took a long walk in the park today and felt truly rejuvenated.",
            "channel": {
                "name": "TravelTales",
                "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/591.jpg",
                "owner": "64e46da516ffad905d724fc7"
            },
            "likeCount": 10,
            "commentCount": 22
        },

*/
//{profilePic,image,username,timestamp,message}
const Post = ({image, name, massage, profilepic, like,comment }) => {
//  const { image, name, massage, profilepic } = props.posts;


  // {profilePic,username,message}=props.dataitem
  // const product = useSelector((store) => store.product.product);
  //console.log("law=>" + image, name, massage, profilepic);

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilepic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{name}</h3>
          <p>{massage}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{massage}</p>
      </div>

      <div className="post__image">
        <img src={image} alt=" " />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>{like}</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>{comment}</p>
        </div>

        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};
export default Post;