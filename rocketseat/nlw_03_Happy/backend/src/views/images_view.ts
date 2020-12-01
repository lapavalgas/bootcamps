import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`, //localhost: essa solução é boa para ambientes de deseenvolvimento, em ambientes de produção utilizar variaveis de ambiente
            url_mobile: `http://192.168.1.107:3333/uploads/${image.path}`, //mobile:
        };
    },
    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};