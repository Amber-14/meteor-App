import { WebApp } from 'meteor/webapp';

WebApp.connectHandlers.use('/api/hello', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Motto');
});
