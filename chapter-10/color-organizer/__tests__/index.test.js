import { render } from 'react-dom'

jest.mock('react-dom')
jest.mock('../src/store/index', () => () => ({
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn()
}))

require('../src/index.js')

describe("App Entry Point - /src/index.js", () => {

    it("renders app", () => {
      expect()
    })

})
