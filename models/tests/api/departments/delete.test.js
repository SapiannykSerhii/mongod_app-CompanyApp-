const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../../server')
const Department = require('../../../department.model')

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('Delete /api/departments', () => {

  before(async () => {
    const testDepOne = new Department({ 
      _id: '5d9f1140f10a81216cfd4408',
      name: 'Department #1' 
    });
    await testDepOne.save();
  
  });
  after(async () => {
    await Department.deleteMany();
  }); 

  it('Test_1__ /:id should delete one department by :id ', async () => {

    const res = await request(server).delete('/api/departments/5d9f1140f10a81216cfd4408');
    const deleteDep = await Department.findOne({ _id: '5d9f1140f10a81216cfd4408' })
    expect(res.status).to.be.equal(200)
    expect(deleteDep).to.be.null
  });

});