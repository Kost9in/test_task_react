import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseBook } from 'actions';
import ChooseData from './ChooseData';
import NavItem from './NavItem';

class Nav extends Component {
    render() {
        const { data: { loading, data: library } } = this.props;

        return (
            <div className="nav">
                <ChooseData loading={loading} />
                {loading || !library.books
                    ? (<p className="loading">Loading data...</p>)
                    : (
                        <ul>
                            {
                                library.books.map(({ id, title, takenBy = 0 }) => (
                                    <NavItem key={id} bookId={id} title={title} reader={library.readers[takenBy]} />
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        );
    }
};

export default connect(state => state)(Nav);