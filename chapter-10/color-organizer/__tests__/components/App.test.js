import App from '../../src/components/App'

jest.mock("../../src/components/containers")

describe("<App /> Root Component", () => {

    it("renders correctly", () =>
        expect(App().props.children.length).toBe(3)
    )

})
