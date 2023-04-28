import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = ({contacts, appointments}) => {
  return (
    <div>
      {contacts ? (
        <div>
          {contacts.map((contact, idx) => 
          <Tile
                info={contact}
                key={idx}/>)}
        </div>
      ) : (
      
        <div>
          {appointments.map((appointment, idx) => 
          <Tile
                data={appointment}
                key={idx}/>)}
        </div>
      )}
    </div>
    )
  };
