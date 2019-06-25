import React from 'react';
import { render} from 'react-dom';
import ReactLargeDatalist from '../../src';

let options01 = [];
let options02 = [];
let options03 = [];

for(let i=0; i<3000; i++){
    options01.push("Option "+(i+1))
}

for(let i=0; i<13000; i++){
    options02.push("Option "+(i+1))
}

for(let i=0; i<33000; i++){
    options03.push("Option "+(i+1))
}

const App = () => (
    <div>
        <div style={{border:'1px solid red', padding:20, display:'flex', flexDirection:'column', alignItems:'center'}}>
            Element with 3000 items
            <ReactLargeDatalist
                disabled={false}
                //createButtonStyle={{border:'1px solid red', padding:5}}
                onChange={(value) => {console.log("Selected value:", value)}}
                options={options01}
                onCreate={(newValue)=>{console.log("Created value", newValue)}}
            />
        </div>
        <div style={{border:'1px solid green', padding:20, display:'flex', flexDirection:'column', alignItems:'center'}}>
            Element with 13000 items
            <ReactLargeDatalist
                disabled={false}
                //createButtonStyle={{border:'1px solid red', padding:5}}
                onChange={(value) => {console.log("Selected value:", value)}}
                options={options02}
                onCreate={(newValue)=>{console.log("Created value", newValue)}}
            />
        </div>
        <div style={{border:'1px solid orange', padding:20, display:'flex', flexDirection:'column', alignItems:'center'}}>
            Element with 33000 items
            <ReactLargeDatalist
                disabled={false}
                //createButtonStyle={{border:'1px solid red', padding:5}}
                onChange={(value) => {console.log("Selected value:", value)}}
                options={options03}
                onCreate={(newValue)=>{console.log("Created value", newValue)}}
            />
        </div>
    </div>
);
render(<App />, document.getElementById("root"));