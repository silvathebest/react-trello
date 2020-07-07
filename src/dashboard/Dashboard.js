import React, {useState} from "react";
import './Dashboard.css'
import Context from "./context"
import AddList from "./AddList";

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

    return (
        <Context.Provider value={{open: openAddList, config: configAddList}}>
            <div className='dashboard' onClick={configAddList.isOpen ? clickDashboard : null}>
                <AddList/>
            </div>
        </Context.Provider>
    );
}