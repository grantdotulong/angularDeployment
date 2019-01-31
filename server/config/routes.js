const Controller = require("./../controllers/logic");
const path = require('path');
module.exports = (app) => {
    app
        .get('/productsapi', Controller.showAllProducts)//show all tasks
        .get('/productsapi/:id', Controller.showProduct)//show task w/ id
        .post('/productsapi', Controller.createProduct)//create task
        .put('/productsapi/update/:id', Controller.updateProduct)//update task
        .delete('/productsapi/delete/:id', Controller.deleteProduct)//delete task w/ id
        //this route will be triggered if any of the routes above did not match
        .all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
          })
}