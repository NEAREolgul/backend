import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbModule } from './db/db.module';
import { DbService } from './db/db.service';
import { UserModule } from './user/user.module';
import { ContentModule } from './content/content.module';
import { ProposalModule } from './proposal/proposal.module';
import { BidModule } from './bid/bid.module';
import { AuctionModule } from './auction/auction.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [DbModule],
      useClass: DbService,
      inject: [DbService],
    }),
    UserModule,
    ContentModule,
    ProposalModule,
    BidModule,
    AuctionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
