const supertest = require('supertest');
const request = supertest('http://localhost:3000');
require('should');
let id =0;


describe('#PETS', () =>
{
    it('#GET pets list from db', () => 
    {
        return request
            .get('/pets')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res => 
            {
                //console.log(res.body);
            })
    });
})


describe('#PETS', () =>
{
    it('#GET if search un id that not exists obtain status 404', () => 
    {
        return request
            .get('/pets/5aee7b57fae8090e466f6399')
            .expect(404)
            .then(res => 
            {
                console.log(res.body);
            })
    });
})

describe('#PETS', () =>
{
    it('#POST insert item in collection pets', () => 
    {
        return request
            .post('/pets')
            .send(
            {
                name: 'pink',
                age: '2',
                clasification: 'dog',
                race: 'Pinsher',
                genre: 'femal'
              
            })
            .expect(200)
            .then(res => 
            {
                
                id = res.body._id;
                console.log(id);

            })
    });
})

describe('#PETS', () =>
{
    it('#GET pet with id=id', () => 
    {
        return request
            .get(`/pets/${id}`)
            .expect(200)
            .then(res => 
            {
                console.log(res.body);
            })
    });
})


describe('#PETS', () =>
{
    it('#POST if not insert datos obtain a status:404', () => 
    {
        return request
            .post('/pets')
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

describe('#PETS', () =>
{
    it('#PUT update pet with id=id', () => 
    {
        return request
            .put(`/pets/${id}`)
            .send(
            {
                name: 'pinks',
                age: '2',
                clasification: 'dog',
                race: 'Pinsher',
                genre: 'femal'
              
            })
            .expect(200)
            .then(res => 
            {
                
                name = res.body.name;
                console.log(name);

            })
    });
})

describe('#PETS', () =>
{
    it('#DELETE pet with id=id', () => 
    {
        return request
            .delete(`/pets/${id}`)
            .expect(200)
            .then(res => 
            {
                console.log(res.body);
            })
    });
})

