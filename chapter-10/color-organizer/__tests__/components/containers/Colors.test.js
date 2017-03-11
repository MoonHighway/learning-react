import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import { Colors } from '../../../src/components/containers'

jest.mock('../../../src/components/ui/ColorList')

describe("<Colors /> Container ", () => {

    let wrapper
    const _store = {
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        getState: jest.fn(() =>
            ({
                sort: "SORTED_BY_DATE",
                colors: [
                    {
                        "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
                        "title": "Ocean Blue",
                        "color": "#0070ff",
                        "rating": 3,
                        "timestamp": "Mon Mar 07 2016 16:12:09 GMT-0800 (PST)"
                    },
                    {
                        "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
                        "title": "Tomato",
                        "color": "#d10012",
                        "rating": 2,
                        "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
                    }
                ]
            })
        )
    }

    beforeAll(() => wrapper = mount(
      <Provider store={_store}>
          <Colors />
      </Provider>
    ))

    it("renders two colors", () => {
      expect(wrapper
        .find('ColorListMock')
        .props()
        .colors
        .length
      ).toBe(2)
    })

    it("sorts the colors by state", () => {
      expect(wrapper
        .find('ColorListMock')
        .props()
        .colors[0]
        .title
      ).toBe("Tomato")
    })

    afterEach(() => jest.resetAllMocks())

    it("dispatches a REMOVE_COLOR action", () => {
        wrapper.find('ColorListMock')
          .props()
          .onRemove('f9005b4e-975e-433d-a646-79df172e1dbb')

        expect(_store.dispatch.mock.calls[0][0])
            .toEqual({
              id: 'f9005b4e-975e-433d-a646-79df172e1dbb',
              type: 'REMOVE_COLOR'
            })
    })

    it("dispatches a RATE_COLOR action", () => {
      wrapper.find('ColorListMock')
        .props()
        .onRate('8658c1d0-9eda-4a90-95e1-8001e8eb6036', 5)
        expect(_store.dispatch.mock.calls[0][0])
            .toEqual({
              id: "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
              type: "RATE_COLOR",
              rating: 5
            })
    })

})
