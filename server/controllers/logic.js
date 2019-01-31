const Task = require('./../models/model');

module.exports = {

    showAllProducts: (request, response) => {
        Task.find({})
            .then(results => response.json({message:"Success", products:results}))
            .catch(err => {
                response.json(err);
            });
    },

    showProduct: (request, response) => {
        Task.findOne({_id:request.params.id})
            .then(result => response.json( {product:result} ))
            .catch(error => {
                response.json(error);
            });
    },

    createProduct: (request, response) => {
        Task.create(request.body)
            .then(results => {
                console.log("Product successfully created.")
                response.json({message:"success", product:results})
            })
            .catch(error => {
                console.log("Product creation unsuccessfull.")
                response.json(error);
            })
    },

    updateProduct: function(request, response) {
        Task.update({_id:request.params.id}, request.body, { "new": true, runValidators: true })
            .then(results => {
                console.log("Product update successful.");
                response.json({message:"success", product:results})
            })
            .catch(error => {
                console.log("Product update unsuccessfull.")
                response.json(error);
            })
    },
        

    deleteProduct: function(request, response){
                    Task.remove({_id:request.params.id})
                        .then(results => {
                            console.log("Product successfully deleted.");
                            response.json({message:"success", product:results})
                        })
                        .catch(error => {
                            console.log("Product delete unsuccessfull.")
                            response.json(error);
                        })
                 },
}