const request = require('supertest');
const app = require('../src/app');
const fs = require('mz/fs');
const CategoryController = require("../src/controllers/categoriesController");

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

  const filePath = `${__dirname}/samples/earth-3.mov`;
   it('should upload the test file to our project', async () => {
    // Test if the test file is exist
    const fileExists = await fs.exists(filePath);
    if (!fileExists) throw new Error('file does not exist');

        let res = await request(app)
              .post('/api/video/upload')
              .field('title', 'Test Video')
              .field('category', 1)
              .attach('video', filePath).catch(err => console.log('ERR===>', err));

            const { message } = res.body;
            expect(res.statusCode).toEqual(200);
            expect(message).toBe('video uploaded successfully ');
            expect(typeof filePath).toBeTruthy();
            // store file data for following tests
            testFilePath = filePath;
    })


  const filePathImg = `${__dirname}/samples/test-img.png`;
   it('should upload the test file to our project', async () => {
    // Test if the test file is exist
    const fileExists = await fs.exists(filePathImg);
    if (!fileExists) throw new Error('file does not exist');

        let res = await request(app)
              .post('/api/video/upload')
              .field('title', 'Test Video')
              .field('category', 1)
              .attach('video', filePathImg).catch(err => console.log('ERR =>', err));

            const { message, code } = res.body;

            expect(res.statusCode).toEqual(200);
            expect(code).toEqual(400);
            expect(message).toBe('Mime type is not supported');
            expect(typeof filePath).toBeTruthy();
            // store file data for following tests
            testFilePath = filePath;
    })
    
})