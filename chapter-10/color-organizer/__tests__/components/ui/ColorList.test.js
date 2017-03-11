import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { compose } from 'redux'
import ColorList from '../../../src/components/ui/ColorList'

jest.mock('../../../src/components/ui/Color', () =>
  ({color, rating, onRate=f=>f, onRemove=f=>f}) =>
    <div className="mockColor">
      <button id="rate" onClick={() => onRate(rating)} />
      <button id="remove" onClick={onRemove} />
    </div>
)

describe("<ColorList /> UI Componnet", () => {

  const _testColors = [
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

  afterAll(() => jest.resetAllMocks())

  describe("Rendering UI", () => {

    it("Renders Correctly", () =>
      compose(expect,toJSON,shallow)(
        <ColorList colors={_testColors} />
      ).toMatchSnapshot()
    )

    it("Defaults Properties correctly", () =>
      expect(shallow(<ColorList />).find('p').text())
        .toBe('No Colors Listed. (Add a Color)')
    )

    it("Clicking default rate button do not cause Error", () => {
      mount(<ColorList colors={_testColors} />)
        .find('button#rate')
        .first()
        .simulate('click')
    })

    it("Clicking default remove button do not cause Error", () => {
      mount(<ColorList colors={_testColors} />)
        .find('button#remove')
        .first()
        .simulate('click')
    })

  })

  describe("Rating a Color", () => {

    let _rate = jest.fn()

    beforeAll(() =>
      mount(<ColorList colors={_testColors} onRate={_rate} />)
        .find('button#rate')
        .first()
        .simulate('click')
    )

    it("invokes onRate Handler", () =>
      expect(_rate).toBeCalled()
    )

    it("rates the correct color", () =>
      expect(_rate).toBeCalledWith(1,4)
    )

  })

  describe("Removing a Color", () => {

    let _remove = jest.fn()

    beforeAll(() =>
      mount(<ColorList colors={_testColors} onRemove={_remove} />)
        .find('button#remove')
        .last()
        .simulate('click')
    )

    it("invokes onRemove Handler", () =>
      expect(_remove).toBeCalled()
    )

    it("removes the correct color", () =>
      expect(_remove).toBeCalledWith(3)
    )

  })

})
