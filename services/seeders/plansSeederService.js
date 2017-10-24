var default_plans = require('../../db.seeds/default_plans')
var Plan = require('../../models/plan')

module.exports = {

seed_plans: (req, res) => {
        
    var i;
    for(i = 0; i < default_plans.length; i++) {
        var newPlan = new Plan();
        newPlan.name = default_plans[i].name;
        newPlan.uniqueName = default_plans[i].uniqueName;
        newPlan.validityInDays = default_plans[i].validityInDays;
    }
  //       var cb = (response) => {
		// 	if(response.status === 'success'){
		// 		// do something with data
		// 		res.send(response);
		// 	} else {
		// 		// do something with error
		// 		res.send(response);
		// 	}
		// }
       
  //       dcl.create(data, userModel, cb);
}

};