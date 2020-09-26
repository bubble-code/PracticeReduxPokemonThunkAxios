import React from 'react';
import './App.css';
import { Cantidad } from './component/cantidad'
import { Comprar } from './component/comprar';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Buscador } from './buscador/Buscador';
import { Resultado } from './buscador/Resultado';

function App() {
  console.log(store.getState())
  return (
    <Provider store={store}>
      <div className="App constainer">
        <div className="section">
          <div className="col-12">
            <div className="mt5" style={{ maxWidth: '370px' }}>
              <div className="card">
                <div className="col-4">
                  <img src={require('./img/pokemon.jpg')} alt="pokemon" className="card-img" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <Cantidad />
                    <Comprar />
                  </div>
                </div>
              </div>
            </div>
            <div className="buscar">
              <Buscador />
              <Resultado />
            </div>
          </div>
        </div>

      </div>
    </Provider>
  );
}

export default App;
