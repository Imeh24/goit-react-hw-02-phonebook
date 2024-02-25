import css from './Filter.module.css';

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.searchField}
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
