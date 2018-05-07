require('should');
const supertest = require('supertest');
const User = require('../app/models/user.model');
const app = require('../app/server');
const request = supertest(app);
let id =0;

describe('#USERS', () =>
{
    before(async () => 
    {
        await User.remove({});
    });
    it('#POST insert item in collection users', () => 
    {
        return request
            .post('/users')
            .send(
            {
                firstName: "Yuli",
                lastName: "velez",
                documentType: "cc",
                documentNumber: "0343",
                genre: "Femal",
                email: "nata@gmail.com",
                password: "2345"
              
            })
            .expect(200)
            .then(res => 
            {
                
                id = res.body._id;
                console.log(id);

            })
    });
})

describe('#USERS', () =>
{
    it('#POST if insert a email that exists, obtain status 404', () => 
    {
        return request
            .post('/users')
            .send(
            {
                firstName: "Yuli",
                lastName: "velez",
                documentType: "cc",
                documentNumber: "0343",
                genre: "Femal",
                email: "nata@gmail.com",
                password: "2345"
              
            })
            .expect(404)
            .then(res => 
            {
                console.log(res.body);

            })
    });
})


describe('#USERS', () =>
{
    it('#GET users list from collection', () => 
    {
        return request
            .get('/users')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res => 
            {
                //console.log(res.body);
            })
    });
})


describe('#USERS', () =>
{
    it('#GET if search un id that not exists obtain status 404', () => 
    {
        return request
            .get('/users/5aee7b57fae8090e466f6399')
            .expect(404)
            .then(res => 
            {
                console.log(res.body);
            })
    });
})


if(id!=0)
{
    describe('#USERS', () =>
    {
        it('#GET user with id=id', () => 
        {
            return request
                .get(`/users/${id}`)
                .expect(200)
                .then(res => 
                {
                    console.log(res.body);
                })
        });
    })
}

describe('#USERS', () =>
{
    it('#POST if not insert datos obtain a status:404', () => 
    {
        return request
            .post('/users')
            .send(
            {
               
            })
            .expect(404)
            .then(res => 
            {
                console.log(res.body);
            })
    });
})

if(id!=0)
{
    describe('#USERS', () =>
    {
        it('#PUT update user with id=id', () => 
        {
            return request
                .put(`/users/${id}`)
                .send(
                {
                    firstName: "Yulian",
                    lastName: "velez",
                    documentType: "cc",
                    documentNumber: "0343",
                    genre: "Femal",
                    email: "yuliswer@gmail.com",
                    password: "2345"
                
                })
                .expect(200)
                .then(res => 
                {
                    console.log(id);
                    name = res.body.firstName;
                    console.log(res.body);

                })
        });
    })
}

describe('#USERS', () =>
{
    it('#DELETE user with id=id', () => 
    {
        return request
            .delete(`/users/${id}`)
            .expect(200)
            .then(res => 
            {
                console.log(res.body);
            })
    });
})

