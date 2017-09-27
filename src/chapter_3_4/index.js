import React from 'react';
import ReactDOM from 'react-dom';
import store from './chapter_3_4/Store';
import ControlPanel from './chapter_3_4/views/ControlPanel';
import Provider from './chapter_3_4/Provider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
