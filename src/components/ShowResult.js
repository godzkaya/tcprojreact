import React from 'react';
import xml2js from 'xml2js'

class ShowResult extends React.Component{

    state = {userData: ''}

    getData(){

        let parser = new xml2js.Parser();

        parser.parseString(this.props.userData,
            (err, result) => {
                if(result){
                    /*this.setState({userData: result["soap:Envelope"]["soap:Body"][0].TCKimlikNoDogrulaResponse[0].TCKimlikNoDogrulaResult[0]})*/
                    
                    this.setState({userData: 123})
                }
            }
        );

        return this.state.userData
	
    }

    render(){
        return (
            <div>
                {this.getData()}
            </div>
        )
    }

}

export default ShowResult