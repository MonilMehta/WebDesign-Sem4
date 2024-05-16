import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <h1>React Tooltip Example</h1>
      <Tooltip text="This is a tooltip! Hover over me.">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
};

export default App;
