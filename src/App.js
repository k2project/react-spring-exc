import React from 'react';
import './App.scss';

import Project1 from './projects/Project1/Project1';
import Project2 from './projects/Project2/Project2';
import Project3 from './projects/Project3/Project3';
import Project4 from './projects/Project4/Project4';
import Project5 from './projects/Project5/Project5';
import Project6 from './projects/Project6/Project6';
import Project7 from './projects/Project7/Project7';
import Project8 from './projects/Project8/Project8';


function App() {
  return (
      <div className="App">
          <h1>React-spring Examples</h1>
          <div className="Projects">
              <Project1/>
              <Project2/>
              {/* <Project3/> */}
              {/* <Project4/> */}
              <Project5/>
              <Project6/>
              <Project7/>
              <Project8/>
          </div>
      </div>
  );
}

export default App;
