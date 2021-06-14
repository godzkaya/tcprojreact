import React from 'react'; 
import TcCheck from '../api/TcCheck'
import IdentityCheck from './IdentityCheck';

class App extends React.Component{
 
    getRealCredentials = async credentials => {
        
        console.log(credentials);

        let xmls = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
        <soap:Body>\
          <TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">\
            <TCKimlikNo>' + credentials.tcno + '</TCKimlikNo>\
            <Ad>' + credentials.username + '</Ad>\
            <Soyad>' + credentials.surname + '</Soyad>\
            <DogumYili>' + credentials.birth + '</DogumYili>\
          </TCKimlikNoDogrula>\
        </soap:Body>\
        </soap:Envelope>';

        const response = await TcCheck.post('/Service/KPSPublic.asmx?op=TCKimlikNoDogrula',
        xmls,
        {headers:
          {'Content-Type': 'text/xml;charset=UTF-8'}
        }).then(res=>{
          console.log(res);
        }).catch(err=>{console.log(err)});
  
    }

    render(){
        return <IdentityCheck getRealCredentials={this.getRealCredentials}/>
    }

}


export default App;