import { mount } from 'enzyme'
import StarRating from '../../../src/components/ui/StarRating'

describe("<StarRating /> UI Component", () => {

    let wrapper

    describe("Rendering the UI", () => {

        beforeAll(() => wrapper = mount(<StarRating starsSelected={4} totalStars={7}/>))

        it("renders a div with the class .star-rating", () =>
            expect(wrapper.find("div.star-rating").length)
                .toEqual(1))

        it("renders the correct number of selected stars", () =>
            expect(wrapper.find(".selected").length)
                .toEqual(4))

        it("selects the correct number of stars", () =>
            expect(wrapper.find('div.star').length)
                .toEqual(7))

        it("has only one paragraph node", () =>
            expect(wrapper.find("p").length)
                .toEqual(1))

        it("displays {rating} of {total} stars", () =>
            expect(wrapper.find("p").text())
                .toEqual("4 of 7 stars"))

        it("rating does cause error", () => {
            wrapper.childAt(3).simulate("click")
        })

    })

    describe("Changing the Rating", () => {

        let _rate = jest.fn()

        afterEach(() => _rate.mockReset())
        beforeAll(() => wrapper = mount(<StarRating onRate={_rate}/>))

        it("Invokes onRate Function", () => {
            wrapper.childAt(3).simulate("click")
            expect(_rate.mock.calls.length).toEqual(1)
        })

        it("passes the correct rating", () => {
            wrapper.childAt(1).simulate("click")
            expect(_rate.mock.calls[0][0]).toEqual(2)
        })

    })

})
