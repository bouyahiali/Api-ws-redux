import React from 'react'
import { Link } from 'react-router-dom'

const NextDays = ({el}) => {
  return (
    <Link to={`/${el.date}`}>
    <div>
        <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col" >
              <div className="row row1">{el.day.maxtemp_c}°/{el.day.mintemp_c}°</div>
              <div className="row row2"><img className="img-fluid" src={el.day.condition.icon} alt="" /></div>
              <div className="row row3">{el.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default NextDays