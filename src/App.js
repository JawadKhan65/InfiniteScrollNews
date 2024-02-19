
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';





const  App=()=>{
  const apiKey = process.env.React_APP_API_KEY
 const [progress, setProgress] = useState(0)

  
  const[Mode,setMode] = useState('light')

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#191a21';
      document.body.style.color = 'white';
    
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      let cardd = document.querySelector('.card-body');
      cardd.style.backgroundColor = "white"

      

      
      
      
    }
  };


 



    return (
      <>
        <BrowserRouter >

          <Navbar mode={Mode} toggleMode={toggleMode} />
          <LoadingBar
             color='#031cfc'
             progress={progress}
            
           /> 

          <Routes>
            

            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" mode={Mode} toggleMode={toggleMode} country="us" category="general"/>}/>
          
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" mode={Mode} toggleMode={toggleMode} country="in" category="business"/>}/> 
           
            <Route exact path="/entertainment" element={<News  setProgress={setProgress}apiKey={apiKey}  key="entertainment" mode={Mode} toggleMode={toggleMode} country="us" category="entertainment"/>} />
            
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" mode={Mode} toggleMode={toggleMode} country="in" category="general"/>}/>
           
            <Route exact path="/health" element={<News  setProgress={setProgress} apiKey={apiKey}  key="health" mode={Mode} toggleMode={toggleMode} country="in" category="health"/>} />
            
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" mode={Mode} toggleMode={toggleMode} country="in" category="science"/>}/>
            
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" mode={Mode} toggleMode={toggleMode} country="in" category="sports"/>}/>
            
            <Route exact path="/technology" element={<News  setProgress={setProgress} apiKey={apiKey}  key="technology" mode={Mode} toggleMode={toggleMode} country="in" category="technology"/>}/> 


          </Routes>

        </BrowserRouter>
      </>
    )
  
}


export default App;
