import React from 'react'
import { shallow } from 'enzyme'
import Chance from 'chance'
import {Radio} from '../../../../src/components/helper/radio'

const chance = Chance()

describe('Radio', () => {
    const getRequireProps = (override) => ({
        // id: chance.hash(),
        label: chance.string(),
        name: chance.string(),
        onChange: jest.fn(),
        state: chance.string(),
        value: chance.string(),
        ...override
    })

    const render = (props = getRequireProps()) => shallow(<Radio {...props}/>)

    test('should show component', () => {
        const wrapper = render()

        expect(wrapper.type()).toStrictEqual('div')
    })
})