import { expect } from 'chai'
import { shallow } from 'enzyme'
import SortMenu from '../../../src/components/ui/SortMenu'
import { spy } from 'sinon'

describe("<SortMenu /> UI Component", () => {

    describe("Rendering UI", () => {

        it("renders a nav element", () =>
            expect(shallow(<SortMenu />)
                .find("nav"))
                .to.have.length(1))

        it("renders 3 links", () =>
            expect(shallow(<SortMenu />)
                .find("a"))
                .to.have.length(3))

        it("sorted by date is selected", () =>
            expect(shallow(<SortMenu />)
                .find('a.selected').text())
                .to.equal('date'))

        it("selecting a menu item does not cause error", () =>
            shallow(<SortMenu />)
                .find('a')
                .first()
                .simulate('click', {preventDefault: f=>f}))

    })

    describe("selecting a different sort", () => {

        let _select = spy()
        afterEach(() => _select.reset())

        it("invokes onSelect with the correct title", () => {
            shallow(
                <SortMenu sort="SORTED_BY_DATE" onSelect={_select}/>
            ).find("nav")
                .childAt(2)
                .simulate('click', {preventDefault: f=>f})

            expect(_select.args.join()).to.equal("SORTED_BY_TITLE")
        })

        it("invokes onSelect with the correct date", () => {
            shallow(
                <SortMenu sort="SORTED_BY_RATING" onSelect={_select}/>
            ).find("nav")
                .childAt(1)
                .simulate('click', {preventDefault: f=>f})

            expect(_select.args.join()).to.equal("SORTED_BY_DATE")
        })

        it("invokes onSelect with the correct rating", () => {
            shallow(
                <SortMenu sort="SORTED_BY_TITLE" onSelect={_select}/>
            ).find("nav")
                .childAt(3)
                .simulate('click', {preventDefault: f=>f})

            expect(_select.args.join()).to.equal("SORTED_BY_RATING")
        })

    })

})
