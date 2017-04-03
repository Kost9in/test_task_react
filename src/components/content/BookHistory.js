import React from 'react';

export default ({ history, readers }) => (
    <ul>
        {history.map(({ date, readerId }, idx) => (<li key={idx}>{date}: {readers[readerId]}</li>))}
    </ul>
);