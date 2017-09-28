import PropTypes from 'prop-types'
import Whoops404 from './Whoops404'
import '../../stylesheets/ColorDetails.scss'

const ColorDetails = ({ title, color, history, location }) =>
    (!color) ?
        <Whoops404 location={location}/> :
        <div className="color-details"
             style={{backgroundColor: color}}
             onClick={() => history.goBack()}>
            <h1>{title}</h1>
            <h1>{color}</h1>
        </div>

ColorDetails.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default ColorDetails
