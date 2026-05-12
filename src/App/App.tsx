import React from 'react'
import './App.scss'
import { Header } from './Header/Header'
import { DemoForm } from './DemoForm/DemoForm'
import { GithubFinder } from './GithubFinder/GithubFinder'

export function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-layout">
        {/* <DemoForm /> */}
        <GithubFinder />
      </div>
    </div>
  )
}
