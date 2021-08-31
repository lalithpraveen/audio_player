import {Link} from 'react-router-dom'
import './index.css'

const ReactSlider = props => {
    const {trackDetails} = props 
    const {cover,name} = trackDetails 

    return (
        <Link to={`/song/${name}`} className="link-item">
        <div>
            <img src={cover} alt={name} className="carousal-image"/>
            <h1 className="carousal-name">{name}</h1>
        </div>
        </Link>
    )
}

export default ReactSlider