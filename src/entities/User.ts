import { Field, ObjectType, ID } from "type-graphql";
import { CreateDateColumn, Entity, Column, PrimaryColumn } from "typeorm";

import { v4 as uuid } from 'uuid';

@ObjectType()
@Entity("users")
class User {

  @Field(type => ID)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  constructor() {

    if (!this.id) {
      this.id = uuid();
    }

  }

}

export { User };