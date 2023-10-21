import React, { useState } from 'react';
import "../styles/Createpost.css"
import { json } from 'react-router-dom';
import "../styles/Createpage.css"

const Createpage = ({ onClose }) => {
  const [pname, setpname] = useState('');
  const [Category, setCategory] = useState('');
  const [image, setImage] = useState(null);
 
  //

  const handleCreatepage = () => {
    // Logic to handle post creation (e.g., API call)
    // You can use 'title', 'content', and 'image' states here
    // ...
    postPageData();
    // Close the popup after post creation
    onClose();


  };

 async function postPageData(){
  
  
 }

 

  return (
    <div className="page_popup">
      <h2 className='page_header'>Create a page</h2>
      <p>Your Page is Where people go to learn More about you 
         more about you. Make sure that your has all
         of the infromation they may need.
      </p>
      <span className="close" onClick={onClose}>&times;</span>
      <input
        type="text"
        placeholder="Page Name(required)"
        value={pname}
        onChange={(e) => setpname(e.target.value)}
      />
        <p>Use the name of business,barnd or orgnisation,or
          name that helps explain your page. 
        </p>
      <br></br>
      <input
        type="text"
        placeholder="Category (required)"
        value={Category}
        onChange={(e) => setCategory(e.target.value)}
      /><br></br>
       <p> Enter a Category that best describes you.</p>
       

      <button  className='page_popup_button'  onClick={handleCreatepage} text="Create page">Create page</button>
    </div>
  );
};

export default Createpage;