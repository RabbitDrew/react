import './style/item-list.scss';
export const ResultList = () => {
  return (
    <>
      <main className="result-list__wrapper">
        <section className="result-list__header">
          <h2 className="result-list-header-title">item</h2>
          <h2 className="result-list-header-title">result</h2>
        </section>

        <section className="rersult-list__body">
          <ul className="result-list__item">
            <li className="result-list-item">
              <h2 className="result-list-title">item-title</h2>
            </li>
          </ul>

          <ul className="result-list__result">
            <li className="result-list-item">
              <h2 className="result-list-title">item-result</h2>
            </li>
          </ul>
        </section>

        <section className="err-btn__wrapper">
          <div className="err-btn">
            <h2 className="err-btn-title">error-boundary</h2>
          </div>
        </section>
      </main>
    </>
  );
};
