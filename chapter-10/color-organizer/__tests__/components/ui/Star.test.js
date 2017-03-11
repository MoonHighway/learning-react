import { shallow } from 'enzyme'
import Star from '../../../src/components/ui/Star'

describe("<Star /> UI Component", () => {

    it("renders default star", () =>
        expect(shallow(<Star />).find('div.star').length)
            .toEqual(1))

    it("renders selected stars", () =>
        expect(shallow(<Star selected={true} />).find('div.selected.star').length)
            .toEqual(1))

    it("click does not cause error", () => {
        shallow(<Star selected={true} />).find('div').simulate('click')
    })

    describe("clicking a star", () => {

        let _click = jest.fn()
        afterEach(() => jest.resetAllMocks())

        beforeAll(() => shallow(<Star onClick={_click} />)
                .find('.star')
                .simulate('click')
        )

        it("invokes onClick", () =>
            expect(_click.mock.calls.length)
                .toEqual(1))

    })

})
