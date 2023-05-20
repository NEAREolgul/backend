import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityBadRequestException } from 'src/config/service.exception';
import { Bid } from 'src/entity';
import { Repository } from 'typeorm';
import { CreateBidDto, UpdateBidDto } from './dto';

@Injectable()
export class BidService {
  constructor(
    @InjectRepository(Bid) private bidRepository: Repository<Bid>
  ) { }

  /**
   * 경매품 정보 생성
   * --
   * @param bidInfo
   * @returns
   */
  async createBid(bidInfo: CreateBidDto) {
    try {
      const { user_id, auction_id } = bidInfo;
      if (user_id && auction_id) {
        const check = await this.bidRepository.findOne({
          where: { user_id, auction_id },
        });
        if (check) {
          throw EntityBadRequestException();
        }
      }

      const test = await this.bidRepository.create(bidInfo);
      const result = await this.bidRepository.save(test);
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 경매품 전체 목록 조회
   * --
   * @returns
   */
  async getBidList() {
    try {
      const result = await this.bidRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 경매품 상세 정보 조회
   * @param user_id
   * @param auction_id
   * @returns
   */
  async getBidInfo(user_id: string, auction_id: string) {
    try {
      const result = await this.bidRepository.find({
        where: { user_id, auction_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 유저별 경매품 정보 조회
   * --
   * @param user_id
   * @returns
   */
  async getBidUserInfo(user_id: string) {
    try {
      const result = await this.bidRepository.find({
        where: { user_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 경매별 경매품 정보 조회
   * --
   * @param auction_id
   * @returns
   */
  async getBidAuctionInfo(auction_id: string) {
    try {
      const result = await this.bidRepository.find({
        where: { auction_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 경매품 정보 수정
   * --
   * @param bidInfo
   */
  async updateBid(bidInfo: UpdateBidDto) {
    try {
      const { user_id, auction_id, ...updateInfo } = bidInfo;
      const result = await this.bidRepository.update(
        { user_id, auction_id },
        updateInfo
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 경매품 정보 삭제
   * --
   * @param user_id
   * @param auction_id
   * @returns
   */
  async deleteBid(user_id: string, auction_id: string) {
    try {
      const bid = await this.bidRepository.findOneOrFail({
        where: { user_id, auction_id },
      });
      const result = await this.bidRepository.delete(bid);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
