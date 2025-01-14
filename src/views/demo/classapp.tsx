import React, { PureComponent } from "react";

interface Iprops {
   name: string;
   id: number;
}

interface Istate {
   name: string;
   id: number;
   number: number;
}

class Demo extends PureComponent<Iprops, Istate> {
   name = "Alice";
   id = 10001;
   state = {
      name: "demo",
      id: 10001,
      number: 0
   };
   render(): React.ReactNode {
      return (
         <div>
            <ul>name:{this.props.name}</ul>
            <ul>id:{this.props.id}</ul>
            <ul>count:{this.state.number}</ul>
         </div>
      );
   }
}

export default Demo;
