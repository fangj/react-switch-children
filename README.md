# react-switch-children
switch react children component by name


### How to use

with props.show(name):

```
const A=({show})=><div onClick={()=>show('b')}>A</div>
const B=({show})=><div onClick={()=>show('a')}>B</div>

ReactDOM.render( <Switcher defaultName='b' >
      <A name='a'/>
      <B name='b'/>
    </Switcher>, mountNode);
```


with pubsub:
```
var PubSub=require('pubsub-js');
const AE=()=><div onClick={()=>PubSub.publish("switcher",{show:'b'})}>A</div>
const BE=()=><div onClick={()=>PubSub.publish("switcher",{show:'a'})}>B</div>
ReactDOM.render( <Switcher defaultName='b' ns="switcher">
      <AE name='a'/>
      <BE name='b'/>
    </Switcher>, mountNode);
```
