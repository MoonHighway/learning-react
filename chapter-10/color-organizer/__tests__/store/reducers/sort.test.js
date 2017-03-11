import C from '../../../src/constants'
import { sort } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

describe("sort Reducer", () => {

    it("SORT_COLORS success", () => {
        const state = {};
        const action = {
            type: C.SORT_COLORS,
            sortBy: "SORTED_BY_RATING"
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(sort(state, action)).toEqual("SORTED_BY_RATING")
    })

    it("defaults to SORTED_BY_DATE", () =>
        expect(sort()).toEqual("SORTED_BY_DATE"))

})
