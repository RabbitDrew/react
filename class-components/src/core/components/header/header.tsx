import './style/header.scss';
//import { initApiService } from '../../api/api-service';
import { Component, type ReactNode } from 'react';

interface IHeaderProps {
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Header extends Component<IHeaderProps> {
  render(): ReactNode {
    // intialisation props
    // or we can write onChange={(e) => this.props.setInputValue(e)}
    const { setInputValue } = this.props;
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
                    setInputValue(e);
                  }}
                />
                <div className="header-input__style-line"></div>
              </div>

              <div className="header-search-btn__wrapper">
                <div className="search-btn">
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
