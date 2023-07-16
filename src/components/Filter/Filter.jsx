import { useDispatch, useSelector } from 'react-redux';
import { GiArchiveResearch } from 'react-icons/gi';
import { addFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(addFilter(event.target.value));
  };

  return (
    <label className={css.filterLabel}>
      <span className={css.filterLabelText}>Find contact by name</span>
      <GiArchiveResearch className={css.icon} />
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};
