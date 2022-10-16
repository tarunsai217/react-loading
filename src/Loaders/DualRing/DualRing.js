import * as React from 'react';
import './DualRing.css';

export default function DualRing({color}) {
  return <div style={{borderTopColor:color,borderBottomColor:color}} class="lds-dual-ring"></div>;
}
