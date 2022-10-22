const Contacto = require("../model/Contacto");

//Mostrar
module.exports.mostrar = (req, res) => {
    Contacto.find({}, (error, contactos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los contactos'
            })
        }
        //console.log(contactos)
        return res.render('index', {contactos: contactos});
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const contacto = new Contacto({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        imagen: req.body.imagen,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    })
    /*
    contacto.save(function(error,contacto){
        console.log("Aqui--> 1")
        if(error){
            console.log("Aqui--> 2")
            return res.status(500).json({
                message: 'Error al crear el contacto'
            })
        }
        console.log("Aqui--> 3")
        res.redirect('/')
        return
        console.log("Aqui--> 4")
    })
    */

    contacto.save(function (err) {
        if (err) {
          res.status(400).json({
            message: err,
            ok: false,
          });
        } else {
          res.json({
            ok: true,
            data: "OK",
          });
        }
      });
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const apellido = req.body.apellido_editar
    const imagen = req.body.imagen_editar
    const email = req.body.email_editar
    const telefono = req.body.telefono_editar
    const direccion = req.body.direccion_editar
    Contacto.findByIdAndUpdate(id, {nombre, apellido, imagen, email, telefono, direccion}, (error, contacto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el contacto'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Contacto.findByIdAndRemove(id, (error, contacto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el contacto'
            })
        }
        res.redirect('/')
    })
}

