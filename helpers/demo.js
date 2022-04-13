const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
import users from '../data/user.json';

export const demo = {
    getAll: () => users,
    getById: id => users.find(x => x.id.toString() === id.toString()),
    find: x => users.find(x),
    create,
    update,
    delete: _delete
};

function create(fullName, pro, age, sex, workXP, userid) {
    // generate new index id
    let user = {};
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
    user.fullName = fullName;
    user.age = age;
    user.sex = sex;
    user.pro = pro;
    user.workXP = workXP;
    user.userid = userid;
    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save index
    users.push(user);
    saveData();
}

function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

function _delete(id) {
    // filter out deleted index and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();

}

function saveData() {
    fs.writeFileSync('data/user.json', JSON.stringify(users, null, 4));
}