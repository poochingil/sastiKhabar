const express= require('express');
const { default: axios } = require('axios');
const newsRouter = express.Router();



newsRouter.get('',async(req,res)=>{
   
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=457e46ba535848e5aa2bc922f1c72dcc`);
        // console.log(newsAPI.data)
        res.render('news',{news:newsAPI.data});
    } catch (error) {
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else if(error.request){
            console.log(error.request);
        }else{
            console.error('error',error.message);
        }
    }
})
module.exports =newsRouter;

newsRouter.post('',async(req,res)=>{
   let search= req.body.search;
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2021-09-08&sortBy=popularity&apiKey=457e46ba535848e5aa2bc922f1c72dcc`);
        // console.log(newsAPI.data)
        res.render('newsSearch',{news:newsAPI.data});
    } catch (error) {
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else if(error.request){
            console.log(error.request);
        }else{
            console.error('error',error.message);
        }
    }
})
module.exports =newsRouter;

