import './style/item-list.scss';
import { Component, type ReactNode } from 'react';
import type { IResultInputs, IState } from './type/type';
import { DataListLoader } from './core/set-defoult-state';
import { PaginationController } from './core/page-counter';

export class ResultList extends Component<IResultInputs> {
  state: IState = {
    data: undefined,
    page: 1,
    totalPages: undefined,
  };

  componentDidMount(): void {
    const dataState = new DataListLoader (
      this.state,
      this.setState.bind(this)
    );
    dataState.initDefoultState();
  }

  componentDidUpdate(prevProps: Readonly<IResultInputs>, prevState: Readonly<any>): void {
      console.log(prevProps, prevState, this.props.inputVal)
  if (prevProps.inputVal !== this.props.inputVal) {
    const dataState = new DataListLoader(this.state, this.setState.bind(this));
    dataState.initStateByQuery(this.props.inputVal);
  }
  }

  render(): ReactNode {
    const controller = new PaginationController(
      this.state,
      this.setState.bind(this)
    );
    const first = controller.indexOfFirstElement();
    const last = controller.IndexOfLastElement();

    return (
      <>
        <main className="result-list__wrapper">
          <section className="result-list__header">
            <h2 className="result-list-header-title">Book title</h2>
            <h2 className="result-list-header-title">
              Release date of the book
            </h2>
          </section>

          <section className="rersult-list__body">
            <ul className="result-list">
              {this.state.data ? (
                this.state.data.books.map((obj, i) =>
                  i >= first && i <= last ? (
                    <li key={obj.uid} className="result-list-item">
                      <h2 className="result-list-title">{obj.title}</h2>
                      <h2 className="result-list-title">
                        {obj.publishedDay}.{obj.publishedMonth}.
                        {obj.publishedYear}
                      </h2>
                    </li>
                  ) : null
                )
              ) : (
                <p className="err"> There is no any data</p>
              )}
            </ul>
          </section>

          <section className="err-btn__wrapper">
            <div className="err-btn">
              <h2 className="err-btn-title">Error-boundary</h2>
            </div>
          </section>

          <section className="result-list__pagination">
            <div
              className="pag-arrow arrow-left"
              onClick={() => {
                controller.prev();
              }}
            >
              <h2 className="pag-arrow-title">&lt;</h2>
            </div>

            <div className="pag-page">
              <h2 className="pag-page-title">{this.state.page}</h2>
            </div>

            <div
              className="pag-arrow arrow-right"
              onClick={() => {
                controller.next();
              }}
            >
              <h2 className="pag-arrow-title">&gt;</h2>
            </div>
          </section>
        </main>
      </>
    );
  }
}
