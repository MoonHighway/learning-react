import { expect } from 'chai'
import { mount } from 'enzyme'
import AddColorForm from '../../../src/components/ui/AddColorForm'
import { spy } from 'sinon'
import { findDOMNode } from 'react-dom'

describe("<AddColorForm /> UI Component", () => {

    describe("Rendering the UI", () => {

        it("renders an input for the color title", () =>
            expect(mount(<AddColorForm />)
                .ref('_title'))
                .to.have.length(1))

        it("renders a color input for the color hex", () =>
            expect(mount(<AddColorForm />)
                .ref('_color')
                .props()
                .type)
                .to.equal('color'))

        it("renders an add button", () =>
            expect(mount(<AddColorForm />)
                .find('button')
                .text())
                .to.equal("ADD"))

    })

    describe("Adding New Colors", () => {

        let wrapper,
            _addColor = spy()

        before(() => {
            wrapper = mount(<AddColorForm onNewColor={_addColor}/>)
            wrapper.ref('_title').get(0).value = 'test-color'
            wrapper.ref('_color').get(0).value = '#000099'
            wrapper.find('form').simulate('submit')
        });

        it("adds colors correctly", () =>
            expect(_addColor
                .calledWith('test-color', '#000099'))
                .to.equal(true))

        it("resets the title value", () =>
            expect(wrapper
                .ref('_title')
                .get(0)
                .value)
                .to.equal(""))

        it("resets the color value", () =>
            expect(wrapper
                .ref('_color')
                .get(0)
                .value)
                .to.equal("#000000"))

    })

})