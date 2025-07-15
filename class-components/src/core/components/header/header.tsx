import './style/header.scss';
import { get } from '../../api/get-data';
export const Header = () => {
  get()
  return (
    <>
      <header className="page-header">
        <div className="page-header__wrapper">
          <div className="header-input__wrapper">
            <input className="header-input" type="text" placeholder="Search" />
            <div className="header-input__style-line"></div>

            <select className='page-header__categories' name="" id="">
              <option className='category-placeholder' value="" disabled selected hidden>Chose category</option>
              <option className='category' value="type">Type</option>
            </select>
            <div className="header-select__style-line"></div>
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
