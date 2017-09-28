import toJSON from 'enzyme-to-json'
import { compose } from 'redux'
import ColorList from '../../../src/components/ui/ColorList'

const { shallow, mount } = Enzyme

jest.mock('../../../src/components/ui/Color', () =>
    ({rating, onRate=f=>f, onRemove=f=>f}) =>
        <div className="mockColor">
            <button className="rate" onClick={() => onRate(rating)} />
            <button className="remove" onClick={onRemove} />
        </div>
)

describe("<ColorList /> UI Component", () => {

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
                .find('button.rate')
                .first()
                .simulate('click')
        })

        it("Clicking default remove button do not cause Error", () => {
            mount(<ColorList colors={_testColors} />)
                .find('button.remove')
                .first()
                .simulate('click')
        })

    })

    describe("Rating a Color", () => {

        let _rate = jest.fn()

        beforeAll(() =>
            mount(<ColorList colors={_testColors} onRate={_rate} />)
                .find('button.rate')
                .first()
                .simulate('click')
        )

        it("invokes onRate Handler", () =>
            expect(_rate).toBeCalled()
        )

        it("rates the correct color", () =>
            expect(_rate).toBeCalledWith("8658c1d0-9eda-4a90-95e1-8001e8eb6036",4)
        )

    })

    describe("Removing a Color", () => {

        let _remove = jest.fn()

        beforeAll(() =>
            mount(<ColorList colors={_testColors} onRemove={_remove} />)
                .find('button.remove')
                .last()
                .simulate('click')
        )

        it("invokes onRemove Handler", () =>
            expect(_remove).toBeCalled()
        )

        it("removes the correct color", () =>
            expect(_remove).toBeCalledWith("58d9caee-6ea6-4d7b-9984-65b145031979")
        )

    })

})
