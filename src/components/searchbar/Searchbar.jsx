import {
  HeaderSearchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const normalizedQuery = query.trim().toLocaleLowerCase();

    if (!query.trim()) {
      alert('Type something...');
      return;
    }

    this.props.handleSubmit(normalizedQuery);

    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;

    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <BiSearchAlt2 size={20} />
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
