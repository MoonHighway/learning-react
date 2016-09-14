import { PropTypes } from 'react'
import { withRouter } from 'react-router'
import '../../stylesheets/ColorDetails.scss'

const ColorDetails = ({ title, color, router }) =>
    <div className="color-details"
         style={{backgroundColor: color}}
         onClick={() => router.goBack()}>
        <h1>{title}</h1>
        <h1>{color}</h1>
    </div>

ColorDetails.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default withRouter(ColorDetails)