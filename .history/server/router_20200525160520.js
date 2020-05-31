const express = require('express');
const router =express.Router();

router.get('/',(req,res)=>{
  res.send('servser is up running');
});