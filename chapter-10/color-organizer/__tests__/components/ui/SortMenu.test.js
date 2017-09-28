import toJSON from 'enzyme-to-json'
import { compose } from 'redux'
import SortMenu from '../../../src/components/ui/SortMenu'

const { shallow, mount } = Enzyme

describe("<Color /> UI Component", () => {

    let wrapper

    it("Renders Correctly", () =>
        compose(expect,toJSON,shallow)(
            <SortMenu sort="SORTED_BY_TITLE" />
        ).toMatchSnapshot()
    )

    it("click does not cause error", () => {
        mount(<SortMenu sort="SORTED_BY_TITLE" />)
            .children()
            .childAt(2)
            .simulate('click')
    })

    it("onSelect returns correct option", () => {
        const _select = jest.fn()
        const wrapper = mount(<SortMenu onSelect={_select} />)
        wrapper.children().childAt(3).simulate('click')
        expect(_select.mock.calls[0][0]).toBe("SORTED_BY_RATING")
    })

})
