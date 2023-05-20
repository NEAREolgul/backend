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
import { Content } from './content.entity';

@Entity({ name: 't_proposal' })
export class Proposal {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  content_id: string;

  @Column()
  proposal_msg: string;

  @Column()
  proposal_price: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @Column({ default: false })
  is_accept: boolean;

  @ManyToOne(() => User, (user) => user.user_id, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Content, (content) => content.content_id, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'content_id' })
  content: Content;
}
