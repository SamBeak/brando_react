import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Component List
import FooterComponent from './wrap/FooterComponent';
import HeaderComponent from './wrap/HeaderComponent';
import HomeCompoent from './wrap/HomeComponent';

export default function WrapComponent() {
  return (
    <div id="wrap">
        <HeaderComponent />
        <HomeCompoent />
        <FooterComponent />
    </div>
  )
}
