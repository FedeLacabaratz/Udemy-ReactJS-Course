import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlBudget from './components/ControlBudget';

function App() {

  // Definir el state
  const [budget, setBudget] = useState(0);
  const [remanent, setRemanent] = useState(0);
  const [showpregunta, setShowpregunta] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [myexpense, setMyexpense] = useState({});
  const [addexpense, setAddexpense] = useState(false);

  // UseEffect que actualiza el remanent
  useEffect(() => {
    if (addexpense) {

      // Agrega el nuevo budget
      setExpenses([
        ...expenses,
        myexpense
      ]);

      // Resta del budget el budget actual
      const remanentBudget = remanent - myexpense.expamount;
      setRemanent(remanentBudget)

      // Resetear addexpense a false
      setAddexpense(false); 
    }
  }, [myexpense, addexpense, expenses, remanent]);

  return (
    <div className="container">
      <header>
        <h1>My Weekly Budget</h1>
        <div className="contenido-principal contenido">
          {showpregunta ?
            (
              <Pregunta
                setBudget={setBudget}
                setRemanent={setRemanent}
                setShowpregunta={setShowpregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setMyexpense={setMyexpense}
                    setAddexpense={setAddexpense}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    expenses={expenses}
                  />
                  <ControlBudget
                    budget={budget}
                    remanent={remanent}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
