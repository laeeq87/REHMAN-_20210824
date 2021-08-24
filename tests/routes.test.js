const request = require('supertest')
const app = require('../src/app');
const CategoryController = require("../src/controllers/categoriesController")
const sampleVideo = './samples/earth-3.mov';
const sampleImg = './samples/test-img.png';

describe('Api End Points', () => {
  
  it('should create or get categories from system', async () => {
    const res = await CategoryController.createCategories()
    expect(res).toEqual(false)
  }),

  it('should fetch all categories', async () => {
    const res = await request(app).get('/api/category');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('should fetch all videos', async () => {
    const res = await request(app).get('/api/video/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('upload video', async () => {
    const res = await request(app).post('/api/video/upload')
    .send({
        title: 'Test Video',
        category: 1,
        video: sampleVideo
    });
    console.log("RES ===>", res.body);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });


  it('upload Image error', async () => {
    const res = await request(app).post('/api/video/upload')
    .send({
        title: 'Test Video',
        category: 1,
        video: sampleImg
    });
    expect(res.body.code).toEqual(400);
  });

})