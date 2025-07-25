import { Component, type ReactNode } from 'react';
import './style/error.scss';
interface IPropsErrorBoundary {
  children: ReactNode;
}

export class ErrorBoundary extends Component<IPropsErrorBoundary> {
  state: Readonly<{ hasError: boolean }>;
  constructor(prop: IPropsErrorBoundary) {
    super(prop);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  errorMessage = () => {
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

  render() {
    if (this.state.hasError) {
      return this.errorMessage();
    }

    return this.props.children;
  }
}
