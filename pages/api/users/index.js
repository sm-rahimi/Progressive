import {usersRepo} from '../../../helpers/users-repo';


export default function index(req, res) {
    // split out password from index details
    //const user = {data: req.query};

    // validate
    // if (usersRepo.find(x => x.username === index.username))
    //     throw `User with the username "${index.username}" already exists`;

    // hash password
    // index.hash = bcrypt.hashSync(password, 10);

    if (req.body === null) {
        return res.status(200).json({res: 'null'});
    } else if (req.method === 'POST') {
        usersRepo.create(req.body.userid, req.body.key, req.body.data);
        return res.status(200).json({userid: req.body.userid, key: req.body.key, data: req.body.data});
    } else {
        const allData = usersRepo.viewData();
        return res.status(200).json(allData);
    }
}