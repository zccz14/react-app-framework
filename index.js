var path = require('path');
var express = require('express');

express().use(express.static(path.join(__dirname, 'build'))).listen(3000);