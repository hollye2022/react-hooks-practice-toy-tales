import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [toys, setToys] = useState([])
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [likes,setLikes]=useState()


  useEffect(()=>{
  fetch("http://localhost:3001/toys")
  .then(res => res.json())
  .then((toys) => setToys(toys))
  },[])

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleImageChange(e){
    setImage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3001/toys",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        Accept:"application/json"
      },
      body:JSON.stringify({
        name:name,
        image:image
      })
    })
    .then(res=>res.json())
    .then(data=>setToys([...toys,data]))
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function toDelete(id){
    const updatedToys=toys.filter(toy=>toy.id !== id)
    setToys(updatedToys)
  }

  function toUpdate(updatedToy){
    const updatedToys=toys.map(toy=>{
      if(toy.id===updatedToy.id) return updatedToy
      else return toy
    })
    setToys(updatedToys)
  }

  function updateLikes(){
    setLikes(prevs=>prevs+1)

  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNameChange={handleNameChange} name={name} image={image} 
      handleSubmit={handleSubmit} handleImageChange={handleImageChange} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} toDelete={toDelete} toUpdate={toUpdate} updateLikes={updateLikes} />
    </>
  );
}

export default App;
