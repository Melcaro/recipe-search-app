import React from 'react';
import { AppTitle } from './AppTitle';
import { SearchBar } from './SearchBar';
import { RecipesContainer } from './RecipesContainer';
import { getRecipes } from './getRecipes';
import debounce from 'lodash.debounce';
import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: '',
      searchResult: [],
    };
    this.debouncedSearch = debounce(this.startSearch, 200);
  }
  onInputChange({ target: { value } }) {
    this.setState({
      userSearch: value,
    });
  }
  onKeyDown(e) {
    if (e.charCode === 13) {
      this.debouncedSearch(this.state.userSearch);
    }
  }

  onClick() {
    this.debouncedSearch(this.state.userSearch);
  }

  startSearch = async query => {
    const {
      data: { hits },
    } = await getRecipes(query);
    this.setState({
      searchResult: hits,
    });
    console.log(hits);
  };

  render() {
    const {
      state: { userSearch, searchResult },
    } = this;
    return (
      <div className="App">
        <AppTitle />
        <SearchBar
          onChange={this.onInputChange.bind(this)}
          value={userSearch}
          onKeyDown={this.onKeyDown.bind(this)}
          onClick={this.onClick.bind(this)}
        />
        <RecipesContainer value={searchResult} />
      </div>
    );
  }
}

export default App;
