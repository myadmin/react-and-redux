import React from 'react';
import ReactDOM from 'react-dom';
//import ClickCount from './chapter_1/ClickCount';
//import ControlPanel from './chapter_2/ControlPanel'
//import ControlPanel from './chapter_3/views/ControlPanel'
//import ControlPanel from './chapter_3_2/views/ControlPanel'
import ControlPanel from './chapter_3_3/views/ControlPanel'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
