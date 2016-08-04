import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { Colors } from '../../../src/components/containers'
import { spy, stub, assert } from 'sinon'

describe("<Colors /> Container", () => {

    let wrapper, dispatchedAction

    const state = {
            colors: [
                {
                    "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
                    "title": "Ocean Blue",
                    "color": "#0070ff",
                    "rating": 3,
                    "timestamp": "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
                },
                {
                    "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
                    "title": "Tomato",
                    "color": "#d10012",
                    "rating": 2,
                    "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
                }
            ]
        },
        mockStore = {
            dispatch: spy(),
            getState: stub().returns(state),
            subscribe: spy()
        }

    afterEach(() =>
        ['dispatch', 'getState', 'subscribe']
            .forEach(spy =>
                mockStore[spy].reset()
            )
    )

    describe("Mapping State to Props", () => {

        before(() => wrapper = mount(
            <Provider store={mockStore}>
                <Colors />
            </Provider>
        ))

        it("invokes getState twice", () =>
            assert.calledTwice(mockStore.getState))

        it("maps correct colors to props", () =>
            expect(wrapper.find('section').length).to.equal(2))

    })

    describe("Mapping Dispatch to Props", () => {

        describe("removing colors", () => {

            before(() => {
                wrapper = mount(
                    <Provider store={mockStore}>
                        <Colors />
                    </Provider>
                )
                wrapper.find('button').first().simulate('click')
                dispatchedAction = mockStore.dispatch.args[0][0]
            })

            it("dispatches a REMOVE_COLOR action", () =>
                expect(dispatchedAction.type)
                    .to.equal("REMOVE_COLOR"))

            it("removes the correct color", () =>
                expect(dispatchedAction.id)
                    .to.equal("8658c1d0-9eda-4a90-95e1-8001e8eb6036"))

        })

        describe("rating colors", () => {

            before(() => {
                wrapper = mount(
                    <Provider store={mockStore}>
                        <Colors />
                    </Provider>
                )
                wrapper.find('div.star').first().simulate('click')
                dispatchedAction = mockStore.dispatch.args[0][0]
            })

            it("dispatches a RATE_COLOR action", () =>
                expect(dispatchedAction.type)
                    .to.equal("RATE_COLOR"))

            it("rates the correct color", () =>
                expect(dispatchedAction.id)
                    .to.equal("8658c1d0-9eda-4a90-95e1-8001e8eb6036"))

            it("has the correct rating", () =>
                expect(dispatchedAction.rating)
                    .to.equal(1))

        })

    })

})