import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import PlayersList from './PlayersList';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  //  ReactDOM.unmountComponentAtNode(div);
})



test('should mount correctly', () => {
  const div = document.createElement('div')
  expect(render( <PlayersList/>,div)).toMatchSnapshot()
  })
  
 


// it('should run an axios call', done => {
//   PlayersList.AxiosCall('/test', {}).then(response => {
//     expect(response).toEqual({
//       data: {},
//     });
//   });
//   expect(mockAxios.request).toHaveBeenCalledWith({
//     method: 'get',
//     url: '/test'
//   });
//   expect(mockAxios.request).toHaveBeenCalledTimes(1);
//   expect(consoleError).not.toHaveBeenCalled();
//   done();
// });

