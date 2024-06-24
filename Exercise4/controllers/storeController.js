const express = require('express')

function getProducts(req, res){
    fetch('https://fakestoreapi.com/products?limit=3')
        .then((response) => {
                console.log(response.json()); 
                res.status(200); 
                res.json({"Result" : response.data})})
        //.then(json=>console.log(json))
}


function postProducts(req, res){
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                req.body
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }


function putProducts(req, res){
    fetch(`https://fakestoreapi.com/products/${req.params.id}`,{
            method:"PUT",
            body:JSON.stringify(
                req.body
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }


function deleteProducts(req, res){
    fetch(`https://fakestoreapi.com/products/${req.params.id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

module.exports = {getProducts, postProducts, putProducts, deleteProducts};