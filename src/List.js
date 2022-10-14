import React from "react";

const List = ({ properties, handleRemove }) => {
  const element = properties.map((val) => {
    return (
      <article key={val.id} className="person">
        <img src={val.image} alt={val.name} />
        <div>
          <h4>{val.name}</h4>
          <p>{val.age} years</p>
          <button onClick={(e) => handleRemove(e, val.id)}>remove</button>
        </div>
      </article>
    );
  });
  return <>{element}</>;
};

export default List;
