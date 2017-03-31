var express = require("express");
var app     = require('express')();
var server  = require('http').Server(app);
var io      = require('socket.io')(server);
var path  = require('path');
var config  = require('./config');
var localport=8080;
var WebSocket = require('ws');

var port =config.port;
var hostname =config.hostname;
//var host = 'http://'+hostname+':'+port; 
var host = 'http://localhost:9090';

server.listen(localport,function() {
  console.log('Server running on port: %d', localport);
});

// var socket = io.connect('http://example.com');
// socket.on('connect', function () {
//   // socket connected
//   socket.emit('server custom event', { my: 'data' });
// });


// define path for view folder
app.use(express.static(path.join(__dirname, 'public')));
// start socate
io.on('connection', function (socket) {
  console.log('here');
socket.emit('throughput', {"tp": [400, 300],'fddCarrier':[2125,2145]});



var socket2 = require('socket.io-client')('http://localhost:9090');
socket2.on('connect', function () {
   console.log('here2');
  // socket connected
  socket2.emit('server custom event', { my: 'data' });
   socket.on('activateCbrs',function(data){
    console.log('here3');
 socket2.emit('server custom event2', { my: 'data1223343' });
  })

});
});


//app.use(express.static(path.join(__dirname, 'public')));
// start socate
/*  io.on('connection', function (socket) {
  socket.emit('throughput', {"tp": [400, 300],'fddCarrier':[2125,2145]});
  socket.on('activateCbrs', function (data) {
                                                console.log(data);
                                                if(!data.status.sas)
                                                {
                                                  if(data.status.radar==true)
                                                  {
                                                   socket.emit('OnActivateRadarCbrs', {"freq": {"sas": 40,"cbrs1": 3650,"cbrs2": 3670,"fdd1": 2125,
"fdd2": 2145}});
                                                  }
                                                }
                                                else
                                                {
                                                  socket.emit('OnActivateCbrs', {"freq": {"sas": 40,"cbrs1": 3610,"cbrs2": 3630,"fdd1": 2125,
"fdd2": 2145}});
                                                }
                                                
                                              });
socket.on('resetRequest', function (data) { console.log(data); });
socket.on('requestForModeChange', function (data) { console.log(data); });
});  */
