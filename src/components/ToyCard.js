import React from "react";

function ToyCard({toy,toDelete,toUpdate,updateLikes}) {

  const {id,image,name,likes}= toy


  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"DELETE",
    })
    .then(res=>res.json)
    .then(()=>toDelete(id))
  }
 
  function handleUpdate(e){
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
      },
      body: JSON.stringify({
        likes:updateLikes()
      })
    })
    .then(res=>res.json)
    .then(data=>toUpdate(data))
    
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleUpdate} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
