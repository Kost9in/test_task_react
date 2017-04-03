import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseBook, chooseData, loadData } from 'actions';
import { getData } from 'utils';

class ChooseData extends Component {
    componentDidMount() {
        this.props.onChooseData('task');
    }
    render() {
        const { loading, nav: { data: dataType }, onChooseData } = this.props;
        return (
            <div className="choose-data">
                <p>Choose data:</p>
                <div className="links">
                    <a
                        className={(dataType === 'task' ? 'active' : '')}
                        onClick={onChooseData.bind(this, 'task', loading)}
                    >Task data</a>
                    <a
                        className={(dataType === 'custom' ? 'active' : '')}
                        onClick={onChooseData.bind(this, 'custom', loading)}
                    >Custom data</a>
                </div>
            </div>
        );
    }
};

export default connect(
    state => state,
    dispatch => ({
        onChooseData: (type, loading) => {
            if (!loading) {
                dispatch(chooseData(type));
                dispatch(chooseBook(''));
                dispatch(loadData('START'));
                getData(type).then(data => dispatch(loadData('FINISH', data)));
            }
        }
    })
)(ChooseData);