const Modules = require("../models/modules.model");

exports.findAllModules = (req,res) => {
    Modules.getAllModules((error,data) =>{
        if(error){
            res.status(500).send({
                message:error.message || "Some error occurred while retrieving modules"
            })
        }else res.send(data);

    })
}

exports.findModule = (req,res) =>{
    let id = req.params.moduleId
    Modules.getModule(id,(error,data) =>{
        if(error){
            if(error.kind === "not_found"){
                res.status(404).send({
                    message:`Not found module with id ${id}`
                })
            }
            else{
                res.status(500).send({
                    message:"Error while retrieving module with id" + id
                })
            }
        }
        else res.send(data)
    })
}