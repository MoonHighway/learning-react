import { expect } from 'chai'
import { shallow } from 'enzyme'
import Star from '../../../src/components/ui/Star'
import { spy } from 'sinon'

describe("<Star /> UI Component", () => {

    it("renders default star", () =>
        expect(shallow(<Star />).find('div.star'))
            .to.have.length(1))

    it("renders selected stars", () =>
        expect(shallow(<Star selected={true} />).find('div.selected.star'))
            .to.have.length(1))

    it("click does not cause error", () =>
        shallow(<Star selected={true} />).find('div')
            .simulate('click'))

    describe("clicking a star", () => {

        let _click = spy()
        afterEach(() => _click.reset())

        before(() => shallow(<Star onClick={_click} />)
                .find('.star')
                .simulate('click')
        )

        it("invokes onClick", () =>
            expect(_click.calledOnce)
                .to.equal(true))

    })

})
