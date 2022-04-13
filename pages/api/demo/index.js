import {demo} from '../../../helpers/demo';


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
    } else {
        demo.create(req.body.fullName, req.body.age, req.body.sex, req.body.pro, req.body.workXP, req.body.userid);
        return res.status(200).json({
            fullName: req.body.fullName,
            age: req.body.age,
            sex: req.body.sex,
            pro: req.body.pro,
            workXP: req.body.workXP,
            userid: req.body.userid
        });
    }
}