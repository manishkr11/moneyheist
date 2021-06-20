import React from 'react'
import SectionA from './SectionA'
import MoenyHeistList from '../components/MoenyHeistList'

function MoneyHeistContainer() {
    return (
        <div className="money-heist-container">
            <SectionA />    
            <MoenyHeistList />        
        </div>
    )
}

export default MoneyHeistContainer
