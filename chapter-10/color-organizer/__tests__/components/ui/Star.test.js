import Star from '../../../src/components/ui/Star'

const { shallow } = Enzyme

describe("<Star /> UI Component", () => {

    it("renders default star", () =>
        expect(shallow(<Star />).find('div.star').length)
            .toBe(1))

    it("renders selected stars", () =>
        expect(shallow(<Star selected={true} />).find('div.selected.star').length)
            .toBe(1))

    it("click does not cause error", () => {
        shallow(<Star selected={true} />).find('div').simulate('click')
    })

    it("invokes onClick", () => {
        const _click = jest.fn()
        shallow(<Star onClick={_click} />)
            .find('div.star')
            .simulate('click')
        expect(_click).toBeCalled()
    })

})
