# React large data list
 React drop down for large data items. 

# Why this component?
 * This is designed for the purpose of handling large number of dropdown items. 
 * Most of the popular React dropdown libraries slow down massively when the dataset has more than 1000 items. This component can handle any large data set without any significant slowness.

----
## Props
 * options : array, Array of elements.
 * onChange : function(value)
 * containerStyle : object, Style for main container. 
 * inputContainerStyle : object, Style for main container. 
 * inputStyle : object,  Input text box style.
 * disabled : boolean, true/false
 * clearIconStyle : object, Clear textbox icon style
 * createButtonStyle : object, Create option style
 * onClickCreate : function (value), called when user clicks on create button,  
 * defaultValue : string, Initial value

----
## Install
    npm i react-large-datalist

## Code

    ...
    import ReactLargeDatalist from 'react-large-datalist';
    ...
    ...
    <ReactLargeDatalist
       options={["Option 1", "Option 2", "Option 3"]}
       disabled={false}
       defaultValue="Option 2"
       onChange={(value) => {console.log("Selected value:", value)}}
       onCreate={(newValue)=>{console.log("Created value", newValue)}}
    />
    ...
    ...


[Demo link](https://taskmonk.github.io/react-large-datalist)

[GitHub link](https://github.com/taskmonk/react-large-datalist)

