import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 } from 'uuid'
import { Users } from './User'

@Entity()
export class Messages {
  @PrimaryColumn()
  id: string
  
  @Column()
  admin_id: string
  
  @Column()
  text: string

  @ManyToOne(type => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users

  @Column()
  user_id: string
  
  @CreateDateColumn()
  created_at: Date

  constructor() {
    if(!this.id) this.id = v4()
  }
}