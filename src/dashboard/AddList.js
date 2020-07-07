import React, {useContext} from "react";
import './Dashboard.css';
import OpenedAddList from "./OpenedAddList";
import CloseAddList from "./ClosedAddList";
import Context from "./context";

export default function AddList() {
    const {config} = useContext(Context);

    return config.isOpen ? <OpenedAddList/> : <CloseAddList/>
}