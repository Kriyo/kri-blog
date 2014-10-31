
'use strict';

var _ = require('lodash');
var BlogPost = require('./blogPost.model');

// Get list of posts
exports.index = function(req, res) {
  BlogPost.find(function (err, blogPosts) {
    if(err) { return handleError(res, err); }
    return res.json(200, blogPosts);
  });
};

// Get a single post
exports.show = function(req, res) {
  BlogPost.findById(req.params.id, function (err, blogPost) {
    if(err) { return handleError(res, err); }
    if(!blogPost) { return res.send(404); }
    return res.json(blogPost);
  });
};

// Creates a new post in the DB.
exports.create = function(req, res) {
  BlogPost.create(req.body, function(err, blogPost) {
    if(err) { return handleError(res, err); }
    return res.json(201, blogPost);
  });
};

// Updates an existing post in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  BlogPost.findById(req.params.id, function (err, blogPost) {
    if (err) { return handleError(res, err); }
    if(!blogPost) { return res.send(404); }
    var updated = _.merge(blogPost, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, blogPost);
    });
  });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
  BlogPost.findById(req.params.id, function (err, blogPost) {
    if(err) { return handleError(res, err); }
    if(!blogPost) { return res.send(404); }
    blogPost.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
