const express = require('express');
const { route } = require('express/lib/application');
const detail = require('../models/Detail');
const slider = require('../models/slider');
const about = require('../models/About');
const Signup = require('../models/SignUp');

const routes =express.Router();

routes.get("/",async (req,res)=>{
    const details =await detail.findOne({"_id":"64bea1377771eb15ea857cf0"});
    const slides = await slider.find();
   // console.log(slides);
    //console.log(details);
    const abouts = await about.find();
    res.render("index",{
        details:details,
        slides:slides,
        abouts:abouts
    });
});

routes.get('/overview',async (req,res)=>{
    const details =await detail.findOne({"_id":"64bea1377771eb15ea857cf0"});
    res.render("Overview",{
        details:details
    });
})
routes.get('/login',async (req,res)=>{
    const details =await detail.findOne({"_id":"64bea1377771eb15ea857cf0"});
    res.render("login",{
        details:details
    });
})
routes.get('/signup',async (req,res)=>{
    const details =await detail.findOne({"_id":"64bea1377771eb15ea857cf0"});
    res.render("signup",{
        details:details
    });
})
routes.post("/process-signup-form",async (request, response)=>{
    console.log("form is submitted");
    console.log(request.body);
    //save the data to db
    try {
        const data =await Signup.create(request.body)
        console.log(data);
        response.redirect("/");
        
    } catch (e) {
        console.log(e);
        response.redirect("/");
    }
})


module.exports = routes;