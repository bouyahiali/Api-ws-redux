import React from 'react'
import { useParams } from 'react-router-dom'

const Hours = ({ days }) => {
    const { date } = useParams()

    return (
        <div>
            <ul> {days.find(el => el.date === date).hour.map(el => <li>{el.temp_c}</li>)}</ul>
        </div>
    )
}

export default Hours