import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityBadRequestException } from 'src/config/service.exception';
import { Auction } from 'src/entity';
import { Repository } from 'typeorm';
import { CreateAuctionDto, UpdateAuctionDto } from './dto';

@Injectable()
export class AuctionService {
    constructor(
      @InjectRepository(Auction) private auctionRepository: Repository<Auction>
    ) {}
  
    /**
     * 경매 정보 생성
     * --
     * @param auctionInfo
     * @returns
     */
    async createAuction(auctionInfo: CreateAuctionDto) {
      try {
        if (auctionInfo.auction_id) {
          const { auction_id } = auctionInfo;
          const check = await this.auctionRepository.findOne({
            where: { auction_id },
          });
          if (check) {
            throw EntityBadRequestException();
          }
        }
  
        const test = this.auctionRepository.create(auctionInfo);
        const result = await this.auctionRepository.save(test);
        return result;
      } catch (e) {
        throw e;
      }
    }
  
    /**
     * 경매 전체 목록 조회
     * --
     * @returns
     */
    async getAuctionList() {
      try {
        const result = await this.auctionRepository.find();
        return result;
      } catch (e) {
        throw e;
      }
    }
  
    /**
     * 경매 정보 수정
     * --
     * @param auctionInfo
     */
    async updateAuction(auctionInfo: UpdateAuctionDto) {
      try {
        const { auction_id, ...updateInfo } = auctionInfo;
        const result = await this.auctionRepository.update(
          { auction_id },
          updateInfo
        );
        return result;
      } catch (e) {
        throw e;
      }
    }
  
    /**
     * 경매 정보 삭제
     * --
     * @param auction_id
     * @returns
     */
    async deleteAuction(auction_id: string) {
      try {
        await this.auctionRepository.findOneOrFail({ where: { auction_id } });
  
        const result = await this.auctionRepository.delete(
          { auction_id }
        );
  
        return result;
      } catch (e) {
        throw e;
      }
    }
  
    /**
     * 경매 상세 정보 조회
     * @param auction_id
     * @returns
     */
    async getAuctionInfo(auction_id: string) {
      try {
        const auction = await this.auctionRepository.findOneOrFail({
          where: { auction_id: auction_id },
        });
        return auction;
      } catch (e) {
        throw e;
      }
    }
}
