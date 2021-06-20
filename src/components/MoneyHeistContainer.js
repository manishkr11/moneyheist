import React from 'react'
import SectionA from './SectionA'
import MoenyHeistList from '../components/MoenyHeistList'
import Modal from "../components/Modal"
import Carousel from "../components/Carousel"
import Navbar from './Navbar'

function MoneyHeistContainer() {
    return (
        <div className="money-heist-container">
            <Navbar />
            <SectionA />
            <Modal />  
            <Carousel />      
            <MoenyHeistList />        
        </div>
    )
}

export default MoneyHeistContainer
