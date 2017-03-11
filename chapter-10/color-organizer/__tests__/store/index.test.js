import C from '../../src/constants'
import storeFactory from '../../src/store'

describe("Store Factory", () => {

    beforeAll(() => {
        window.localStorage = {}
        console.groupCollapsed = jest.fn()
        console.log = jest.fn()
        console.groupEnd = jest.fn()
    })

    afterEach(() => jest.resetAllMocks())

    describe("Logging", () => {

        let store

        beforeEach(() => {
            store = storeFactory({
                colors: [
                    {
                        id: 0,
                        title: "Rad Red",
                        color: "#FF0000",
                        rating: 3,
                        timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
                    }
                ]
            })
            store.dispatch({type: C.REMOVE_COLOR, id: 0})
        })

        it("starts a console group", () =>
            expect(console.groupCollapsed.mock.calls.length).toBe(1)
        )

        it("logs state before action and state after", () =>
            expect(console.log.mock.calls.map(args=>args[0]))
                .toEqual([
                    "prev state",
                    "action",
                    "next state"
                ])
        )

        it("ends the console group", () =>
            expect(console.groupEnd.mock.calls.length).toBe(1)
        )

    })

    describe("Saving", () => {

        let store

        beforeEach(() => {
            global.localStorage['redux-store'] = false
            store = storeFactory({})
            store.dispatch({
                type: C.ADD_COLOR,
                id: 0,
                title: 'test color',
                color: '#000000',
                timestamp: 'none',
                rating: 0
            })
        })

        it("saves state to localStorage", () =>
            expect(JSON.parse(global.localStorage['redux-store']).colors.length).toEqual(1))

    })

    it("creates a store when default state is not supplied", () => {
        const store = storeFactory()
        expect(store.getState().colors).toBeInstanceOf(Array)
    })

})
