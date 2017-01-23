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
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
    }
});



module.exports = {
  Page: Page,
  User: User
};
