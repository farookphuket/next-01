import mongoose from 'mongoose'
import nextConfig from '../next.config'

const connection = {}


async function dbConnect(){
    if(connection.isConnected) return 

    const db = await mongoose.connect(nextConfig.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    connection.isConnected = db.connections[0].readyState
    console.log(`connection ${connection.isConnected}`)
}


export default dbConnect
