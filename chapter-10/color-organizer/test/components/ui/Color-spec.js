import { expect } from 'chai'
import Color from '../../../src/components/ui/Color'
import { mount } from 'enzyme'
import { spy } from 'sinon'

describe("<Color /> UI Component", () => {

    let MockStarRating = ({starsSelected=0, onRate=()=>"success"}) => (
            <div onClick={() => onRate(5)}>{starsSelected}</div>
        ),
        MockTimeAgo = ({timestamp}) => (
            <div className="timestamp">{timestamp}</div>
        ),
        MockFaTrash = () => <div></div>

    before(() => {
        Color.__Rewire__("StarRating", MockStarRating)
        Color.__Rewire__("TimeAgo", MockTimeAgo)
        Color.__Rewire__("FaTrash", MockFaTrash)
    })

    describe("Rendering UI", () => {

        let wrapper

        before(() => wrapper = mount(
            <Color title="test color"
                   color="#F0F0F0"
                   rating={3}
                   timestamp="success - timestamp"/>
        ))

        it("renders a section.color element", () =>
            expect(wrapper.find('section.color')).to.have.length(1))

        it("renders the correct title", () =>
            expect(wrapper.find('h1').text())
                .to.equal('test color'))

        it("renders a trash button", () =>
            expect(wrapper.find('button'))
                .to.have.length(1))

        it("renders the trash icon", () =>
            expect(wrapper.find(MockFaTrash))
                .to.have.length(1))

        it("renders the correct color", () =>
            expect(
                wrapper.find('div.color')
                    .props()
                    .style
                    .backgroundColor)
                .to.equal('#F0F0F0'))

        it("renders the correct timestamp", () =>
            expect(wrapper.find('div.timestamp').text())
                .to.equal("success - timestamp"))

        it("renders the correct rating", () =>
            expect(
                wrapper.find(MockStarRating)
                    .props()
                    .starsSelected)
                .to.equal(3))

        it("invoking onRemove does not throw error", () =>
            wrapper.find('button')
                .simulate('click'))

        it("invoking onRate does not throw error", () =>
            wrapper.find(MockStarRating)
                .simulate('click'))

    })

    describe("Rating the color", () => {

        let _rate = spy()

        before(() =>
            mount(
                <Color title="test color"
                       color="#F0F0F0"
                       onRate={_rate}/>)
                .find(MockStarRating)
                .simulate('click'))

        it("invokes the onRate callback", () =>
            expect(_rate.calledOnce)
                .to.equal(true))

        it("passes the correct rating", () =>
            expect(_rate.calledWith(5))
                .to.equal(true))

    })

    describe("Removing the color", () => {

        let _remove = spy();

        before(() => mount(
            <Color title="test color"
                   color="#F0F0F0"
                   onRemove={_remove}/>)
            .find('button')
            .simulate('click'))

        it("invokes the onRemove callback", () =>
            expect(_remove.calledOnce)
                .to.equal(true))

    })

})
