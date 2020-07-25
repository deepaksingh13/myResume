import React from 'react'
import './resume.css'

const ResumeInside = ({fromDate, toDate, mainHeading, secondaryHead, innerConnent}) => {
    console.log(fromDate);
    return (
        <div className="resumeInside">
            <p className="date">{fromDate} - {toDate}</p>
            <h5>{mainHeading}</h5>
            <h6>{secondaryHead}</h6>
            <p>{innerConnent}</p>
        </div>
    )
}

export default ResumeInside
