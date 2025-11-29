import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mail from "./utils/mail.js"
const app = express();
const PORT = process.env.PORT ;
app.use(express.json())
app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "hello this is cfi block code" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});



app.post("/mail",async (req,res)=>{
    try {
        
   
    let {from,pwd,to,subject,text} = req.body 
    console.log(from,pwd,to,subject,text);
    let sendmail = mail(from,pwd,to,subject,text) 
    console.log(sendmail);
    res.status(200).json(sendmail)
     } catch (error) {
        console.log(error);
        
    }
})











app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});