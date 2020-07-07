import React, {useState} from "react";
import './Dashboard.css'
import Context from "./context"
import AddList from "./AddList";
import Card from "./Card";

export default function Dashboard() {
    const [configAddList, setAddList] = useState({isOpen: false})

    function openAddList() {
        setAddList({isOpen: true})
    }

    function clickDashboard(event) {
        event.target.classList.contains('dashboard') && closeAddList()
    }

    function closeAddList() {
        setAddList({isOpen: false})
    }

    const [lists, setLists] = useState([
      { id: 1, title: 'New List', cards: [{ id: 1, title: 'New card' }]},
      { id: 2, title: 'New List2', cards: [{ id: 1, title: 'New card' }]}
    ])

    function addList(list) {
      setLists.push(list)
    }

    return (
        <Context.Provider value={{open: openAddList, config: configAddList, addList}}>
            <div className='dashboard' onClick={configAddList.isOpen ? clickDashboard : null}>
                {lists.map(list => <Card key={ list.id } config={list}/>)}
                <AddList/>
            </div>
        </Context.Provider>
    );
}