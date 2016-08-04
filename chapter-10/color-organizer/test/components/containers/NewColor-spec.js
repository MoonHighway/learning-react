import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { NewColor } from '../../../src/components/containers'
import { spy, stub, assert } from 'sinon'

describe("<Menu /> Container", () => {

    let wrapper

    const mockStore = {
        dispatch: spy(),
        subscribe: spy(),
        getState: stub().returns({})
    }

    const mockActionCreators = {
        addColor: stub().returns({
            "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
            "title": "test color",
            "color": "#0000FF",
            "rating": 0,
            "timestamp": "Fri Mar 13 2015 12:00:00 GMT-0800 (PST)"
        }),
        sortColors: spy(),
        rateColor: spy(),
        removeColor: spy()
    }

    afterEach(() => _addColor.reset())


    before(() => {

        var c = NewColor
        var r = NewColor.__Rewire__



        NewColor.__Rewire__("actionCreators", mockActionCreators)
        wrapper = mount(
            <Provider store={mockStore}>
                <NewColor />
            </Provider>
        )
    })


    it("maps onNewColor to dispatch", () => {

        wrapper.find('input[type="text"]').simulate('change', {target: {value: 'test-title'}})
        wrapper.find('input[type="color"]').simulate('change', {target: {value: '#0000FF'}})
        wrapper.find('form').simulate('submit')

        assert.called(_addColor)

    })

})
