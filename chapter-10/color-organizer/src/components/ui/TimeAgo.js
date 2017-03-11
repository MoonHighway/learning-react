import { ago } from '../../lib/time-helpers'

const TimeAgo = ({timestamp}) =>
    <div className="time-ago">
        { ago(timestamp) }
    </div>

TimeAgo.displayName = "TimeAgo"

export default TimeAgo
