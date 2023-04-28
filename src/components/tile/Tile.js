import React from "react";

export const Tile = ({info, data}) => {
  return (

    <div>
      {info ? (
        <div>
          <h4 className="tile-title">{info.name}</h4>
          <p className="tile">{info.email}</p>
          <p className="tile">{info.phone}</p>
        </div>
      ) : (
        <div>
          <h4>{data.title}</h4>
          <p>{data.date}</p>
          <p>{data.time}</p>
        </div>
      )}
    </div>
  )
};
