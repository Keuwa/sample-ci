var request = require('supertest')
var api = require('../index')



describe('API',function () {
  describe('Contact',function () {

    it('GET /contact should return list of contacts', function () {
      return request(api)
      .get('/contacts')
      .send()
      .expect(200);
    })

    it('GET/contact/:name should return the list of registered contact with that name',function () {
      return request(api)
      .get('/contacts/foo')
      .expect(200)
      .expect(function (res,err) {
        return res.body instanceof Array
      })
    })

      it('POST /contacts should create a new contact',function () {
        return request(api)
        .post('/contacts')
        .send({contacts: {name:'edward'}})
        .expect(200);
      })

      it('PUT /contacts/:name/:new update contact with name',function () {
        return request(api)
        .put('/contacts/foo/bar')
        .send()
        .expect(200);
      })

      it('DELETE /contact/:name should remove all contacts with the name',function () {
        return request(api)
        .delete('/contacts/foo')
        .send()
        .expect(200)
      })

  })
})
