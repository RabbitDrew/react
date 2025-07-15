import './style/header.scss';

export const Header = () => {
  return (
    <>
      <header className="page-header">
        <div className="page-header__wrapper">
          <div className="header-input__wrapper">
            <input className="header-input" type="text" placeholder="Search" />
            <div className="header-input__style-line"></div>
          </div>

          <div className="header-search-btn__wrapper">
            <div className="search-btn">
              <h2 className="search-btn-title">Search</h2>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
