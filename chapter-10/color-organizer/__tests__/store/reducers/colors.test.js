import C from '../../../src/constants'
import { colors } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

describe("colors Reducer", () => {

    it("ADD_COLOR success", () => {
        const state = [
            {
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 3
            }
        ]
        const action = {
            type: C.ADD_COLOR,
            id: 1,
            title: 'Bright Whtie',
            color: '#FFFFFF',
            timestamp: new Date().toString()
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(colors(state, action))
            .toEqual([
                {
                    id: 0,
                    title: 'Test Teal',
                    color: '#90C3D4',
                    timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                    rating: 3
                },
                {
                    id: 1,
                    title: 'Bright Whtie',
                    color: '#FFFFFF',
                    timestamp: action.timestamp,
                    rating: 0
                }
            ])
    })

    it("RATE_COLOR success", () => {
        const state = [
            {
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 3
            },
            {
                id: 1,
                title: 'Bright Whtie',
                color: '#FFFFFF',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: undefined
            }
        ]
        const action = {
            type: C.RATE_COLOR,
            id: 1,
            rating: 5
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(colors(state, action))
            .toEqual([
                {
                    id: 0,
                    title: 'Test Teal',
                    color: '#90C3D4',
                    timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                    rating: 3
                },
                {
                    id: 1,
                    title: 'Bright Whtie',
                    color: '#FFFFFF',
                    timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                    rating: 5
                }
            ])
    })

    it("REMOVE_COLOR success", () => {
        const state = [
            {
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 3
            },
            {
                id: 1,
                title: 'Bright Whtie',
                color: '#FFFFFF',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 5
            }
        ]
        const action = {
            type: C.REMOVE_COLOR,
            id: 0
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(colors(state, action))
            .toEqual([
                {
                    id: 1,
                    title: 'Bright Whtie',
                    color: '#FFFFFF',
                    timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                    rating: 5
                }
            ])
    })

    it("Defaults array for incorrect action", () =>
        expect(colors()).toEqual([]))

})
