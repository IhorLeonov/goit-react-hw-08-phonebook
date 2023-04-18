import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Label>
      Search:
      <Input
        type="text"
        value={filterValue}
        onChange={handleChangeFilter}
      ></Input>
    </Label>
  );
};
