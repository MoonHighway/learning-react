import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { Menu } from '../../../src/components/containers'
import { spy, stub, assert } from 'sinon'

describe("<Menu /> Container", () => {

    let wrapper;

    const state = {
            sort: "SORTED_BY_TITLE"
        },
        mockStore = {
            dispatch: spy(),
            getState: stub().returns(state),
            subscribe: spy()
        }


    before(() => wrapper = mount(
        <Provider store={mockStore}>
            <Menu />
        </Provider>
    ))

    it("maps sort property to props", () =>
        expect(wrapper.find('a.selected').text())
            .to.equal('title'))

    it("maps onSelect to dispatch", () => {
        wrapper.childAt(3).simulate('click')
        assert.calledWith(mockStore.dispatch, {
            "sortBy": "SORTED_BY_RATING",
            "type": "SORT_COLORS"
        })
    })

})
