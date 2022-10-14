import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [state, setState] = useState(data);
  const handleClick = () => {
    setState([]);
  };
  //This was before i implemented the list function for the handleRemove in the List component
  // function handleRemove(e, ind) {
  //   setState((prev) => prev.filter((val) => val.id !== ind));
  // }

  // const element = state.map((val) => {
  //   return (
  //     <article key={val.id} className="person">
  //       <img src={val.image} alt={val.name} />
  //       <div>
  //         <h4>{val.name}</h4>
  //         <p>{val.age} years</p>
  //         <button onClick={(e) => handleRemove(e, val.id)}>remove</button>
  //       </div>
  //     </article>
  //   );
  // });
  return (
    <>
      <section className="container">
        <h3>
          {state.length} birthday{state.length > 1 ? "s" : ""} today
        </h3>
        {/* {element} */}
        <List
          properties={state}
          handleRemove={(e, ind) => {
            e.stopPropagation();
            setState((prev) => prev.filter((val) => val.id !== ind));
          }}
        />
        <button onClick={handleClick}>clear all</button>
      </section>
    </>
  );
}

export default App;
