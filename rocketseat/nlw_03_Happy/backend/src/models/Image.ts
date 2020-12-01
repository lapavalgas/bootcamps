import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanages';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    //recebe um parametro função que devole o tipo do retorno e um segundo parametro 'dado um parametro qual é o campo (atributo) que devolve o valor inverso (ou seja, o orphanato em si nesse contexto)'
    //Ou seja, é a configuração do OneToMany e ManyToOne, indicando qual atributo dessa classe esta relacionado com qual atributo da classe alvo
    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;
}