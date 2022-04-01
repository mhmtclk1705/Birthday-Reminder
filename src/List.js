import React from 'react';
// props ile gönderdiğimiz veriyi alma 
const List = ({people}) => {
  return (
    <>
    {/* map ile data içerisinde gezdik destructuring yaptık */}
    {people.map((person) => {
      const {id, name, age, image} = person
      // html tagleri içerisine yazdırma 
      return <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>



      </article>
    })}
    </>
  );
};

export default List;
