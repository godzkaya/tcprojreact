import React from 'react';

class IdentityCheck extends React.Component{

    state = {
        username: '',
        surname: '',
        tcno: '',
        birth: ''
    }

    getCredentials = e => {
        e.preventDefault();

        this.props.getRealCredentials({
            'username': this.state.username, 
            'surname': this.state.surname, 
            'birth': this.state.birth, 
            'tcno': this.state.tcno
        })

    }

    render(){
        return(
            <form onSubmit={this.getCredentials}>
                <input type='text' value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                <input type='text' value={this.state.surname} onChange={e => this.setState({surname: e.target.value})}/>
                <input type='number' value={this.state.tcno} onChange={e => this.setState({tcno: e.target.value})}/>
                <input type='number' value={this.state.birth} onChange={e => this.setState({birth: e.target.value})}/>
                <button type='submit'>Send</button>
            </form>
        )
    }

}

export default IdentityCheck;