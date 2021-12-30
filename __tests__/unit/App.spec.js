// /**
//  * @jest-environment jsdom
//  */
// import { render, screen } from '@testing-library/react';
// import App from '../../src/App'
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/App'

describe('App', () => {
  const getRequireProps = (override) => ({
    ...override
  })

  const render = (props = getRequireProps()) => shallow(<App {...props}/>)

  test('should show component', () => {
    const wrapper = render()

    expect(wrapper.type()).toStrictEqual('div')
  })
})
