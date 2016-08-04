import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { NewColor } from '../../../src/components/containers'
import { spy, stub, assert } from 'sinon'

describe("<Menu /> Container", () => {

    describe("Mapping dispatch to props", () => {

        let wrapper, dispatchedAction

        const mockStore = {
            dispatch: spy(),
            subscribe: spy(),
            getState: stub().returns({})
        }

        before(() => {
            wrapper = mount(
                <Provider store={mockStore}>
                    <NewColor />
                </Provider>
            )
            wrapper.find('input[type="text"]').get(0).value = 'test color'
            wrapper.find('input[type="color"]').get(0).value = '#0000FF'
            wrapper.find('form').simulate('submit')
            dispatchedAction = mockStore.dispatch.args[0][0]
        })

        it("dispatches a ADD_COLOR action", () =>
            expect(dispatchedAction.type).to.equal("ADD_COLOR"))

        it("has the correct color", () =>
            expect(dispatchedAction.color).to.equal("#0000FF"))

        it("has the correct title", () =>
            expect(dispatchedAction.title).to.equal("test color"))

        it("has a timestamp", () =>
            expect(new Date(dispatchedAction.timestamp).getDay()).to.equal(new Date().getDay()))

        it("has a unique id", () =>
            expect(dispatchedAction.id.length).to.equal(36))

    })

})
