const Programs = require("../models/programs.model");

exports.findAllPrograms = (req,res) => {
    Programs.getAllPrograms((error,data) =>{
        if(error){
            res.status(500).send({
                message:error.message || "Some error occurred while retrieving programs"
            })
        }else res.send(data);

    })
}

exports.findProgram = (req,res) =>{
    let id = req.params.programId
    Programs.getProgram(id,(error,data) =>{
        if(error){
            if(error.kind === "not_found"){
                res.status(404).send({
                    message:`Not found program with id ${id}`
                })
            }
            else{
                res.status(500).send({
                    message:"Error while retrieving program with id" + id
                })
            }
        }
        else res.send(data)
    })
}