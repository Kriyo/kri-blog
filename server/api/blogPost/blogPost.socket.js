/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var blogPost = require('./blogPost.model');

exports.register = function(socket) {
  blogPost.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  blogPost.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('blogPost:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('blogPost:remove', doc);
}
