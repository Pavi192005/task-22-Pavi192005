import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Dashboard from './Components/Dashboard'

function App() {
  const [theme,setTheme]=useState("light")

  const change=()=>{
        setTheme(theme==="light"? "dark":"light")
      }
  
  return (
    <>
    <div
    style={{
      backgroundColor: theme === "light" ? "white" : "white",
      color: theme === "light" ? "black" : "white",
      minHeight: "100px",
      padding: "20px",
     display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing:"border-box"
        
    }}
  >
     <div
        style={{
          width: "50%",          
          padding: "30px",
          borderRadius: "15px",
          backgroundColor: theme === "light" ? "white" : "#1e293b",
          color: theme === "light" ? "#1e293b" : "white",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          boxSizing: "border-box"
        }}
      >
    <Header theme={theme} change={change}/>
    <Dashboard theme={theme}/>
    <Footer theme={theme}/>
    </div>
    
    </div>
    </>
  )
}

export default App
