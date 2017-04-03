import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseBook } from 'actions';

class NavItem extends Component {
    render() {
        const { nav: { active: activeBook }, bookId, title, reader, onChooseBook } = this.props;
        const className = (bookId === activeBook) ? 'active' : '';

        return (
            <li className={className}>
                <a onClick={onChooseBook.bind(this, bookId)}>
                    <div className="img">
                        <img src="/img/book.svg" alt=""/>
                        <span>{title}</span>
                    </div>
                    {reader ? (<p className="reader">{reader}</p>) : ''}
                </a>
            </li>
        );
    }
};

export default connect(
    state => state,
    dispatch => ({
        onChooseBook: bookId => dispatch(chooseBook(bookId))
    })
)(NavItem);