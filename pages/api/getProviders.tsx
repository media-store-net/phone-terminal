export default (req, res) => {
    res.status(200).json([
        {
            id: 1,
            name: 'MTS'
        },
        {
            id: 2,
            name: 'BiLine'
        },
        {
            id: 3,
            name: 'MegaFon'
        },
        {
            id: 4,
            name: 'Telekom'
        }
    ]);
};

