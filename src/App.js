import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';
function App() {
  return (
    <React.Fragment>
      <Navbar logo="Design"/>
      <div className="container">
        <div className="row mt-4">
          {
            data.map((val,key) => (
              <div className="col-3" key={key}>
                <Card title={val.cat} name={val.name} price={val.price!=null?val.price+"/-":"NULL"}/>
              </div>
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;