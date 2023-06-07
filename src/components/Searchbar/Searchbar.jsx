import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  SearchbarBox,
  SearchForm,
  SearchField,
  SearchFormButtonLabel,
  SearchFormButton,
  Icon,
} from './Searchbar.styled';

const initialValue = {
  searchWord: '',
};

const Searchbar = ({ onSubmitForm }) => {
  const handleSubmit = ({ searchWord }, { resetForm }) => {
    onSubmitForm(searchWord);
    resetForm();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <SearchbarBox>
        <SearchForm>
          <SearchFormButton type="submit">
            <Icon />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchField
            name="searchWord"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarBox>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
