/* eslint-disable no-multi-str */
import React from 'react'; 
import TcCheck from '../api/TcCheck'
import IdentityCheck from './IdentityCheck';
import ShowResult from './ShowResult';

class App extends React.Component{

    state = {userData: ''}
 
    getRealCredentials = async credentials => {
        
        let xmls = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
        <soap:Body>\
          <TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">\
            <TCKimlikNo>16192768550</TCKimlikNo>\
            <Ad>uğur mahir</Ad>\
            <Soyad>özkaya</Soyad>\
            <DogumYili>1989</DogumYili>\
          </TCKimlikNoDogrula>\
        </soap:Body>\
        </soap:Envelope>';

        await TcCheck.post('/Service/KPSPublic.asmx?op=TCKimlikNoDogrula',
        xmls,
        {headers:
          {'Content-Type': 'text/xml;charset=UTF-8'}
        }).then(res=>{
          this.setState({userData: res.data})
        }).catch(err=>{console.log(err)});

    }

    render(){
        return (
          <div>
            <IdentityCheck getRealCredentials={this.getRealCredentials}/>
            <ShowResult userData={this.state.userData}/>
          </div>
        )
    }

}


export default App;



/* ' + credentials.tcno + '
' + credentials.username + '
' + credentials.surname + '
' + credentials.birth + ' */