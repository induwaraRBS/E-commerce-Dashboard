const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
        resp.send("Welcome to the API");
      });

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  resp.send(result);
});

app.post("/login", async(req, resp) => {
        if(req.body.password && req.body.email){

                let user = await User.findOne(req.body).select("-password");
                if(user){
                        resp.send(user)
                }
                else{
                        resp.send({result:"No user found"})
                }
        }else{
                resp.send({resul:"No User found"})
        }
        resp.send(user); 
});

app.listen(5500,()=>{
        console.log("Server is running on port 5500");
});
