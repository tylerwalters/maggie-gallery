import koa from 'koa';
import api from './api';

const app = new koa();

app.use(api.routes());

app.listen(8080);
console.log('listening on port 8080');