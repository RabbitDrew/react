import { Component, type ReactNode } from 'react';
import './style/error.scss';
import type { IState } from '../result-list/type/type';
interface IPropsErrorBoundary {
  children: ReactNode;
}

export class ErrorBoundary extends Component<IPropsErrorBoundary> {
  state: Readonly<{ hasError: boolean }>;
  constructor(prop: IPropsErrorBoundary) {
    super(prop);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public errorMessage = () => {
    return (
      <>
        <div className="page-error">
          <h2 className="page-error-title">
            Somthing went wrong
            <br />
            please reload the page
          </h2>
        </div>
      </>
    );
  };

  public static testError = (state: IState): void => {
    if (state.testError === true) {
      throw new Error('component error');
    }
  };

  render() {
    if (this.state.hasError) {
      return this.errorMessage();
    }

    return this.props.children;
  }
}
