import * as React from "react";
import List from "./List";
import "./scss/app";

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { name: null };
  }

  async componentWillMount() {
    let r = await fetch("/api/hello");
    let name = await r.json();
    this.setState({ name });
  }

  render() {
    return (
      <main className='container'>
        <List></List>
      </main>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  name: string;
}
