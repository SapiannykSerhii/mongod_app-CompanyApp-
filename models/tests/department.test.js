const Department = require('../department.model')
const expect = require('chai').expect
const mongoose = require('mongoose');

describe('Department', () => {
  after(() => {
    mongoose.models = {};
  });

  it('Test_1__should throw an error if no "name" arg', () => {
    const dep = new Department({}) // create new Department, but don't set `name` attr value

    dep.validate(err => {
      expect(err.errors.name).to.exist;
    })
  });

  it('Test_2__should thow an error if "name" is a not string', () => {

    const cases = ({}, [])
    for(let name of cases){
      const dep = new Department({name})
    
      dep.validate(err => {
        expect(err.errors.name).to.exist;
      })
    }
  });

  it('Test_3__should thow an error if "name" is too short or too long', () => {

    const cases = ['Abc', 'abcd', 'Lorem Ipsum, Lorem Ip']  // we test various cases, some of them are too short, some of them are too long
    for(let name of cases) {
      const dep = new Department({ name })

      dep.validate(err => {
        expect(err.errors.name).to.exist
      })
    }
  });

  it('Test_4__should thow an error if "name" is okej', () => {

    const cases = ['Managment', 'Human Resources']
    for(let name of cases) {
      const dep = new Department({ name })

      dep.validate(err => {
        expect(err).to.not.exist
      })
    }
  });

})