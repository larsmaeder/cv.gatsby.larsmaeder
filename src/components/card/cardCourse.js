import React from "react"

import Style from "./card.module.scss"

const CardCourse = ({ children, date }) => (
    <>
    <p className={Style.small}>{date}</p>
    <div className={Style.grey}>{children}</div>
    <hr className={Style.full}/>
    </>
)

export default CardCourse
