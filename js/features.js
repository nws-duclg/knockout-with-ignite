const features = [{
        name: 'Updating',
        editMode: 'row',
        editCellEnded: editCellEnded,
        editRowEnded: editRowEnded,
        columnSettings: [
            { columnKey: 'ProductID', editorOptions: { type: 'numeric', disabled: true} },
        ]
    },
    {
        name: 'Paging',
        type: 'local',
        pageSize: 50
    },
    {
        name: 'Filtering'
    },
    {
        name: "RowSelectors"
    },
    {
        name: "Selection"
    },
    {
        name: "MultiColumnHeaders"
    }
];