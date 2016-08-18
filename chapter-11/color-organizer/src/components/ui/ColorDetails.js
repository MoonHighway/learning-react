import { PropTypes } from 'react'
import { hashHistory } from 'react-router'
import '../../stylesheets/ColorDetails.scss'

const ColorDetails = ({ location, title, color }) =>
    (!title) ?
        <h1>Color with id '{location.pathname.replace('/','')}' not found</h1> :
        <div className="color-details"
             style={{backgroundColor: color}}
             onClick={() => hashHistory.goBack()}>
            <h1>{title}</h1>
            <h1>{color}</h1>
        </div>

ColorDetails.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default ColorDetails