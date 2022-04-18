import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 } from 'uuid'

@Entity()
export class Users {
  @PrimaryColumn()
  id: string
  
  @Column()
  email: string
  
  @CreateDateColumn()
  created_at: Date
 
  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if(!this.id) this.id = v4()
  }
}