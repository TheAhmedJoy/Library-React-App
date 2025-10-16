import React from 'react'

export default function HighlightItem({icon, title, parag}) {
    return (
        <div className="highlight">
            <div className="highlight__img">
                {icon}
            </div>
            <h3 className="highlight__subtitle">{title}</h3>
            <p className="hightlight__para">
                {parag}
            </p>
        </div>
    )
}
