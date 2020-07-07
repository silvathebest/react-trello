import React, {useContext, useEffect, useRef} from "react";
import Context from "./context";

export default function OpenedAddList() {
    const {config} = useContext(Context);
    const input = useRef(null);

    useEffect(() => {
        input.current.focus()
    }, [config])
    return (
        <div className='opened-add-list'>
            <input ref={input} placeholder='Enter the title of the list'/>
        </div>
    );

}
