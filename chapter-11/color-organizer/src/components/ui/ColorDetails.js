import { PropTypes } from 'react'
import { withRouter, hashHistory } from 'react-router'
import '../../stylesheets/ColorDetails.scss'

const ColorDetails = ({ params, title, color }) =>
    (!title) ?
        <h1>Color with id '{params.id}' not found</h1> :
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