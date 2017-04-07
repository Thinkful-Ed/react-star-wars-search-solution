import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchArtists} from '../actions';

export class ArtistSearch extends React.Component {
    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const artists = this.props.artists.map((artist, index) =>
            <li key={index}>{artist}</li>
        );


        return (
            <ul className="artist-search-results">
                {artists}
            </ul>
        );
    }

    search(e) {
        e.preventDefault();
        if (this.input.value.trim() === '') {
            return;
        }

        this.props.dispatch(searchArtists(this.input.value));
    }

    render() {
        return (
            <div className="artist-search">
                <form onSubmit={(e) => this.search(e)}>
                    <input type="search" ref={input => this.input = input} />
                    <button>Search</button>
                </form>
                <ul className="artist-search-results">
                    {this.renderResults()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(ArtistSearch);
