import { expect } from 'chai'
import { mount } from 'enzyme'
import StarRating from '../../../src/components/ui/StarRating'
import { spy } from 'sinon'

describe("<StarRating /> UI Component", () => {

    let wrapper, MockStar

    before(() => {
        MockStar = ({ selected=false, onClick=f=>f }) => (
            <div className={(selected) ? "selectedStar" : "star"} onClick={onClick}></div>
        )
        StarRating.__Rewire__('Star', MockStar)

    })

    describe("Rendering the UI", () => {

        before(() => wrapper = mount(<StarRating starsSelected={4} totalStars={7}/>))

        it("renders a div with the class .star-rating", () =>
            expect(wrapper.find("div.star-rating"))
                .to.have.length(1))

        it("renders the correct number of selected stars", () =>
            expect(wrapper.find(".selectedStar"))
                .to.have.length(4))

        it("selects the correct number of stars", () =>
            expect(wrapper.find(MockStar))
                .to.have.length(7))

        it("has only one paragraph node", () =>
            expect(wrapper.find("p"))
                .to.have.length(1))

        it("displays {rating} of {total} stars", () =>
            expect(wrapper.find("p").text())
                .to.equal("4 of 7 stars"))

        it("rating does cause error", () =>
            wrapper.childAt(3)
                .simulate("click"))

    })

    describe("Changing the Rating", () => {

        let _rate = spy()
        afterEach(() => _rate.reset())

        before(() =>
            wrapper = mount(<StarRating onRate={_rate}/>))

        it("Invokes onRate Function", () => {
            wrapper.childAt(3).simulate("click")
            expect(_rate.calledOnce).to.equal(true)
        })

        it("passes the correct rating", () => {
            wrapper.childAt(1).simulate("click")
            expect(_rate.calledWith(2)).to.equal(true)
        })

    })

})