import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: ( _id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        const {affair, deleteAffairCallback } =  props
        deleteAffairCallback(affair._id)
    }

    return (
        <div>
            {
                props.affair.name
            }
            {
                props.affair.priority
            }

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
