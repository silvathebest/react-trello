import React, {useContext} from "react";
import Context from "./context";

export default function CloseAddList() {
    const {open} = useContext(Context);
    return (
        <button className='add-list' onClick={open}>
            <i>+</i>
            <span>Add list</span>
        </button>
    )
}