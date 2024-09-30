import mongoose from 'mongoose';

const userschema= mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  fullname:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  avatar:{
    type:String, //cloud image
    required:true,
  },
  CoverImage:{
    type:String, //cloud image
    required:true,
  },
  WatchHistory:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"video"
  },
  password:{
    type:String,
    required:[true,"password is require"],
  },
  refreshToken:{
    type:String
  }

},{
  Timestamp:true
})

export const user= mongoose.model("user",userschema)