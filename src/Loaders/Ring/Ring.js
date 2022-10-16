import * as React from 'react';
import './Ring.css';

export default function Ring({ color }) {
  return (
    <div style={{borderTopColor:color}} class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
