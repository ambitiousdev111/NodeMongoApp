var default_roles = [{

  "name" : "superAdminOfApp",
  "uniqueName": "super_admin_of_app",
  "permissions": ['all'],
  "scopes": ['all']
},
{
  "name" : "Admin",
  "uniqueName": "admin",
  "permissions": [],
  "scopes": []
},{
  "name" : "Employee",
  "uniqueName": "employee",
  "permissions": [],
  "scopes": []
},
{
  "name" : "Customer",
  "uniqueName": "customer",
  "permissions": [],
  "scopes": []
}]

module.exports = default_roles;