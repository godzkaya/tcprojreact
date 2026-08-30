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
            <div className="ui container" style={{marginTop: '50px'}}>
                <h2 className="ui header">TC Kimlik Doğrulama</h2>
                <form className="ui form" onSubmit={this.getCredentials}>
                    <div className="field">
                        <label>Ad</label>
                        <input
                            type='text'
                            placeholder='Adınızı giriniz'
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Soyad</label>
                        <input
                            type='text'
                            placeholder='Soyadınızı giriniz'
                            value={this.state.surname}
                            onChange={e => this.setState({surname: e.target.value})}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>TC Kimlik No</label>
                        <input
                            type='text'
                            placeholder='11 haneli TC kimlik numaranız'
                            value={this.state.tcno}
                            onChange={e => this.setState({tcno: e.target.value})}
                            maxLength="11"
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Doğum Yılı</label>
                        <input
                            type='number'
                            placeholder='Örn: 1990'
                            value={this.state.birth}
                            onChange={e => this.setState({birth: e.target.value})}
                            min="1900"
                            max="2025"
                            required
                        />
                    </div>
                    <button className="ui primary button" type='submit'>Doğrula</button>
                </form>
            </div>
        )
    }

}

export default IdentityCheck;