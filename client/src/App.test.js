import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import PlayersList from './PlayersList';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  //  ReactDOM.unmountComponentAtNode(div);
})

// test('Cards are processed', () => {
//   const { getByText } =  render(App);
//   expect(<Players/>).toBeDefined()
 
// });

test('should render correctly', async () => {
  expect(render(
    <App/>
  )).toMatchSnapshot() 
  })

  test('Cards are processed', () => {
    const { getByText } =  render(<App/>);
    expect(<PlayersList/>).toBeDefined()
   
  });

  test('should mount correctly', () => {
    const div = document.createElement('div')
    expect(ReactDOM.render( <App/>,div)).toMatchSnapshot()
    })