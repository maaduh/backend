const Annotations = require('../models/AnnotationData');

module.exports = {
    async update(request, response){
        const { id } = request.params;
        const { autor} = request.body;

        const annotation = await Annotations.findOne({ _id : id });
        if(autor){
            annotation.autor = autor;
            await annotation.save();
        }

        return response.json(annotation);
    },
    async update(request, response){
        const { id } = request.params;
        const { titulo} = request.body;

        const annotation = await Annotations.findOne({ _id : id });
        if(titulo){
            annotation.titulo = titulo;
            await annotation.save();
        }

        return response.json(annotation);
    }
}
