import React from 'react'
import s from './Message.module.css'

type typeMessageProp = {
    avatar: string
    name: string
    message: string
    time: string
}

export default function Message(props: typeMessageProp) {
    return (

        <div className={s.message}>
            <img src={props.avatar} className={s.avatar}/>
            <div className={s.content}>
                <h6 className={s.name} > {props.name} </h6>
                <p> {props.message}</p>
                <p>{props.time}</p>
            </div>
        </div>
    )
}


