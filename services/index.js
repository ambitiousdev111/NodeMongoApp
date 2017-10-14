module.exports = {
  user    : require('./users/userService'),
  branch    : require('./branch/branchService'),
  seeder 	: require('./seeders/seederService'),
  plansSeeder  : require('./seeders/plansSeederService'),
  rolesSeeder : require('./seeders/rolesSeederService'),
  superAdminOfAppSeeder : require('./seeders/superAdminOfAppSeederService')
};