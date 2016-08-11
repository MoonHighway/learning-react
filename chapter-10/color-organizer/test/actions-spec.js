import C from '../src/constants'
import storeFactory from '../src/store'
import { sortColors, addColor, rateColor, removeColor } from '../src/actions'
import { expect } from 'chai'
import { spy } from 'sinon'

describe("Action Creators", () => {

    let store
    const _console = {
        groupCollapsed: spy(),
        log: spy(),
        groupEnd: spy()
    }

    afterEach(() => {
        _console.log.reset()
        _console.groupCollapsed.reset()
        _console.groupEnd.reset()
    })

    before(() =>  storeFactory.__Rewire__("console", _console))

    describe("addColor", () => {

        const colors = [
            {
                id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
                title: "Rad Red",
                color: "#FF0000",
                rating: 3,
                timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
            },
            {
                id: '8658c1d0-9eda-4a90-95e1-8001e8eb6037',
                title: "Crazy Green",
                color: "#00FF00",
                rating: 0,
                timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
            },
            {
                id: '8658c1d0-9eda-4a90-95e1-8001e8eb6038',
                title: "Big BLue",
                color: "#0000FF",
                rating: 5,
                timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
            }
        ]

        before(() => {
            store = storeFactory({colors})
            store.dispatch(addColor("Dark Blue", "#000033"))
        })

        after(() => global.localStorage['redux-store'] = false)

        it("should add a new color", () =>
            expect(store.getState().colors.length).to.equal(4))

        it("should add a unique guid id", () =>
            expect(store.getState().colors[3].id.length).to.equal(36))

        it("should set the rating to 0", () =>
            expect(store.getState().colors[3].rating).to.equal(0))

        it("should set timestamp", () =>
            expect(store.getState().colors[3].timestamp).to.be.ok)

    })

    describe("rateColor", () => {

        let colors = [
            {
                id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
                title: "Rad Red",
                color: "#FF0000",
                rating: 3,
                timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
            }
        ]

        before(() => {
            store = storeFactory({colors})
            store.dispatch(rateColor('8658c1d0-9eda-4a90-95e1-8001e8eb6036', 5))
        })

        it("should rate the color", () => expect(store.getState().colors[0].rating).to.equal(5))

    })

    describe("removeColor", () => {

        const colors = [
            {
                id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
                title: "Rad Red",
                color: "#FF0000",
                rating: 3,
                timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
            }
        ]

        before(() => {
            store = storeFactory({colors})
            store.dispatch(removeColor('8658c1d0-9eda-4a90-95e1-8001e8eb6036'))
        })

        after(() => global.localStorage['redux-store'] = false)

        it("should remove the color", () =>
            expect(store.getState().colors.length).to.equal(0))

    })

    describe("sortColors", () => {

        before(() => store = storeFactory())

        it("can dispatch sort colors", () => {
            store.dispatch(sortColors("SORTED_BY_RATING"))
            expect(store.getState().sort).to.equal("SORTED_BY_RATING")
        })

        it("can sort by title", () => {
            store.dispatch(sortColors("SORTED_BY_TITLE"))
            expect(store.getState().sort).to.equal("SORTED_BY_TITLE")
        })

        it("(default) sorts colors by date", () => {
            store.dispatch(sortColors())
            expect(store.getState().sort).to.equal("SORTED_BY_DATE")
        })

    })

})