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
        const result = this.convertXMLtoJSON();

        if (!result) {
            return null;
        }

        const isValid = result === 'true';

        return (
            <div className="ui container" style={{marginTop: '30px'}}>
                <div className={`ui message ${isValid ? 'success' : 'error'}`}>
                    <div className="header">
                        {isValid ? 'Doğrulama Başarılı ✓' : 'Doğrulama Başarısız ✗'}
                    </div>
                    <p>
                        {isValid
                            ? 'Girdiğiniz bilgiler doğrulandı.'
                            : 'Girdiğiniz bilgiler doğrulanamadı. Lütfen bilgilerinizi kontrol edin.'}
                    </p>
                </div>
            </div>
        )
    }

}

export default ShowResult