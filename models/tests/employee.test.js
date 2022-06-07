const Employee = require('../employee.model')
const expect = require('chai').expect
const mongoose = require('mongoose');


describe('Employee', () => {
  after(() => {
    mongoose.models = {};
  });

  it('Test_1__should throw an error if is no of arg "firstName", "lastName", "department" ', () => {

    const cases = [
      { firstName: 'John' }, { lastName: 'Doe' }, { department: 'IT' },
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'John', department: 'IT' },
      { lastName: 'Doe', department: 'IT' },
    ];

    for (let worker of cases) {
      const emp = new Employee(worker)

      emp.validate(err => {
        expect(err.errors).to.exist;
      })
    }
  });

  it('Test_2__should throw an error if "firstName" is not string', () => {

    const cases = ({}, [])

    for (let firstName of cases) {
      const emp = new Employee({
        firstName,
        lastName: 'Doe',
        department: 'IT'
      })

      emp.validate(err => {
        expect(err.errors).to.exist
      })
    }
  });

  it('Test_3__should throw an error if "lastName" is not string', () => {

    const cases = ({}, [])

    for(let lastName of cases) {
      const emp = new Employee({
        firstName: 'John',
        lastName,
        department: 'IT'
      })

      emp.validate(err => {
        expect(err.errors).to.exist
      })
    }
  });

  it('Test_4__should thow an error if "department" is not string', () => {

    const cases = ({}, [])

    for(let department of cases) {
      const emp = new Employee({
        firslName: 'John',
        lastName: 'Doe',
        department
      })

      emp.validate(err => {
        expect(err.errors).to.exist
      })
    }
  });

  it('Test_5__should thow an error if data is okej', () => {

    const emp = new Employee({
      firstName: 'John',
      lastName: 'Doe',
      department: 'IT'
    })

    emp.validate(err => {
      expect(err).to.not.exist
    })
  });


});