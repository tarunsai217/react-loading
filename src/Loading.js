import * as React from 'react';
import './Loading.css';
import DualRing from './Loaders/DualRing';
import Ellipsis from './Loaders/Ellipsis';
import Ring from './Loaders/Ring';
import Ripple from './Loaders/Ripple';
import Roller from './Loaders/Roller';
import Spinner from './Loaders/Spinner';

export default function Loading({
  loading,
  overlayColor,
  spinnerColor,
  loader,
  overlay=true,
  ...props
}) {
  return loading ? !overlay? (
    <div style={{ backgroundColor: overlayColor }} className="loading">
      {!loader && <Roller color={spinnerColor} />}
      {loader==='dualRing' && <DualRing color={spinnerColor} />}
      {loader==='ellipsis' && <Ellipsis color={spinnerColor} />}
      {loader==='ring' && <Ring color={spinnerColor} />}
      {loader==='ripple' && <Ripple color={spinnerColor} />}
      {loader==='roller' && <Roller color={spinnerColor} />}
      {loader==='spinner' && <Spinner color={spinnerColor} />}
    </div>
  ) :<div className='app-wrapper'>
    <div style={{ backgroundColor: overlayColor }} className="loading-overlay">
      {!loader && <Roller color={spinnerColor} />}
      {loader==='dualRing' && <DualRing color={spinnerColor} />}
      {loader==='ellipsis' && <Ellipsis color={spinnerColor} />}
      {loader==='ring' && <Ring color={spinnerColor} />}
      {loader==='ripple' && <Ripple color={spinnerColor} />}
      {loader==='roller' && <Roller color={spinnerColor} />}
      {loader==='spinner' && <Spinner color={spinnerColor} />}
    </div>
    <>{props.children}</>
    </div> 
    :(
    <>{props.children}</>
  );
}
