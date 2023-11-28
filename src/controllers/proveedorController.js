const ProveedorService = require('../services/proveedorService')

const findAllProveedores = async(req,res,next)=>{
    try{
        const data=await ProveedorService.find()

        res.status(200).json({
            message:'OK',
            data
        })
    } catch(error){
        console.log(error)
        next(error)
    }
}

const createProveedor = async (req,res,next)=>{
    try{
        const {body}=req
        console.log(body)
        const data = await ProveedorService.create({
            cedula: body.cedula,
            numeroDocumento: body.numeroDocumento,
            tipoDocumento: body.tipoDocumento,
            tipoPersona: body.tipoPersona,
            razonSocial: body.razonSocial,
            primerApellido: body.primerApellido,
            segundoApellido: body.segundoApellido,
            primerNombre: body.primerNombre,
            otrosNombres:body.otrosNombres,
            departamento: body.departamento,
            ciudad: body.ciudad,
            direccion: body.direccion,
            celular: body.celular,
            telefono: body.telefono,
            correoElectronico: body.correoElectronico,
            correoFacturaElectronica: body.correoFacturaElectronica,
            actividadEconomica: body.actividadEconomica,
            tipoDocRepLegal: body.tipoDocRepLegal,
            numeroDocRepLegal: body.numeroDocRepLegal,
            nameRepLegal:body.nameRepLegal,
            apellidoRepLegal:body.apellidoRepLegal,
            observations:body.observations,
            createdAt:body.createdAt,
            userName:body.createdBy,
            solicitante:body.solicitante,
            docVinculacion:body.docVinculacion,
            docComprAntc:body.docComprAntc,
            docRut:body.docRut,
            docCcio:body.docCcio,
            docCrepL:body.docCrepL,
            docEf:body.docEf,
            docRefcom:body.docRefcom,
            docInfemp:body.docInfemp,
            docInfrl:body.docInfrl,
            docCerBan: body.docCerBan,
            docValAnt:body.docValAnt,
            docOtros:body.docOtros,
            agencia:body.agencia,
            tipoFormulario:body.tipoFormulario,  
        })
        res.status(201).json({
            message:'Created',
            data
        })
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

const findOneProveedor = async (req, res, next) => {
    try {
      const { params: { id } } = req;
      const data = await ProveedorService.findOne(id);
  
      res.status(200).json({
        message: 'OK',
        data
      })
    } catch (error) {
      next(error)
    }
  };

const deleteProveedor = async(req,res,next)=>{
    try{
        const {params:{id}}=req
        const data = await ProveedorService.remove(id)
        res.status(200).json({
            message:'Deleted',
            data
        })
    } catch(error){
        next(error)
    }
}

module.exports = {
    findAllProveedores,
    createProveedor,
    findOneProveedor,
    deleteProveedor
}