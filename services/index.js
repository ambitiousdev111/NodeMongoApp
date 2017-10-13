module.exports = {
  user    : require('./users/userService'),
  seeder 	: require('./seeders/seederService'),
  rolesSeeder : require('./seeders/plansSeederService'),
  plansSeeder : require('./seeders/rolesSeederService'),
  superAdminOfAppSeeder : require('./seeders/superAdminOfAppSeederService')
};