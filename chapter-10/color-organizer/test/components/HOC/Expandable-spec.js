import { expect } from 'chai'
import { mount } from 'enzyme'
import Expandable from '../../../src/components/hoc/Expandable'
import { spy } from 'sinon'

describe("Expandable Higher Order Component", () => {

    let props,
        wrapper,
        ComposedComponent,
        MockComponent = ({collapsed, expandCollapse}) =>
            <div onClick={expandCollapse}>
                {(collapsed) ? 'collapsed' : 'expanded'}
            </div>


    describe("Rendering UI", () => {

        before(() => {
            ComposedComponent = Expandable(MockComponent)
            wrapper = mount(<ComposedComponent foo="foo" gnar="gnar"/>)
            props = wrapper.find(MockComponent).props()
        })

        it("Starts off Collapsed", () =>
            expect(props.collapsed).to.be.ok)

        it("Passes the expandCollapse function to composed component", () =>
            expect(typeof props.expandCollapse)
                .to.equal('function'))

        it("passes additional foo prop to composed component", () =>
            expect(props.foo)
                .to.equal("foo"))

        it("passes additional gnar prop to composed component", () =>
            expect(props.gnar)
                .to.equal("gnar"))


    })

    describe("Expand Collapse Functionality", () => {

        let instance

        before(() => {
            ComposedComponent = Expandable(MockComponent)
            wrapper = mount(<ComposedComponent collapsed={false}/>)
            instance = wrapper.instance()
        })

        it("renders the MockComponent as the root element", () =>
            expect(wrapper.first().is(MockComponent)))

        it("starts off expanded", () =>
            expect(instance.props.collapsed).not.to.be.ok)

        it("toggles the collapsed state", () => {
            instance.expandCollapse()
            expect(instance.state.collapsed).to.equal(false)
        })

    })

})
