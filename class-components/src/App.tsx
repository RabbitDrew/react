import { Component } from 'react';
import { Header } from './core/components/header/header';
import { ResultList } from './core/components/result-list/result-list';
import { ErrorBoundary } from './core/components/error/error';
interface IInputState {
  inputValue: string | undefined;
}

class App extends Component {
  state: IInputState = {
    inputValue: undefined,
  };

  setInputValue = (inputValue:string): void => {
    this.setState({
      inputValue: inputValue,
    });
  };

  render() {
    return (
      <>
        <Header setInputValue={this.setInputValue} />
        <ErrorBoundary>
          <ResultList inputVal={this.state.inputValue} />
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
