
Array.prototype.sortByUserAge = function () 
{

	this.sort((a, b) => a.userAge - b.userAge);
}

Array.prototype.sortByUserName = function () 
{

	this.sort((a, b) => a.userUserName - b.userUserName);
}

let users =[

];


class User {

	constructor (options)
	{
		this.userFirstName = options.userFirstName;
		this.userLastName = options.userLastName;
		this.userFullName = options.userLastName + '-' + options.userFirstName;
		this.userAge = 0;
	}

	static addProduct(options) {
		users.push(
			Object.assign(
			new User(options)
			,options) 
			)
	} 

}

User.addProduct({
	
	userFirstName:'dmitrii',
	userLastName:'dmitriev',
	userAge:25,
	isPidor:false,

})

User.addProduct({
	
	userFirstName:'valexey',
	userLastName:'dolmatov',
	userAge:253,
	isPidor:true,
	isReper:true

})


User.addProduct({
	
	userFirstName:'jgjgh',
	userLastName:'dolmatov',
	userAge:2,
	isPidor:true,
	isReper:true

})
User.addProduct({
	
	userFirstName:'Alexey',
	userLastName:'asdasd',
	userAge:23,
	isPidor:true,
	isReper:true

})

User.addProduct({
	
	userFirstName:undefined,

})



users = users.filter(function (e) {
	return !!e.userFirstName != false;
});

users.sort(function(a, b) {

	var nameA = a.userFirstName; // ignore upper and lowercase
	var nameB = b.userFirstName; // ignore upper and lowercase

	if (nameA < nameB) {
	return -1;
	}
	if (nameA > nameB) {
	return 1;
	}
	return 0;
});


console.table(users);



