import React, {useState} from "react";
import './Dashboard.css'
import AddList from "./AddList";

export default function Dashboard() {
  const [configAddList, setAddList] = useState({ isOpen: false })

  function openAddList() {
    setAddList({ isOpen: true })
  }

  function closeAddList(event) {
    console.log(event)
    setAddList({ isOpen: false })
  }

  return (
    <div className='dashboard' onClick={ configAddList.isOpen ? closeAddList : () => {} }>
      <AddList config={ configAddList } open={ openAddList }/>
    </div>
  );
}