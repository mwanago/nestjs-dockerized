import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../../users/user.entity';
import Category from '../categories/category.entity';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id: number;

  @Column()
  @ApiProperty()
  public title: string;

  @Column()
  @ApiProperty()
  public content: string;

  @Column({ nullable: true })
  @ApiProperty()
  public category?: string;

  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;

  @ManyToMany(() => Category, (category: Category) => category.posts)
  @JoinTable()
  public categories: Category[];
}

export default Post;
