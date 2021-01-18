const Search = ({ changeCityName, searchHandler }) => {
  return (
    <div className="search">
      <div className="row">
        <div className="input-field col s8 offset-s2 m6 offset-m3">
          <input
            placeholder="Enter City Name"
            id="first_name"
            type="text"
            className="validate"
            onChange={(e) => {
              changeCityName(e.target.value);
            }}
          />
          <label htmlFor="first_name">City Name</label>
        </div>
      </div>
      <button
        className="waves-effect waves-light btn-large"
        onClick={searchHandler}
      >
        Search<i className="material-icons right">search</i>
      </button>
    </div>
  );
};

export default Search;
