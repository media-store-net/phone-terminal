import axios from 'axios';

export default async (req, res) => {

    const ID = req.query.id;
    const protocol = 'http'; //req.headers.referer.split('://')[0];
    const url = `${protocol}://${req.headers.host}/api/getProviders`;

    const fetchProvider = await axios.get(url);
    const data = fetchProvider.data;

    await res.json(data.filter(prov => prov.id == ID));
};
