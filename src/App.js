import { useState } from 'react';
import logo from './logo.svg';
import Counter from './counter';
import { userData } from './Card/userDate';
import Card from './Card/card';

function App() {
   const [first, setfirst] = useState(0);

  return (
    <div className="App">

{userData.map((item,index)=>(
  <Card name={item.name} age={item.age} address={item.address} />
)

)
}

    </div>
  );
}

export default App;
