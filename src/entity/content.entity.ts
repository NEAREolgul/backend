import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 't_content' })
export class Content {
  @PrimaryColumn()
  content_id: string;

  @Column()
  user_id: string;

  @Column()
  content_title: string;

  @Column()
  content_desc: string;

  @Column()
  content_price: number;

  @Column({ default: false })
  is_sell: boolean;

  @Column({ default: false })
  is_nft: boolean;

  @Column()
  content_width: number;

  @Column()
  content_height: number;

  @Column()
  content_paint: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @ManyToOne(() => User, (user) => user.user_id, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
