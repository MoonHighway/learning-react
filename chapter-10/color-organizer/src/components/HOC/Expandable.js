import { Component } from 'react'

const Expandable = ComposedComponent => class extends Component {

    constructor(props) {
        super(props)
        let collapsed = (typeof props.collapsed === 'boolean') ?
            props.collapsed : true
        this.state = {collapsed}
        this.expandCollapse = this.expandCollapse.bind(this)
    }

    expandCollapse() {
        let collapsed = !this.state.collapsed
        this.setState({collapsed})
    }

    render() {
        return <ComposedComponent expandCollapse={this.expandCollapse} {...this.state} {...this.props} />
    }
}

export default Expandable
