import toJSON from 'enzyme-to-json'
import { compose } from 'redux'
import AddColorForm from '../../../src/components/ui/AddColorForm'

const { shallow, mount } = Enzyme

describe("<AddColorForm /> UI Componnet", () => {

    let wrapper

    describe("Rendering the UI", () => {

        it("renders correctly", () => {
            compose(expect,toJSON,shallow)(<AddColorForm />)
                .toMatchSnapshot()
        })

        it("Submitting default onNewColor does not cause error", () => {
            wrapper = mount(<AddColorForm />)
            wrapper.ref('_title').value = 'test-color'
            wrapper.ref('_color').value = '#0000FF'
            wrapper.find('form').simulate('submit')
        })

    })

    describe("Adding New Colors", () => {

        const _addColor = jest.fn()

        beforeAll(() => {
            wrapper = mount(<AddColorForm onNewColor={_addColor}/>)
            wrapper.ref('_title').value = 'test-color'
            wrapper.ref('_color').value = '#000099'
            wrapper.find('form').simulate('submit')
        })

        it("adds colors correctly", () => 
            expect(_addColor).toBeCalledWith('test-color', '#000099')
        )

        it("resets the title value", () =>
            expect(wrapper.ref('_title').value).toBe("")
        )

        it("resets the color value", () =>
            expect(wrapper.ref('_color').value).toBe("#000000")
        )

    })

})
