import express from "express";
import dotenv from "dotenv";
dotenv.config();

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

// add
app.post("/add",(req,res)=>{
    try {
        let num1 = +req.body.a 
        let num2 = +req.body.b 
        let total = num1+num2 
        res.status(200).json({msg: `Total is ${total}`})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})

// multiply

app.post("/mul",(req,res)=>{
    try {
        let num1 = Number(req.body.a) 
        let num2 = Number(req.body.b )
        let total = num1*num2 
        res.status(200).json({msg: `Total is ${total}`})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})


// compare greaete number


app.post("/compare",(req,res)=>{
    try {
        let num1 = Number(req.body.a) 
        let num2 = Number(req.body.b )
        if (num1 < num2 ){
        return res.status(200).json({msg: `Number ${num2} is greater`})
        }
        if (num2 < num1){
            return res.status(200).json({msg: `Number ${num1} is greater`})
        }
        res.status(200).json({msg:`Numbers are equal`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})


// even or odd 


app.post("/even",(req,res)=>{
    try {
        let num = Number(req.body.a) 

        if (num % 2 == 0 ){
            return res.status(200).json({msg:`${num} is Even`})
        }
        res.status(200).json({msg:`${num} is odd`})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})

// reverse a string
app.post("/reverse",(req,res)=>{
    try {
        let value = req.body.value

       function str(value){
         return value.split("").reverse().join("")

       }
       let final = str(value) 
       res.status(200).json({msg:`The reverse value is ${final}`})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})

// palindrome

app.post("/palindrome",(req,res)=>{
    try {
        let value = req.body.value

       function str(value){
         const reverse =  value.split("").reverse().join("")
         if (reverse === value){
            return res.status(200).json({msg:"The word is palindrome"})
         }else {
            return res.status(200).json({msg:"The word in not palindrome"})
         }

       }
       let final = str(value) 


       res.status(200).json({msg:`${final}`})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})


// vowels
app.post("/vowels",(req,res)=>{
    try {
        let value = req.body.value

        function countvowels(value){
            const vowels = "aeiouAEIOU"
            let count = 0

            for (let char of value){
                if(vowels.includes(char))
                    count++;

            }
            return count 
        }
       let value1 =  countvowels(value) 

       res.status(200).json({msg:`The number of vowels in string is ${value1}`})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})


// age valid

app.post("/agevalid",(req,res)=>{
    try {
        let value = +req.body.age
        if (value >= 18){
            return res.status(200).json({msg:"You are an adult"})
        }
        res.status(200).json({msg:`You are underage`})

        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})

// maximun nunber in an array
app.post("/maxarray",(req,res)=>{
    try {
        let value = req.body.arr 
        const max = Math.max(...value)
        res.status(200).json({msg:`The max number in an arrya is ${max}`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})

// celsius to farenheit 
app.post("/cels",(req,res)=>{
    try {
        let value = +req.body.celsius 
        let number = value * 9/5 + 32 
        res.status(200).json({msg:`farenheit value of given celsius is ${number}`})
       
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

    }
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});