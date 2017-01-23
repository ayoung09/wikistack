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
        allowNull: false,
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        // route: function() {
        //     var title = this.title;
        //     return '/wiki/' + title;
        // }
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

    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
  }, {

    hooks: {
        beforeValidate: function(page) {
        if (page.title) {
              page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
          } else {
              page.urlTitle = page.title = Math.random().toString(36).substring(2, 7);
          }
      }
  },
  getterMethods: {
      route: function (){
          return '/wiki/' + this.urlTitle;
      }
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
