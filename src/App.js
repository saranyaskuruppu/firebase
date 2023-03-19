import logo from './logo.svg';
import './App.css';
import {Firebase } from './firebase/config'


function App() {
  console.log(Firebase)
  return (
    <div className="App">
     <button onClick={()=>{
        Firebase.firestore().collection('products').get().then(snapshot=>{
            snapshot.forEach((obj)=>{
                 console.log(obj.data)
            })
        });



     }}>click me</button>
    </div>
  );
}

export default App;
