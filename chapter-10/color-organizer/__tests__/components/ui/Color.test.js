import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { compose } from 'redux'
import Color from '../../../src/components/ui/Color'

describe("<Color /> UI Component", () => {

  it("Renders correct properties", () =>
    compose(expect,toJSON,shallow)(
      <Color title="Test Color" color="#F0F0F0" rating={3} />
    ).toMatchSnapshot()
  )

  it("Invokes onRate property", () => {
    mount(<Color title="Test Color" color="#F0F0F0" />)
      .find("div.star-rating")
      .childAt(2)
      .simulate('click')
  })

  it("Invokes onRate property", () => {
    mount(<Color title="Test Color" color="#F0F0F0" />)
      .find("button")
      .simulate('click')
  })

})
