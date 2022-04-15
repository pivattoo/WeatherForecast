import '../App.css';
import { Button } from '@mui/material';
import { getClimateCapitals } from '../services/weatherServices';
//import { useEffect, useState } from 'react';

function App() {
    //const [climate, setClimate] = useState('')


    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Sistema de previsão do tempo
                </h1>

                <Button onClick={() => console.log(getClimateCapitals())} variant="contained">
                    Climas
                </Button>

            </header>
            <body>
                <p>Utilizar</p>
                <ul>
                    <li>
                        <a href="http://servicos.cptec.inpe.br/XML/" target="blank">Api para previsão do tempo</a>
                    </li>
                    <li>
                        <a href="https://axios-http.com/ptbr/docs/intro" target="blank">Axios para requisições HTTP</a>
                    </li>
                    <li>
                        <a href="https://mui.com/pt/" target="blank">MUI para ficar mais bunitinho</a>
                    </li>
                </ul>

            </body>
        </div>
    );
}

export default App;
