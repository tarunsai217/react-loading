import * as React from 'react';
import './Ripple.css';

export default function Ripple({ color }) {
  return (
    <div class="lds-ripple">
      <div style={{ borderColor: color }}></div>
      <div style={{ borderColor: color }}></div>
    </div>
  );
}
