import React, { Component } from 'react';

const styles = {
    clearIcon: {
        position: 'absolute',
        right: 2,
        top: 5,
        bottom: 5,
        height: 20,
        fontSize: 20,
        marginRight: 35,
        cursor: 'pointer',
        color: '#ccc'
    }
}

class ReactLargeDatalist extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.defaultValue || '',
            showCreateButton: false
        }

        this.onClearClicked = this.onClearClicked.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    setCreateButtonStatus(value){
        if(this.props.options.indexOf(value)==-1 && value != ''){
            this.setState({showCreateButton: true})
        }
        else{
            this.setState({showCreateButton: false})
        }
    }

    onClearClicked() {
        this.setState({value:''})
        this.props.onChange('');

        this.setCreateButtonStatus('');
    }

    onChange(e){
        const value = e.target.value;
        this.setState({value});
        if(this.props.options.indexOf(value) != -1){
            this.props.onChange(value);
        }

        this.setCreateButtonStatus(value);
    }

    render(){
        const props = this.props;

        return (
            <div style={ props.containerStyle?props.containerStyle:{}}>
                <div className="btn-group" style={ props.inputContainerStyle || {}}>
                    <input style={ props.inputStyle || {}}
                        value={this.state.value} 
                        disabled={props.disabled} 
                        type="search" 
                        className="form-control" 
                        list="dataList" 
                        onChange={this.onChange}/>
                    <span style={props.clearIconStyle || styles.clearIcon} onClick={(props.disabled||this.state.value=='')?null:this.onClearClicked}>&#x2716;</span>
        
                    <datalist id={"dataList"}>
                        {props.options.map((item, i) =>
                            <option key={i} value={item}></option>
                        )}
                    </datalist>
                </div>
                {this.state.showCreateButton?
                    <span style={props.createButtonStyle || {color:'blue', cursor: "pointer"}} 
                        onClick={props.onCreate?()=>props.onCreate(this.state.value):null}>
                            + Create <b>{this.state.value}</b>
                    </span>
                :null}
            </div>
        )
    }
};  

export default ReactLargeDatalist;