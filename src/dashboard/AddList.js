import React, {useEffect} from "react";
import './Dashboard.css'

export default function AddList({ config, open, close }) {
  useEffect(() => {
    config.isOpen && document.querySelector('.opened-add-list > input').focus()
  }, [config])

  return (
    config.isOpen
      ? //<OpenedAddList/>
      <div className='opened-add-list'>
        <input /*ref={ input }*//>
        <div>
          <button>Add list</button>
          <button onClick={ close }>&times;</button>
        </div>
      </div>
      : //<ButtonAddList/>
      <button className='add-list' onClick={ open }>
        <i>+</i>
        <span>Add list</span>
      </button>
  )
}