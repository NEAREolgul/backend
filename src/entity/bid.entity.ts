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
import { Auction } from './auction.entity';


@Entity({ name: 't_bid' })
export class Bid {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  auction_id: string;

  @Column()
  bid_price: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @Column({ default: false })
  is_sold: boolean;

  @ManyToOne(() => User, (user) => user.user_id, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Auction, (auction) => auction.auction_id, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'auction_id' })
  auction: Auction;
}
