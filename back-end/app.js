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
		  type:"recruiter"
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
			type:"provider"
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
app.get("/messages/:user/:type",(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	if(req.params.user==="Lemine" && req.params.type==="provider"){
		res.send(
			[
				{
					id: 1,
					primary: 'James',
					secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
					person: null,
				  },
				  {
					id: 2,
					primary: 'Renard',
					secondary: `Do you have a suggestion for a good present for John on his work
					  anniversary. I am really confused & would love your thoughts on it.`,
					person: null,
				  },
				  {
					id: 3,
					primary: 'Tomas',
					secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
					person: null,
				  }
				  
			]
		)
	}
	else
	res.send(" yew : "+req.params.user+", type : "+req.params.type);
})
app.get("/",(req,res)=>{res.send("Micro-services Big Father");});
app.listen(1029,()=>{console.log("Connecting .."+1029);});
