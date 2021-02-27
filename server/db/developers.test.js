const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const dev = require('./developers')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

// getDevelopers for use in test environment
// not wanting to create dependencies on get and delete functions
// function getDevelopers () {
//   return testDb('developers').select()
// }

describe('Getting developers', () => {
  it('getDevelopers returns all developers', () => {
    return dev.getDevelopers(testDb)
      .then(devs => {
        expect(devs).toHaveLength(3)
        expect(devs[0].id).toBe(1)
        expect(devs[0].firstName).toMatch('multi')
        return null
      })
  })
})

describe('Join developers and Projects', () => {
  it('Will return developer and project data together', () => {
    const id = 1
    return dev.getDeveloperById(id, testDb)
      .then(dev => {
        expect(dev.projects).toHaveLength(2)
        expect(dev.firstName).toMatch('multi')
        expect(dev.projects[1].projectId).toBe(2)
        expect(dev.languages).toHaveLength(2)
        expect(dev.languages[0].languageName).toMatch('JS')
        expect(dev.languages).toHaveLength(2)
        expect(dev.platforms[0].platformName).toMatch('Web')
        expect(dev.platforms).toHaveLength(2)
        return null
      })
  })
})
