import './style/header.scss';
import { Component, type ReactNode } from 'react';

interface IHeaderProps {
  setInputValue: (inputValue: string) => void;
}

export class Header extends Component<IHeaderProps> {
  render(): ReactNode {
    const { setInputValue } = this.props;
    let inputValue: string = ''
    return (
      <>
        <header className="page-header">
          <div className="page-header__wrapper">
            <h2 className="page-header__title">Stapi.co Fleet Library</h2>

            <div className="page-header__search-bar">
              <div className="header-input__wrapper">
                <input
                  className="header-input"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    inputValue = e.target.value
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setInputValue(inputValue)
                    }
                  }}
                />
                <div className="header-input__style-line"></div>
              </div>

              <div className="header-search-btn__wrapper">
                <div className="search-btn" onClick={() => {
                  setInputValue(inputValue)
                }}>
                  <h2 className="search-btn-title">Search</h2>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
