import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import mockAxios from 'axios';
import PlayersList from './PlayersList';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  rtl.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should run an axios call', done => {
  PlayersList.AxiosCall('/test', {}).then(response => {
    expect(response).toEqual({
      data: {},
    });
  });
  expect(mockAxios.request).toHaveBeenCalledWith({
    method: 'get',
    url: '/test'
  });
  expect(mockAxios.request).toHaveBeenCalledTimes(1);
  expect(consoleError).not.toHaveBeenCalled();
  done();
});