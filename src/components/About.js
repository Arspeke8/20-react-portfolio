import React, { useState, useEffect } from 'react';
import "./About.css"

const About = () => {
    const [myPokemon, updateMyPokemon] = useState ("bulbasaur") 

useEffect(()=>{
    setTimeout(()=>{
        updateMyPokemon("pickachu")
    },5000)
})

  return (
    <section>
     <details>
        <summary>my favorite pokemon</summary>
        <p>{myPokemon}</p>
     </details>
    </section>
  );
};

export default About;