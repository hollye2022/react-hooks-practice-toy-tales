import React from "react";

function ToyForm({name,image,handleImageChange,handleNameChange,handleSubmit}) {


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
