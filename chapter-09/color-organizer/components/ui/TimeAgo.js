import { ago } from '../../lib/time-helpers'

const TimeAgo = ({timestamp}) => {
    return <div className="time-ago">
        { ago(timestamp) }
    </div>
}

export default TimeAgo