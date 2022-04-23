import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 } from 'uuid'
import { Users } from './User'

@Entity()
export class Connections {
  @PrimaryColumn()
  id: string
  
  @Column()
  admin_id: string
  
  @Column()
  socket_id: string

  @ManyToOne(type => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users

  @Column()
  user_id: string
  
  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
  
  constructor() {
    if(!this.id) this.id = v4()
  }
}