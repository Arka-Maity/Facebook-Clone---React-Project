import React, { useState } from "react";
import "../styles/Createpost.css";
import { json } from "react-router-dom";

const CreatePost = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleCreatePost = () => {
    // Logic to handle post creation (e.g., API call)
    // You can use 'title', 'content', and 'image' states here
    // ...
    postData();
    // Close the popup after post creation
    onClose();
  };

  async function postData() {
    var myHeaders = new Headers();
    myHeaders.append("ProjectId", "x57qvgem43cn");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmVjY2RmMDRlZDI2ZDBlNzI5NzYyMSIsImlhdCI6MTY5Nzc4OTAxNSwiZXhwIjoxNzI5MzI1MDE1fQ.-hYrb-Tz7bnio8_cjKGpeyag7Qwr-A1Ax3SwmuKvl5s"
    );

    var formdata = new FormData();
    formdata.append("titile", title);
    formdata.append("content", content);
    formdata.append("images", image, "[PROXY]");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://academics.newtonschool.co/api/v1/facebook/post/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="post_popup">
      <h2>Create a Post</h2>
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br></br>
      <textarea
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br></br>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br></br>
      <button
        className="post_popup_button"
        onClick={handleCreatePost}
        text="Create Post"
      >
        POST
      </button>
    </div>
  );
};

export default CreatePost;