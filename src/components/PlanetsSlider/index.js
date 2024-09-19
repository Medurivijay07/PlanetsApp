// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const {planetsList} = props
  return (
    <div className="planetSlider-container" data-testid="planets">
      <div className="slider-container">
        <Slider {...settings}>
          {planetsList.map(Item => (
            <PlanetItem key={Item.id} planet={Item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
