import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanages {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    //recebe um parametro função que devole o tipo do retorno e um segundo parametro 'dado um parametro qual é o campo (atributo) que devolve o valor inverso (ou seja, o orphanato em si nesse contexto)'
    //Ou seja, é a configuração do OneToMany e ManyToOne, indicando qual atributo dessa classe esta relacionado com qual atributo da classe alvo
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];

}