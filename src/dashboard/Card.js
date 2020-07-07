import React from "react";

export default function Card({ config }) {
  return (
    <div className='list'>
      <span>{config.title}</span>
      {config.cards.map(card => <div>{card.title}</div>)}
    </div>
  )
}