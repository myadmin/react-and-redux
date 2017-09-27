import React from 'react';
import ReactDOM from 'react-dom';
import ClickCount from './chapter_1/ClickCount';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ClickCount />
    document.getElementById('root')
);
registerServiceWorker();
