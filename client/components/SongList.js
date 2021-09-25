import React, { Component } from 'react';
// graphql-tag help to define query
import gql from 'graphql-tag';
// gql query aren't js formate
// react-apollo is a glue that bond apollo store to react
import { graphql } from 'react-apollo';

class SongList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                SongList
            </div>
        );
    }
}

const query = gql`query SongType {songs{title}}`;
export default graphql(query)(SongList);