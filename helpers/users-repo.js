const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
import users from '../data/users.json';

export const usersRepo = {
    getAll: () => users,
    getById: id => users.find(x => x.id.toString() === id.toString()),
    find: x => users.find(x),
    create,
    viewData,
    update,
    delete: _delete
};

function create(userid,key, data) {
    // generate new index id
    let user = {};
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
    user.userid = userid;
    user.key = key;
    user.data = data;
    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save index
    users.push(user);
    saveData();
}

function viewData(){
    return users;
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
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}