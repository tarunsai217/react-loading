import * as React from 'react';
import './Spinner.css';

export default function Spinner({color}) {
  return (
    <div class="lds-spinner">
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
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
