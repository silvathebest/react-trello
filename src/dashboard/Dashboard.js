import React, {useState} from "react";
import './Dashboard.css'
import AddList from "./AddList";

export default function Dashboard() {
  const [configAddList, setAddList] = useState({ isOpen: false })

  function openAddList() {
    setAddList({ isOpen: true })
  }

  function clickDashboard(event) {
    event.target.classList.contains('dashboard') && closeAddList()
  }

  function closeAddList() {
    setAddList({ isOpen: false })
  }

  return (
    <div className='dashboard' onClick={ configAddList.isOpen ? clickDashboard : () => {} }>
      <AddList config={ configAddList } open={ openAddList } close={ closeAddList }/>
    </div>
  );
}