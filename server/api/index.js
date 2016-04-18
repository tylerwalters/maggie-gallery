import Router from 'koa-router';
import photos from './photos';
import users from './users';

const api = new Router({prefix: '/api/v1'});

api
  .use('/photos', photos.routes())
  .use('/users', users.routes());

export default api;