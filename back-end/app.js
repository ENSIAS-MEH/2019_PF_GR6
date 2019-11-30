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
	      password: '$^^$'
	    },
	    {
	      id: 1,
	      login: 'Ilias',
	      password: '123'
	    }
	  ]
	);
});
app.get("/",(req,res)=>{res.send("Gregoire");});
app.listen(1029,()=>{console.log("Connecting .."+1029);});
