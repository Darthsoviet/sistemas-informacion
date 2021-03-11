const login=(email,passwd,callback)=>{
   let err
   let bdData;
   if(email=="jhon@doe.com" && passwd=="1234"){   
      bdData={
         email:"email"
      }
   }else{
      err={mensaje:"error"}
   }
   callback(err,bdData);
}

exports.login=login;