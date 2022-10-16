import * as React from 'react';
import './Roller.css';

export default function Roller({color}) {
  return (
    <div class="lds-roller">
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
    </div>
  );
}
