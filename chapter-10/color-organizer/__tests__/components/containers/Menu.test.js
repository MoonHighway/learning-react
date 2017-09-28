import { Provider } from 'react-redux'
import { compose } from 'redux'
import { Menu } from '../../../src/components/containers'

const { shallow, mount } = Enzyme

jest.mock('../../../src/components/ui/SortMenu')

describe("<Menu /> Container ", () => {

    let wrapper
    const _store = {
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        getState: jest.fn(() =>
            ({
                sort: "SORTED_BY_RATING"
            })
        )
    }

    beforeAll(() => wrapper = mount(
        <Provider store={_store}>
            <Menu />
        </Provider>
    ))

    it("maps sort from state to props", () => {
        expect(wrapper.find('SortMenuMock').props().sort).toBe('SORTED_BY_RATING')
    })

    it("maps onSelect to dispatch", () => {
        wrapper.find('SortMenuMock').props().onSelect("SORTED_BY_TITLE")
        expect(_store.dispatch.mock.calls[0][0])
            .toEqual({
                "sortBy": "SORTED_BY_TITLE",
                "type": "SORT_COLORS"
            })
    })

})
