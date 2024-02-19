import './App.css';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './Navbar';
import News from './News';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



export class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState = ({
      progress: progress
    })
  }
  constructor(props) {
    super(props);
    this.state = ({
      Mode: "light"
    })
  }

  toggleMode=()=> {
    if (this.state.Mode === 'light') {

      this.setState= ({ 
        Mode: "dark" 
      });
      document.body.style.backgroundColor = '#3f4246';
      document.body.style.color = 'blue';


    } else {
      this.setState = ({
        Mode: "dark"

      });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';





    }
  }




  render() {
    return (
      <>
        <BrowserRouter >

          <Navbar mode={this.state.Mode} toggleMode={this.toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}

          />

          <Routes>


            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" mode={this.state.Mode} toggleMode={this.toggleMode} country="us" category="general" />} />

            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" mode={this.state.Mode} toggleMode={this.toggleMode} country="in" category="business" />} />

            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" mode={this.state.Mode} toggleMode={this.toggleMode} country="us" category="entertainment" />} />

            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" mode={this.state.Mode} toggleMode={this.toggleMode} country="in" category="general" />} />

            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" mode={this.state.Mode} toggleMode={this.toggleMode} country="in" category="health" />} />

            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" mode={this.state.Mode} toggleMode={this.toggleMode} country="in" category="science" />} />

            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" mode={this.state.Mode} toggleMode={this.toggleMode} country="in" category="sports" />} />

            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" mode={this.state.Mode} toggleMode={this.toggleMode} country="in" category="technology" />} />


          </Routes>

        </BrowserRouter>
      </>
    )
  }
}

export default App