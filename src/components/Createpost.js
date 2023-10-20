import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

function Createpost({ open, handleClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleCreatePost = () => {
    // Implement logic for creating a post here
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Image:", image);
    // You can send this data to the backend or perform other actions
    handleClose(); // Close the modal after creating the post
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a Post</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Post Content"
          variant="outlined"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Image URL"
          variant="outlined"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCreatePost}>
          Create Post
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default Createpost;