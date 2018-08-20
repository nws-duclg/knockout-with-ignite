const columns = [{
        headerText: 'ProductID',
        key: 'ProductID',
        dataType: 'string'
    },
    {
        headerText: 'Product Data',
        key: 'ProductData',
        group: [{
                headerText: 'Name',
                key: 'Name',
                dataType: 'string'
            },
            {
                headerText: 'Make Flag',
                key: 'MakeFlag',
                dataType: 'bool'
            }
        ]
    }
];