import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookHistory from './BookHistory';

class Content extends Component {
    render() {
        const { nav: { active: activeBook }, data: { data: { readers, bookHistory: history = [] }}}  = this.props;
        const activeHistory = history[activeBook] || [];

        return (
            <div className="content">
                {activeHistory.length
                    ? (<BookHistory history={activeHistory} readers={readers} />)
                    : (<p className="empty">History not found...</p>)
                }
            </div>
        );
    }
};

export default connect(state => state)(Content);