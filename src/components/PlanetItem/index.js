// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {name, imageUrl, description} = planet
  return (
    <div className="palnet-container">
      <h1 className="planets-title">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="image-size" />
      <h1 className="planet-name">{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
