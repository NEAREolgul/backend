import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbModule } from './db/db.module';
import { DbService } from './db/db.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [DbModule],
      useClass: DbService,
      inject: [DbService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
