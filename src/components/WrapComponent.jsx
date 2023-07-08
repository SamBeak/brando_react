import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Component List
import SkipComponent from './wrap/SkipComponent';
import HeaderComponent from './wrap/HeaderComponent';
import HomeCompoent from './wrap/HomeComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent() {
  return (
    <div id="wrap">
      <SkipComponent />
      <HeaderComponent />
      <HomeCompoent />
      <FooterComponent />
    </div>
  )
}
