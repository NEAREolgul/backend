import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';
import { Content } from './content.entity';

@Entity({ name: 't_auction' })
export class Auction {
  @PrimaryColumn()
  auction_id: string;

  @Column()
  content_id: string;

  @Column()
  auction_title: string;

  @Column()
  auction_desc: string;

  @CreateDateColumn()
  auction_start: Date;

  @CreateDateColumn()
  auction_deadline: Date;

  @Column()
  min_price: string;

  @Column()
  purchase_price: string;

  @ManyToOne(() => Content, (content) => content.content_id, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'content_id' })
  content: Content;
}
