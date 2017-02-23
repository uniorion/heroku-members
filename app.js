var express = require('express');
var path    = require('path');
var app     = express();

const APP_ROOT = "/application";

// port 설정, 환경변수에 PORT 값이 없으면 8080
app.set('port', process.env.PORT || 8080);

// 정적파일 root 위치 설정
app.use(express.static(path.join(__dirname, APP_ROOT)));

// -------------- Routing ---------------
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, APP_ROOT, 'registration.html'));
});
app.get('/list', function(req, res) {
  res.sendFile(path.join(__dirname, APP_ROOT, 'member-list.html'));
});
// -------------- Routing ---------------

app.use(function(req, res){
  res.status('404');
  res.type('text/plain');
  res.send('404 - Page Not Found');
});

app.use(function() {
  res.status('500');
  res.type('text/plain');
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
  console.log('Server is running...');
});