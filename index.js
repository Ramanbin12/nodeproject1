const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
// global.app=express();
const app=express()
module.exports=app
app.use(cors())
app.use(bodyparser.json())
require("./database/datasource")
require("./models/user.model")
require("./models/role.model")
require("./router/rolerouter")
require("./router/userouter")
app.listen(2000,()=>{
    console.log("server connected")
})