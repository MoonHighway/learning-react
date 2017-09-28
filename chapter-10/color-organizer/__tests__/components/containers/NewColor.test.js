import { Provider } from 'react-redux'
import { NewColor } from '../../../src/components/containers'
import { addColor } from '../../../src/actions'

const { shallow, mount } = Enzyme

jest.mock('../../../src/components/ui/AddColorForm')
jest.mock('../../../src/actions')

describe("<NewColor /> Container ", () => {

    let wrapper, result
    const _store = {
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        getState: jest.fn(() => ({}))
    }

    it("dispatch invokes addColor action", () => {
        wrapper = mount(
            <Provider store={_store}>
                <NewColor />
            </Provider>
        )
        wrapper.find("AddColorFormMock").props().onNewColor("test color", "#FF0000")
        expect(addColor.mock.calls[0]).toEqual(["test color", "#FF0000"])
    })

})
