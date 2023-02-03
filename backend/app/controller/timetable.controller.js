const Timetable = require("../models/timetable.models");

exports.findAllTimetable = (req,res) => {
    Timetable.getAllTimetable((error,data) =>{
        if(error){
            res.status(500).send({
                message:error.message || "Some error occurred while retrieving timetable"
            })
        }else res.send(data);

    })
}

exports.findTimetable = (req,res) =>{
    let id = req.params.timetableId
    Timetable.getTimetable(id,(error,data) =>{
        if(error){
            if(error.kind === "not_found"){
                res.status(404).send({
                    message:`Not found timetable with id ${id}`
                })
            }
            else{
                res.status(500).send({
                    message:"Error while retrieving timetable with id" + id
                })
            }
        }
        else res.send(data)
    })
}