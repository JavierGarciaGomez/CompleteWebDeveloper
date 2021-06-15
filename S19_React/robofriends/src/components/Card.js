// 219 test component

import React from "react";

const Card = (props) => {
  // destructuring props
  const { name, id, email } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2> {name}</h2>
        <p> {email}</p>
      </div>
    </div>
  );
};

export default Card;
