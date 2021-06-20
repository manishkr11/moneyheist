import React from 'react'
import nirobi from '../pictures/nirobi.jpg'
import '../style/SectionA.css'

function SectionA() {
    return (
        <div>
            <article className="sectionA-article">
                <img src={nirobi} alt="money heist" className="group-img"></img>
                <header className="sectionA-header">
                    <h1>Money Heist (TV Series 2017– 2021)</h1>
                <i>La casa de papel (original title)</i>
                </header>
            </article>
            <footer className="sectionA-footer">cast</footer>
        </div>
    )
}

export default SectionA
