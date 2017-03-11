import { sortFunction } from '../../src/lib/array-helpers'

describe("Array Helpers", () => {

    describe("sortBy", () => {

        const data = [
            {
                title: "Virginia",
                rating: 2,
                timestamp: 'Mon Mar 14 2016 11:38:16 GMT-0700 (PDT)'
            },
            {
                title: "Illinois",
                rating: 5,
                timestamp: 'Mon Mar 14 2016 09:20:00 GMT-0700 (PDT)'
            },
            {
                title: "California",
                rating: 0,
                timestamp: 'Sun Mar 13 2016 12:00:00 GMT-0700 (PDT)'
            },
            {
                title: "Maryland",
                rating: 1,
                timestamp: 'Mon Mar 14 2016 11:38:17 GMT-0700 (PDT)'
            }
        ]

        it("sorts by title", () => {
            const sorted = [...data].sort(sortFunction('SORTED_BY_TITLE'))
            expect(sorted).toEqual([
                {
                    title: "California",
                    rating: 0,
                    timestamp: 'Sun Mar 13 2016 12:00:00 GMT-0700 (PDT)'
                },
                {
                    title: "Illinois",
                    rating: 5,
                    timestamp: 'Mon Mar 14 2016 09:20:00 GMT-0700 (PDT)'
                },
                {
                    title: "Maryland",
                    rating: 1,
                    timestamp: 'Mon Mar 14 2016 11:38:17 GMT-0700 (PDT)'
                },
                {
                    title: "Virginia",
                    rating: 2,
                    timestamp: 'Mon Mar 14 2016 11:38:16 GMT-0700 (PDT)'
                }
            ])
        })

        it("sorts by rating", () => {
            const sorted = [...data].sort(sortFunction('SORTED_BY_RATING'))
            expect(sorted).toEqual([
                {
                    title: "Illinois",
                    rating: 5,
                    timestamp: 'Mon Mar 14 2016 09:20:00 GMT-0700 (PDT)'
                },
                {
                    title: "Virginia",
                    rating: 2,
                    timestamp: 'Mon Mar 14 2016 11:38:16 GMT-0700 (PDT)'
                },
                {
                    title: "Maryland",
                    rating: 1,
                    timestamp: 'Mon Mar 14 2016 11:38:17 GMT-0700 (PDT)'
                },
                {
                    title: "California",
                    rating: 0,
                    timestamp: 'Sun Mar 13 2016 12:00:00 GMT-0700 (PDT)'
                }
            ])
        })

        it("sorts by date", () => {
            const sorted = [...data].sort(sortFunction('SORTED_BY_DATE'))
            expect(sorted).toEqual([
                {
                    title: "Maryland",
                    rating: 1,
                    timestamp: 'Mon Mar 14 2016 11:38:17 GMT-0700 (PDT)'
                },
                {
                    title: "Virginia",
                    rating: 2,
                    timestamp: 'Mon Mar 14 2016 11:38:16 GMT-0700 (PDT)'
                },
                {
                    title: "Illinois",
                    rating: 5,
                    timestamp: 'Mon Mar 14 2016 09:20:00 GMT-0700 (PDT)'
                },
                {
                    title: "California",
                    rating: 0,
                    timestamp: 'Sun Mar 13 2016 12:00:00 GMT-0700 (PDT)'
                }
            ])

        })

    })

})
