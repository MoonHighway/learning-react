import PropTypes from 'prop-types'
import '../../stylesheets/Star.scss'

const Star = ({ selected=false, onClick=f=>f }) =>
    <div className={(selected) ? "star selected" : "star"}
         onClick={onClick}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star
