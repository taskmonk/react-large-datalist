import React from 'react';
import { render} from 'react-dom';
import ReactLargeDatalist from '../../src';
const App = () => (
    <div>
        <ReactLargeDatalist
            disabled={false}
            //createButtonStyle={{border:'1px solid red', padding:5}}
            onChange={(value) => {console.log("Selected value:", value)}}
            options={["Option 1", "Option 2", "Option 3"]}
            onCreate={(newValue)=>{console.log("Created value", newValue)}}
        />
    </div>
);
render(<App />, document.getElementById("root"));