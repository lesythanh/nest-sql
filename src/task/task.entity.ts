import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 500 })
    name: string;

    @ApiProperty()
    @Column('text')
    description: string;

    @ApiProperty()
    @Column()
    isDone: boolean;

}


