import * as React from 'react';
import './Ellipsis.css';

export default function Ellipsis({color}) {
  return (
    <div class="lds-ellipsis">
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
      <div style={{background:color}}></div>
    </div>
  );
}
