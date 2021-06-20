import React from 'react'
import Card from '../components/Card'

const characters = [
    {name:'Professor', age:34},
    {name:'Nirobi', age:34},
    {name:'Helsinki', age:34},
    {name:'Reo', age:34},
    {name:'Berlin', age:34},
]

function MoenyHeistList() {
    return (
        <div>
            {characters.map((item, i) => {
                return (
                    <Card key={i} character={item}/>
                )
            })}
        </div>
    )
}

export default MoenyHeistList
