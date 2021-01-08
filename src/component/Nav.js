import React, { useState } from 'react';



class Nav extends React.Component{

    state={term : ''};

    handlesubmit =event => {
        event.preventDefault();
        this.props.onsubmit(this.state.term);
    }

    
    render(){
    return(
    <div className="container w-90 mt-4" style={{border:'solid black 1px', padding:'10px'}}>
       
        <form onSubmit={this.handlesubmit} className="form-controls">
         
        <input type="text" placeholder="Image Search" value={this.state.term}  onChange={e => this.setState({term:e.target.value})}   className="form-controls w-50" style={{ border: 'solid black 5px' }} />
        </form>


        

    </div>
    );
    
}};

export default Nav;