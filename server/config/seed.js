/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Posts = require('../api/blogPost/blogPost.model');

Posts.find({}).remove(function() {
  Posts.create({
    title: 'My First Blog',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non',
    time: Date(),
  })
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Angular JS',
    info : 'AngularJS is a structural framework for dynamic web apps. Angular has data binding and dependency injection to assist more terse code.',
    link : 'https://angularjs.org/'
  }, {
    name : 'Node JS',
    info : 'Node.js is a cross-platform runtime environment for server-side and networking applications.',
    link : 'http://nodejs.org/'
  }, {
    name : 'Express JS',
    info : 'Express.js is a Node.js web application framework, designed for building single-page, multi-page, and hybrid web applications',
    link : 'http://expressjs.com/'
  },  {
    name : 'Mongo DB',
    info : 'MongoDB is an open source, document-oriented database designed with both scalability and developer agility in mind by making use of storing JSON-like documents with dynamic schemas.',
    link : 'http://www.mongodb.org/'
  },  {
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Stylus and Sass.',
    link : 'http://gruntjs.com/'
  },{
    name : 'Styling',
    info : 'Multiple Sass mixins, ng-animate, animate.scss and more!',
    link : 'http://sass-lang.com/'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Kri',
    email: 'ckennedy@tssg.org',
    password: 'Kr!645230'
  }, function() {
      console.log('finished populating users');
    }
  );
});
