import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityBadRequestException } from 'src/config/service.exception';
import { Content } from 'src/entity';
import { Repository } from 'typeorm';
import { CreateContentDto, UpdateContentDto } from './dto';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(Content) private contentRepository: Repository<Content>
    ) { }

    /**
     * 컨텐츠 정보 생성
     * --
     * @param contentInfo
     * @returns
     */
    async createContent(contentInfo: CreateContentDto) {
        try {
            if (contentInfo.content_id) {
                const { content_id } = contentInfo;
                const check = await this.contentRepository.findOne({
                    where: { content_id },
                });
                if (check) {
                    throw EntityBadRequestException();
                }
            }

            const test = this.contentRepository.create(contentInfo);
            const result = await this.contentRepository.save(test);
            return result;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 컨텐츠 전체 목록 조회
     * --
     * @returns
     */
    async getContentList() {
        try {
            const result = await this.contentRepository.find();
            return result;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 컨텐츠 정보 수정
     * --
     * @param contentInfo
     */
    async updateContent(contentInfo: UpdateContentDto) {
        try {
            const { content_id, ...updateInfo } = contentInfo;
            const result = await this.contentRepository.update(
                { content_id },
                updateInfo
            );
            return result;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 컨텐츠 정보 삭제
     * --
     * @param content_id
     * @returns
     */
    async deleteContent(content_id: string) {
        try {
            await this.contentRepository.findOneOrFail({ where: { content_id } });

            const result = await this.contentRepository.delete(
                { content_id },
            );

            return result;
        } catch (e) {
            throw e;
        }
    }

    /**
     * 컨텐츠 상세 정보 조회
     * @param content_id
     * @returns
     */
    async getContentInfo(content_id: string) {
        try {
            const content = await this.contentRepository.findOneOrFail({
                where: { content_id: content_id },
            });
            return content;
        } catch (e) {
            throw e;
        }
    }
}
