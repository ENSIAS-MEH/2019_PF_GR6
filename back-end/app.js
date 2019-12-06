const express=require("express");
const app=express();
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.get("/users", (req,res)=>{
	  res.setHeader('Access-Control-Allow-Origin', '*');

	res.send(
		[
	    {
	      id: 0,
	      login: 'Lemine',
		  password: '$^^$',
		  type:"client"
	    },
	    {
	      id: 1,
	      login: 'Ilias',
		  password: '123',
		  type:"client"
		},
		{
			id:2,
			login:'Gregoire',
			password:'ç1A2Z',
			type:"collector"
		}
	  ]
	);
});
app.get("/posts",(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(
		[
			{
				date:new Date(),
				writer:"David",
				image:"Not yet",
				type:"sample garbages",
				delay:(2+"days")
			}
		]
	)
});
app.get("/",(req,res)=>{res.send("Gregoire");});
app.listen(1029,()=>{console.log("Connecting .."+1029);});
