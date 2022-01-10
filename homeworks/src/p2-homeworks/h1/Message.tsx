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
            <div className={s.corner}></div>
                <div className={s.content}>
                    <div className={s.name}> {props.name} </div>
                    <div className={s.text}> {props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
        </div>
    )
}


