import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('address', { schema: 'meu' })
class Address {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id: number;

  @Column()
  @ApiProperty()
  public street: string;

  @Column()
  @ApiProperty()
  public city: string;

  @Column()
  @ApiProperty()
  public country: string;

  @OneToOne(() => User, (user: User) => user.address)
  public user?: User;
}

export default Address;
