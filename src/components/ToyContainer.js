import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, toDelete, toUpdate, updateLikes}) {



  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
    {toys.map(toy=>{
     return <ToyCard key={toy.id} toy={toy} toDelete={toDelete} toUpdate={toUpdate} updateLikes={updateLikes}/>
    })}
    </div>
  );
}

export default ToyContainer;
