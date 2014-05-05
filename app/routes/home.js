'use strict';

exports.index = function(req, res){
  res.render('home/index', {name:'Bob', age:7, gender:'male',title: 'Welcome to Node.js'});
};

exports.about = function(req, res){
  res.render('home/about', {title: 'Welcome to Node.js'});
};

exports.faq = function(req, res){
  res.render('home/faq', {title: 'Welcome to Node.js'});
};

exports.photos = function(req, res){
  var pics = ['m1.jpg', 'm2.jpg', 'm3.jpg'];
  res.render('home/photos', {pics:pics, title:'Welcome to Node.js'});
};
