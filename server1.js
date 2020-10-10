// const http = require('http');

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//   res.write('<h1>Hello Node!</h1>');
//   res.end('<p>Hello Server!</p>');
// })
//   .listen(8080, () => { // 서버 연결
//     console.log('8080번 포트에서 서버 대기 중입니다!');
//   });
const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer((request, response) => {
  const path = url.parse(request.url, true).pathname; // url에서 path 추출
  if (request.method === 'GET') { // GET 요청이면
    if (path === '/about') { // 주소가 /about이면
      response.writeHead(200,{'Content-Type':'text/html'}); // header 설정
      fs.readFile(__dirname + '/about.html', (err, data) => { // 파일 읽는 메소드
        if (err) {
          return console.error(err); // 에러 발생시 에러 기록하고 종료
        }
        response.end(data, 'utf-8'); // 브라우저로 전송
      });
    } else if (path === '/') { // 주소가 /이면
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname + '/daum_map.html', (err, data) => {
        if (err) {
          return console.error(err);
        }
        response.end(data, 'utf-8');
      });
    } else { // 매칭되는 주소가 없으면
      response.statusCode = 404; // 404 상태 코드
      response.end('주소가 없습니다');
    }
  }
}).listen(8080);