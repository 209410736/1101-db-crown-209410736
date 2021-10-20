const { json } = require('express');
const db = require('../utils/database');

const Category_36 = class Category_36 {
    constructor(id, name, size, remote_url, local_url, link_url) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;
    }


    static async fetchAll() {
        try {
            let results = await db.query(`SELECT * from category_36`);
            return results.rows;
        } catch (e) {
            console.log(`error`, e);
        }
    }
};


const test = async () => {
    let results = await Category_36.fetchAll();
    console.log('results', JSON.stringify(results.rows));
}

test();
module.exports = Category_36;