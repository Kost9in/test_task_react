const taskData = {
    books: [
        {
            id: 1,
            title: 'book1',
            takenBy: 2
        },
        {
            id: 2,
            title: 'book2'
        }
    ],
    readers: [
        {
            id: 1,
            name: 'name1'
        },
        {
            id: 2,
            name: 'name2'
        }
    ],
    bookHistory: {
        '1': [
            {
                readerId: 1,
                date: '20-02-2016'
            }
        ]
    }
};

const customData = {
    books: [
        {
            id: 1,
            title: 'book 1',
            takenBy: 1
        },
        {
            id: 2,
            title: 'book 2',
            takenBy: 3
        },
        {
            id: 3,
            title: 'book 3'
        },
        {
            id: 4,
            title: 'book 4',
            takenBy: 1
        },
        {
            id: 5,
            title: 'book 5'
        },
        {
            id: 6,
            title: 'book 6',
            takenBy: 1
        },
    ],
    readers: [
        {
            id: 1,
            name: 'reader 1'
        },
        {
            id: 2,
            name: 'reader 2'
        },
        {
            id: 3,
            name: 'reader 3'
        }
    ],
    bookHistory: {
        '1': [
            {
                readerId: 2,
                date: '20-02-2016'
            },
            {
                readerId: 3,
                date: '24-02-2016'
            }
        ],
        '2': [
            {
                readerId: 2,
                date: '13-01-2016'
            }
        ],
        '5': [
            {
                readerId: 1,
                date: '16-01-2016'
            },
            {
                readerId: 2,
                date: '02-02-2016'
            },
            {
                readerId: 3,
                date: '03-03-2016'
            }
        ]
    }
};

export const getData = type => new Promise(resolve => {
    const data = (type === 'task') ? taskData : customData;
    setTimeout(() => resolve(data), 1000);
});