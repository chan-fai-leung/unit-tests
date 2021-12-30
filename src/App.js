import './App.css';
import {Level1Component} from './components/level1Component'
import {Level2Component} from './components/level2Component'
import {Radio} from './components/helper/radio'
import React, {useState} from 'react'

function App() {
    const [selectedRadio, setSelectedRadio] = useState('level1component')

    const onChange = (event) => setSelectedRadio(event.target.value)

  return (
    <div className="App" onChange={onChange}>
        <Radio
            id='example2'
            label="Level1Component"
            name="example"
            value='level1component'
            onChange={onChange}
            state={selectedRadio}
        />
        <Radio
            id='example2'
            label="Level2Component"
            name="example"
            value='level2component'
            onChange={onChange}
            state={selectedRadio}
        />
        {
            selectedRadio === 'level1component' ?
                <Level1Component text="Level 1 component" title="Easy............"/>:
                <Level2Component/>
        }
    </div>
  );
}

export default App;
