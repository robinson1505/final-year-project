const Lecturer = require("../models/lecturer.model");

exports.findAllLecturers = (req,res) => {
    Lecturer.getAllLecturers((error,data) =>{
        if(error){
            res.status(500).send({
                message:error.message || "Some error occurred while retrieving lecturers"
            })
        }else res.send(data);

    })
}

exports.findLecturer = (req,res) =>{
    let id = req.params.lecturerId
    Lecturer.getLecturer(id,(error,data) =>{
        if(error){
            if(error.kind === "not_found"){
                res.status(404).send({
                    message:`Not found lecturer with id ${id}`
                })
            }
            else{
                res.status(500).send({
                    message:"Error while retrieving lecturer with id" + id
                })
            }
        }
        else res.send(data)
    })
}
