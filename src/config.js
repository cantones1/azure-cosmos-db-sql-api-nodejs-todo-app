const config = {}

config.host = process.env.HOST || 'todoex-server.mongo.cosmos.azure.com'
config.authKey =
  process.env.AUTH_KEY ||
  'wnEabJUu8imNb6ufl8tKkTvPJlS4GL1MNgqBVGB3GI9deYFv8fDPxPt8ko1zW5w854WJoBtloiukACDb3LA6jg=='
config.databaseId = 'ToDoList'
config.containerId = 'Items'

if (config.host.includes('https://localhost:')) {
  console.log('Local environment detected')
  console.log(
    'WARNING: Disabled checking of self-signed certs. Do not have this code in production.'
  )
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  console.log(
    `Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`
  )
}

module.exports = config
