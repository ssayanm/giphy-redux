import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifList from '../components/GifList';
//import DisplayGif from '../components/DisplayGif';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestGifs } from '../actions';
import './App.css';


const mapStateToProps = state => {
  return {
    searchField: state.searchGifs.searchField,
    gifs: state.requestGifs.gifs,
    isPending: state.requestGifs.isPending,
    error: state.requestGifs.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestGifs: () => dispatch(requestGifs())
  }
  
}

class App extends Component {
componentDidMount(){
        this.props.onRequestGifs();
  }

  render(){  
    const { onSearchChange, gifs } = this.props;
        return(
        <div className="App tc">
          <h1 className="f1">Gif Search Engine</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
            
              <GifList gifs={gifs}/>
            </ErrorBoundary>  
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
