import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanages';
import orphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

export default {
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });
        // return response.json(orphanages);                           // essa versão envia os dados direto do banco de dados para a view
        return response.json(orphanageView.renderMany(orphanages));    // essa versão envia os dados para um filtro antes de enviar para a view
    },
    async show(request: Request, response: Response) {
        const { id } = request.params;
        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images'],
        });
        // return response.json(orphanage);                     // essa versão envia os dados direto do banco de dados para a view
        return response.json(orphanageView.render(orphanage));  // essa versão envia os dados para um filtro antes de enviar para a view
    },
    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;
        const orphanagesRepository = getRepository(Orphanage);

        const requestImages = request.files as Express.Multer.File[]; // cambiarrinha

        const images = requestImages.map(images => {
            return { path: images.filename }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === "true",
            images,
        }

        const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'), //apenas um examplo de que enviando um parametro em .required('texto') irá alterar a resposta de erro da API.
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false, //busca errro em todo o schema e não retorna erro no primeiro dado invalido; considerar o uso na aplicação;
        });

        const orphanage = orphanagesRepository.create(data);

        await orphanagesRepository.save(orphanage);
        return response.status(201).json(orphanage);
    }
}