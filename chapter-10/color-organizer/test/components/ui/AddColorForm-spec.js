import { expect } from 'chai'
import { mount } from 'enzyme'
import AddColorForm from '../../../src/components/ui/AddColorForm'
import { spy } from 'sinon'
import { findDOMNode } from 'react-dom'

describe("<AddColorForm /> UI Component", () => {

    let wrapper

    describe("Rendering the UI", () => {

        before(() => wrapper = mount(<AddColorForm />))

        it("renders an input for the color title", () =>
            expect(wrapper.ref('_title'))
                .to.have.length(1))

        it("renders a color input for the color hex", () =>
            expect(wrapper.ref('_color')
                .props()
                .type)
                .to.equal('color'))

        it("renders an add button", () =>
            expect(wrapper.find('button')
                .text())
                .to.equal("ADD"))

        it("adding a color does not cause an error", () => {
            wrapper.ref('_title').get(0).value = 'test-color'
            wrapper.ref('_color').get(0).value = '#000099'
            wrapper.find('form').simulate('submit')
        })

    })

    describe("Adding New Colors", () => {

        let _addColor = spy()

        before(() => {
            wrapper = mount(<AddColorForm onNewColor={_addColor}/>)
            wrapper.ref('_title').get(0).value = 'test-color'
            wrapper.ref('_color').get(0).value = '#000099'
            wrapper.find('form').simulate('submit')
        })

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