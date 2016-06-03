var request = require('supertest');
var api = require('../index');

describe('API', function(){
    describe('Contacts', function(){
        it('GET /contacts should return the list of registered contacts', function(){
            return request(api)
            .get('/api/contacts')
            .send()
            .expect(200);
        });

        it('GET /contacts/:name should return the list of registered contacts with the same name', function(){
            return request(api)
            .get('/api/contacts/foo')
            .send()
            .expect(200)
            .expect(function(res, err){
                return res.body instanceof Array
            });
        });

        it('GET /contacts/:name should return  a list even when no contact match', function(){
            return request(api)
            .get('/api/contacts/none')
            .send()
            .expect(200)
            .expect(function(res, err){
                return res.body instanceof Array
            });
        });


        it('POST /contacts should create a new contact', function(){
            return request(api)
            .post('/api/contacts')
            .send({
                contact: {
                    name: "edward"
                }
            })
            .expect(200);
        });

        it('POST /contacts should return a 422 when body does not contains valid keys', function(){
            return request(api)
            .post('/api/contacts')
            .send({foo: 'bar'})
            .expect(422);
        });

        it('PUT /api/contacts/:name/:new should update all contacts with the same name', function(){
            return request(api)
            .put('/api/contacts/foo/bar')
            .send()
            .expect(200);
        });

        it('DELETE /api/contact/:name should remove all contacts with the same name', function(){
            return request(api)
            .delete('/api/contacts/foo')
            .send()
            .expect(200);
        });
    });
});
