## Installation

```sh
npm install --save react-loader-io
```

## Usage

```sh
import Loading from "react-loaderss";
    <Loading
            loader='roller' // check below for more loaders (default:roller)
            loading={true}  //show loading boolean value
            overlayColor='rgba(0,0,0,0.8)' //background overlay color (default:black)
            spinnerColor='white' //spinner color (default:white)
            overlay={true} //overlay on the child component or only loader(default: true)
    >
      ... your component(s)
    </Loading>
```

## Loaders

```sh
* dualRing
* ellipsis
* ring
* ripple
* roller
* spinner
```
