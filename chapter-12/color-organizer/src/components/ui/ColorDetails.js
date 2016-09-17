import { PropTypes } from 'react'
import { withRouter } from 'react-router'
import Whoops404 from './Whoops404'
import '../../stylesheets/ColorDetails.scss'

const ColorDetails = ({ title="[untitled]", location, color, router }) =>
    (!color) ?
        <Whoops404 location={location} /> :
        <div className="color-details"
             style={{backgroundColor: color}}
             onClick={() => router.goBack()}>
            <h1>{title}</h1>
            <h1>{color}</h1>
        </div>


ColorDetails.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
}

export default withRouter(ColorDetails)