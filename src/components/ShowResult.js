import React from 'react';
import xml2js from 'xml2js'

class ShowResult extends React.Component{

    convertXMLtoJSON(){

        let parser = new xml2js.Parser();

        let realData;

        parser.parseString(this.props.userData,
            (err, result) => {
                if(result){
                    realData = result["soap:Envelope"]["soap:Body"][0].TCKimlikNoDogrulaResponse[0].TCKimlikNoDogrulaResult[0]
                }
            }
        );
           
        return realData;
    }

    render(){
        return (
            <div>
                {this.convertXMLtoJSON()}
            </div>
        )
    }

}

export default ShowResult