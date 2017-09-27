import React from 'react';
import ReactDOM from 'react-dom';
//import ClickCount from './chapter_1/ClickCount';
//import ControlPanel from './chapter_2/ControlPanel'
//import ControlPanel from './chapter_3/views/ControlPanel'
//import ControlPanel from './chapter_3_2/views/ControlPanel'
//import ControlPanel from './chapter_3_3/views/ControlPanel'
//import store from './chapter_3_4/Store';
//import ControlPanel from './chapter_3_4/views/ControlPanel';
//import Provider from './chapter_3_4/Provider';
import { Provider } from 'react-redux';
import store from './chapter_3_5/Store';
import ControlPanel from './chapter_3_5/views/ControlPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
