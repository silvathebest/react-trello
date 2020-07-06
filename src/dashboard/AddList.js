import React from "react";
import './Dashboard.css'

export default function AddList({config, open}) {

  return (
    config.isOpen
      ? <div>test</div>
      : <button className='add-list' onClick={ open }>
          <i>+</i>
          <span>Add list</span>
        </button>
  )
}