import { expect } from 'chai'
import { shallow } from 'enzyme'
import APP from '../../src/components/APP'
import { spy } from 'sinon'

describe("<APP /> UI Component", () => {

    let wrapper,
        MockNewColor = () =>
            <div></div>,
        MockColors = () =>
            <div></div>,
        MockMenu = () =>
            <div></div>


    before(() => {
        APP.__Rewire__('NewColor', MockNewColor);
        APP.__Rewire__('Colors', MockColors);
        APP.__Rewire__('Menu', MockMenu);
    });

    describe("Rendering Containers", () => {

        it("renders <Menu />", () =>
            expect(shallow(<APP />)
                .find(MockMenu))
                .to.have.length(1))

        it("renders <AddColor />", () =>
            expect(shallow(<APP />)
                .find(MockNewColor))
                .to.have.length(1))

        it("renders <Colors />", () =>
            expect(shallow(<APP />)
                .find(MockColors))
                .to.have.length(1))

    })

})
