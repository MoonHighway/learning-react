import { expect } from 'chai'
import { mount } from 'enzyme'
import ColorList from '../../../src/components/ui/ColorList'
import { spy } from 'sinon'

describe("<ColorList /> UI Component", () => {

    let MockColor = ({ id, rating, onRate, onRemove }) => (
            <div>
                <span onClick={() => onRate(rating)}>rate</span>
                <button onClick={() => onRemove()}>remove</button>
            </div>
        ),
        colors = [
            {
                id: 1,
                title: "lawn",
                color: "#44ef37",
                timestamp: "Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)",
                rating: 4
            },
            {
                id: 2,
                title: "ocean blue",
                color: "#0061ff",
                timestamp: "Mon Apr 11 2016 12:54:31 GMT-0700 (PDT)",
                rating: 2
            },
            {
                id: 3,
                title: "tomato",
                color: "#ff4b47",
                timestamp: "Mon Apr 11 2016 12:54:43 GMT-0700 (PDT)",
                rating: 0
            }
        ]

    before(() => ColorList.__Rewire__('Color', MockColor))

    describe("Rendering UI", () => {

        it("renders a div.color-list element", () =>
            expect(mount(<ColorList colors={colors}/>)
                .find('div.color-list'))
                .to.have.length(1))

        it("renders 3 colors", () =>
            expect(mount(<ColorList colors={colors}/>)
                .find(MockColor))
                .to.have.length(3))

        it("rating color does not cause error", () =>
            mount(<ColorList colors={colors}/>)
                .find("span")
                .last()
                .simulate('click'))

        it("removing color does not cause error", () =>
            mount(<ColorList colors={colors}/>)
                .find("button")
                .last()
                .simulate('click'));

        it("displays empty color mesage", () =>
            expect(mount(<ColorList />)
                .find('p')
                .text())
                .to.equal("No Colors Listed. (Add a Color)"))

    })

    describe("Rating a color", () => {

        let _rate = spy()

        before(() =>
            mount(<ColorList colors={colors} onRate={_rate}/>)
                .find("span")
                .last()
                .simulate('click'))

        it("invokes onRate handler", () =>
            expect(_rate.calledOnce)
                .to.equal(true))

        it("passes the correct id and rating", () =>
            expect(_rate.calledWith(3, 0))
                .to.equal(true))

    })

    describe("Removing a color", () => {

        let _remove = spy()

        before(() =>
            mount(<ColorList colors={colors} onRemove={_remove}/>)
                .find("button")
                .last()
                .simulate('click'))

        it("invokes onRate handler", () =>
            expect(_remove.calledOnce)
                .to.equal(true))

        it("passes the correct id and rating", () =>
            expect(_remove.calledWith(3))
                .to.equal(true))

    })

})
