const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack_db', {logging: false});

//sequelize.sync({force: true});

// const Page = Sequelize.define('page', {
//   title: Sequelize.STRING,
//   urlTitle: Sequelize.STRING,
//   content: Sequelize.TEXT,
//   status: Sequelize.BOOLEAN,
// });

// const User = Sequelize.define('user', {
//   name: Sequelize.STRING,
//   email: Sequelize.STRING
// });

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING
    },
    urlTitle: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});



module.exports = {
  Page: Page,
  User: User
};
