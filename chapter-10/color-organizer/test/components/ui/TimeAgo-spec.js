import { expect } from 'chai'
import TimeAgo from '../../../src/components/ui/TimeAgo'
import { stub } from 'sinon'
import { shallow } from 'enzyme'

describe("<TimeAgo /> UI Component", () => {

    let wrapper,
        _ago = stub().returns('success'),
        time

    before(() => {
        time = new Date().toString()
        TimeAgo.__Rewire__('ago', _ago)
        wrapper = shallow(<TimeAgo timestamp={time}/>)
    })

    it("renders a div.time-ago element", () =>
        expect(wrapper.find("div.time-ago")).to.have.length(1))

    it("invokes ago with the timestamp", () =>
        expect(_ago.calledWith(time)).to.equal(true))

    it("writes the results of ago", () =>
        expect(wrapper.text()).to.equal("success"))

})
