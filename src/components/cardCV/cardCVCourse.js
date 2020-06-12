import React from "react"

import Style from "./cardCV.module.scss"

const CardCVCourse = ({ children, date }) => (
    <>
    <p className={Style.small}>{date}</p>
    <div className={Style.grey}>{children}</div>
    <hr className={Style.full}/>
    </>
)

export default CardCVCourse
