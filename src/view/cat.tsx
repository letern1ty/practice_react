import React, { Component } from "react";

interface IProps {
  name: string;
}
interface Istate {
  age: number;
}

export default class Cat extends Component<IProps, Istate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ age: this.state.age + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>hello,world</h1>
        <p>{this.props.name}</p>
        <p>{this.state.age}</p>
      </div>
    );
  }
}
