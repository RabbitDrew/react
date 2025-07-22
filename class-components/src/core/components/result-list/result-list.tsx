import './style/item-list.scss';
import { Component, type ReactNode } from 'react';
import type { IResultInputs, IState } from './type/type';
import { SetDefoultDataList } from './core/set-defoult-state';

export class ResultList extends Component<IResultInputs> {
  state: IState = {
    data: undefined,
    page: undefined,
    totalElements: undefined, 
    totalPages: undefined
  };

  componentDidMount(): void {
    const dataState = new SetDefoultDataList(this.state, this.setState.bind(this))
    dataState.initDefoultState()

  }

  render(): ReactNode {
    console.log(this.state.totalElements);
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
                  this.state.totalElements && i < this.state.totalElements/5 ? (
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
            <div className="pag-arrow arrow-left">
              <h2 className="pag-arrow-title">&lt;</h2>
            </div>

            <div className="pag-page">
              <h2 className="pag-page-title">{this.state.page}</h2>
            </div>

            <div className="pag-arrow arrow-right">
              <h2 className="pag-arrow-title">&gt;</h2>
            </div>
          </section>
        </main>
      </>
    );
  }
}
