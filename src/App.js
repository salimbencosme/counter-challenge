import React,{useState} from 'react';
import './App.css';
import Header from './components/App/Header';
import Content from './components/App/Content';
import CustomDialog from './components/UI/CustomDialog';

function App() {

  const [counterList,setCounterList] = useState([]);
  const [totalIncrements,setTotalIncrements] = useState(0);
  const [showDialog,setShowDialog] = useState(false);

  const addCounter = incrementValue =>{
      let newId = Math.floor(Math.random() * 1000000000);
      setCounterList([...counterList,{id:newId,cont:0,incrementValue:incrementValue}]);      
  }

  const removeCounter = id =>{
      let cont = 0;
      let newCounterList = counterList.filter(counterElement => {
        if(counterElement.id !== id){
          cont = cont + counterElement.cont;
          return counterElement.id;
        }
      })
      setCounterList(newCounterList);
      setTotalIncrements(cont);
  }

  const incrementCounter = id =>{
    let cont = 0
    let newCounterList = counterList.filter(counterElement => {
      if(counterElement.id === id){
         counterElement.cont = counterElement.cont + counterElement.incrementValue;
      }
      cont = cont + counterElement.cont;
      return counterElement;
    })

    setCounterList(newCounterList);
    setTotalIncrements(cont);
  }

  const dialogLogic = isOpen =>{
      setShowDialog(isOpen);
  }

  return (
    <div className="App">
      
      {showDialog ? <CustomDialog action={addCounter} dialogLogic={dialogLogic} /> : ''}

      <header className="app">
        <Header 
          totalIncrements={totalIncrements} 
          dialogLogic={dialogLogic}
         />

        <Content 
        list={counterList}
        actionIncrement={incrementCounter}
        actionRemove={removeCounter}
         />
      </header>
    </div>
  );
}

export default App;
