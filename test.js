import Switcher from 'react-switch-children';

const A=({show})=><div onClick={()=>show('b')}>A</div>
const B=({show})=><div onClick={()=>show('a')}>B</div>

ReactDOM.render( <Switcher defaultName='b' >
      <A name='a'/>
      <B name='b'/>
    </Switcher>, mountNode);


var PubSub=require('pubsub-js');
const AE=({ns})=><div onClick={()=>PubSub.publish(ns,{show:'b'})}>A</div>
const BE=({ns})=><div onClick={()=>PubSub.publish(ns,{show:'a'})}>B</div>
ReactDOM.render( <Switcher defaultName='b' >
      <AE name='a'/>
      <BE name='b'/>
    </Switcher>, mountNode);