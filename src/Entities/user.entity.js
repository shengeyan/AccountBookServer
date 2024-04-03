import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar', length: 255 })
  username

  @Column({ type: 'varchar', length: 255 })
  password

  @Column({ type: 'varchar', length: 255, nullable: true })
  signature

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  ctime
}
