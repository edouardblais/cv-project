import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { styles } from './styles/style'

const App = () => {
  return (
    <div style={styles.general}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
