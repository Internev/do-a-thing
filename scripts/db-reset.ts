import { exec } from 'child_process'
import 'dotenv/config'

const dropAndCreateDB = () => {
  const user = 'thingbot'
  const host = 'localhost'
  const port = '5433'
  const dbName = 'do_a_thing'
  process.env.PGPASSWORD = process.env.DATABASE_PW

  const dropCommand = `psql -U ${user} -h ${host} -p ${port} -d postgres -c "DROP DATABASE IF EXISTS ${dbName};"`
  const createCommand = `psql -U ${user} -h ${host} -p ${port} -d postgres -c "CREATE DATABASE ${dbName};"`

  exec(dropCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error dropping database: ${error}`)
      return
    }
    console.log('Database dropped successfully.')

    exec(createCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error creating database: ${error}`)
        return
      }
      console.log('Database created successfully.')
    })
  })
}

dropAndCreateDB()
