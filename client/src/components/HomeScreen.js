import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;

class HomeScreen extends Component {
    handleSortByDate = (data) => {
        data.logos.sort((a, b) => b.lastUpdate.localeCompare(a.lastUpdate));
    }
    render() {
        return (
            <Query fetchPolicy='network-only' pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div className="container">
                            <div className="container row">
                                <div className="col s4">
                                    <h3>Recent Work</h3>
                                    { this.handleSortByDate(data) }
                                    { data.logos.map((logo, index) => (
                                        <div key={index} className='home_logo_link'
                                            style={{ cursor: "pointer" }}>
                                            <Link to={`/view/${logo._id}`}>{logo.text}</Link>
                                        </div>
                                    ))}
                                </div>
                                <div className="col s8">
                                    <div id="home_banner_container">
                                        @goLogoLo<br/>
                                        Logo Maker
                                    </div>
                                    <div>
                                        <Link id="add_logo_button" to="/create">
                                            <button className="btn btn-success">
                                                Create a New Logo
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            </Query >
        );
    }
}

export default HomeScreen;
