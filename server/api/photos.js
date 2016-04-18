import Router from 'koa-router';
import {db} from '../../config/secrets/db';

const photos = new Router();

function fetch(ctx, next) {
  return db.one("select * from photos where id = ${id}", ctx.params)
    .then(function (data) {
      ctx.photo = data;
      return next();
    })
    .catch(function (error) {
      ctx.body = error;
    });
}

photos.get('/', (ctx) => {
  var params = ctx.query,
    query = "select ${fields^} from photos",
    whereSeparator = "";

  if (!params.fields) {
    params.fields = '*';
  }

  if (params.tags || params.people) {
    query += "where ";
  }

  if (params.tags) {
    query += "tags = ${tags}";
    whereSeparator = " AND ";
  }

  if (params.people) {
    query += whereSeparator + "people = ${people}";
  }

  if (params.sort) {
    query += " order by ${sort^}";
  }

  if (params.limit) {
    query += " limit ${limit^}";
  }

  if (params.offset) {
    query += " offset ${offset^}";
  }

  return db.many(query, params)
    .then(function (data) {
      ctx.body = data;
    })
    .catch(function (error) {
      ctx.body = error;
    });
});

photos.get('/:id', fetch, ctx => {
  ctx.body = ctx.photo;
});

photos.post('/', ctx => {
  return db.one("insert into photos(date, title, description, dimensions, width, height, filename, extension, layout) values(${date}, ${title}, ${description}, ${dimensions}, ${width}, ${height}, ${filename}, ${extension}, ${layout}) returning id", ctx.request.body)
    .then(function (data) {
      ctx.body = data;
    })
    .catch(function (error) {
      ctx.body = error;
    });
});

photos.put('/:id', fetch, ctx => {
  Object.assign(ctx.photo, ctx.request.body);

  return db.one("update photos set title=${title}, description=${description}, dimensions=${dimensions}, width=${width}, height=${height}, filename=${filename}, extension=${extension}, layout=${layout} where id=${id} returning id", ctx.photo)
    .then(function (data) {
      ctx.body = data;
    })
    .catch(function (error) {
      ctx.body = error;
    });
});

photos.delete('/:id', ctx => {
  return db.one("delete from photos where id = ${id} returning id", ctx.params)
    .then(function (data) {
      ctx.body = data;
    })
    .catch(function (error) {
      ctx.body = error;
    });
});


export default photos;