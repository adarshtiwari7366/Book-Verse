const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // create db and collection
    const bookCollection=client.db("BookInventory").collection("books");
    //insert a book to db with post method
    app.post("/upload-book",async(req,res)=>{
        const data=req.body;
        const result=await bookCollection.insertOne(data);
        res.send(result);
    })
    //get all books for db
    // app.get("/all-books",async(req,res)=>{
    //     const books=await bookCollection.find();    
    //     const result=await books.toArray();
    //     res.send(result);
    // })
    //update a book data : patch or update methods
    app.patch("/book/:id",async(req,res)=>{
        const id=req.params.id;
        // console.log(id);
        const updateBookData=req.body;
        const filter={_id: new ObjectId(id)};
        const options={upesert:true};
        const updateDoc={
            $set:{
                ...updateBookData
            }
        }
        const result=await bookCollection.updateOne(filter,updateDoc,options);
        res.send(result);
    })
    //delete a book in db
    app.delete("/book/:id",async(req,res)=>{
        const id=req.params.id;
        const query={_id: new ObjectId(id)};
        const result=await bookCollection.deleteOne(query);
        res.send(result);
    })
    //find by category
    app.get("/all-books",async(req,res)=>{
        let query={};
        if(req.query?.category){
            query={category:req.query.category}
        }
        const result=await bookCollection.find(query).toArray();
        res.send(result);
    })
    //to get single book data
    app.get("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result= await bookCollection.findOne(filter);
      res.send(result);
    })
   
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})