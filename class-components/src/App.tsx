import { Component } from 'react';
import { Header } from './core/components/header/header';
import { ResultList } from './core/components/result-list/result-list';

interface IInputState {
  inputValue: string | undefined;
}

class App extends Component {
  state: IInputState = {
    inputValue: undefined,
  };

  setInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      inputValue: e.target.value,
    });
    console.log(this.state.inputValue);
  };

  render() {
    return (
      <>
        <Header setInputValue={this.setInputValue} />
        <ResultList inputVal={this.state.inputValue} />
      </>
    );
  }
}

export default App;
