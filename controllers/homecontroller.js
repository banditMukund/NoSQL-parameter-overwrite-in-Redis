module.exports = app => {



	var client = require('./../config/redisdb.js');
	console.log("something");

	app.post("/enteruser", async(req, res) => {
		try {
			console.log("In controller post");
			console.log(req.body);
			console.log(req.body.name);
			console.log(req.body.username);
			console.log(req.body.password);
			console.log(req.body.description);
			
			//client.connect();
			//client.on('ready', () => {
			//	console.log('Redis Connected!');	
			//});

			 var name1=String(req.body.name);
			 var username1 = req.body.username;
			 var password1 = req.body.password;
			 var desc1 = req.body.description;
			console.log("checkpoint1");
			//var insdata = {"name":name1, "username":name1, "password":password1, "description":desc1}
			
			//await client.HSET('user', 'name', name1, function(err, reply) { console.log(reply); });
			//await client.hSet("user", "name", "asdf");
			//await client.json.set('user', '.', insdata);
			await client.HSET(username1, {
	  			'name': name1,
	  			'password': password1,
	  			'description': desc1,
	  			'role': 'user'
			});

			console.log("set done");
			
			// var data = client.get("framework", (err, reply) => {
	    	//     if (err) 
	    	//     	throw err;
	    	//     if(reply)
	    	//     {
	    	//     	console.log("there is reply");
		    // 	    console.log(reply);
		    // 	}
		    // 	else
		    // 	{
		    // 		console.log("something happened");
		    // 	}
		    // });

			// const data = await client.get("framework").then((data) => {
	      	// 	return data;
	    	// });

		    console.log("get response = ");
		    res.status(200).json({message: "user details stored"});
		} catch(err) {
			res.status(500).json({message: "Some kind of error"});
		}
	});

	app.post("/getdetail", async(req, res) => {
		try {
			console.log("In controller get");
			console.log(req.body);

			const data = String(await client.HGETALL(req.body.uname).then((data) => {
	      		return data;
	    	}));
	    	console.log("got the data");
	    	// await client.HGETALL('asdf', function(err, object) {
	    	// 	console.log(object);
	    	// })
	    	console.log(data);

	    	res.status(200).json({message: data});
	    } catch(err) {
	    	res.status(500).json({message: "Some kind of error"});
	    }

	});

	app.post("/trial", async(req, res) => {
		console.log("in trial");
		console.log(req.body);
		console.log(req.body.key);
		try {
			console.log("before set");
			await client.set(req.body.key, "default");
			console.log("after set");
			res.status(200).json({message: "its set"});
		} catch(err) {
			res.status(500).json({message: "Some kind of error"});	
		}
	    
	});

	app.post("/trial2", async(req, res) => {
		try {
			console.log(req.body);
			console.log(req.body.name);
			console.log(req.body.username);
			console.log(req.body.password);
			console.log(req.body.description);

			var name1=String(req.body.name);
			var username1 = req.body.username;
			var password1 = req.body.password;
			var desc1 = req.body.description;
			
			await client.set(username1, JSON.stringify({
	  			'name': name1,
	  			'password': password1,
	  			'description': desc1,
	  			'role': 'user'
			}));

			res.status(200).json({message: "details stored"});
		} catch(err) {
			res.status(500).json({message: err.message});
		}
	});

};
