import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityBadRequestException } from 'src/config/service.exception';
import { Proposal } from 'src/entity';
import { Repository } from 'typeorm';
import { CreateProposalDto, UpdateProposalDto } from './dto';

@Injectable()
export class ProposalService {
  constructor(
    @InjectRepository(Proposal) private proposalRepository: Repository<Proposal>
  ) { }

  /**
   * 제안 정보 생성
   * --
   * @param proposalInfo
   * @returns
   */
  async createProposal(proposalInfo: CreateProposalDto) {
    try {
      const { user_id, content_id } = proposalInfo;
      if (user_id && content_id) {
        const check = await this.proposalRepository.findOne({
          where: { user_id, content_id },
        });
        if (check) {
          throw EntityBadRequestException();
        }
      }

      const test = await this.proposalRepository.create(proposalInfo);
      const result = await this.proposalRepository.save(test);
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 제안 전체 목록 조회
   * --
   * @returns
   */
  async getProposalList() {
    try {
      const result = await this.proposalRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 제안 상세 정보 조회
   * @param user_id
   * @param content_id
   * @returns
   */
  async getProposalInfo(user_id: string, content_id: string) {
    try {
      const result = await this.proposalRepository.find({
        where: { user_id, content_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 유저별 제안 정보 조회
   * --
   * @param user_id
   * @returns
   */
  async getProposalUserInfo(user_id: string) {
    try {
      const result = await this.proposalRepository.find({
        where: { user_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 컨텐츠별 제안 정보 조회
   * --
   * @param content_id
   * @returns
   */
  async getProposalAuctionInfo(content_id: string) {
    try {
      const result = await this.proposalRepository.find({
        where: { content_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 제안 정보 수정
   * --
   * @param proposalInfo
   */
  async updateProposal(proposalInfo: UpdateProposalDto) {
    try {
      const { user_id, content_id, ...updateInfo } = proposalInfo;
      const result = await this.proposalRepository.update(
        { user_id, content_id },
        updateInfo
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 제안 정보 삭제
   * --
   * @param user_id
   * @param content_id
   * @returns
   */
  async deleteProposal(user_id: string, content_id: string) {
    try {
      const proposal = await this.proposalRepository.findOneOrFail({
        where: { user_id, content_id },
      });
      const result = await this.proposalRepository.delete(proposal);
      return result;
    } catch (e) {
      throw e;
    }
  }
}

