import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BidController } from './bid.controller';
import { BidService } from './bid.service';
import { Bid } from 'src/entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bid])],
  controllers: [BidController],
  providers: [BidService]
})
export class BidModule {}
