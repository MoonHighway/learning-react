import C from '../../src/constants'
import { spy, assert } from 'sinon'
import { expect } from 'chai'
import storeFactory from '../../src/store'

describe("Store Factory", () => {

    let _console = {
        groupCollapsed: spy(),
        log: spy(),
        groupEnd: spy()
    }

    afterEach(() => {
        _console.log.reset()
        _console.groupCollapsed.reset()
        _console.groupEnd.reset()
    })

    before(() => storeFactory.__Rewire__("console", _console))

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
            assert.calledOnce(_console.groupCollapsed))

        it("logs three console items", () =>
            assert.calledThrice(_console.log))

        it("ends the console group", () =>
            assert.calledOnce(_console.groupEnd))

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
            expect(JSON.parse(global.localStorage['redux-store']).colors.length).to.equal(1))

    })

    it("creates a store when default state is not supplied", () => {
        const store = storeFactory()
        expect(store.getState().colors).to.be.instanceof(Array)
    })

})