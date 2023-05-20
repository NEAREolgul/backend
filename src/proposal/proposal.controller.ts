import { ProposalService } from './proposal.service';
import {
    Controller,
    Post,
    Res,
    HttpStatus,
    Get,
    Put,
    Body,
    Delete,
    Param,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateProposalDto, UpdateProposalDto } from './dto';


@Controller('proposal')
export class ProposalController {
    constructor(private proposalService: ProposalService) { }

    @Post('/')
    async createProposal(@Res() res: Response, @Body() proposalInfo: CreateProposalDto) {
        try {
            const result = await this.proposalService.createProposal(proposalInfo);
            return res.status(HttpStatus.OK).json({
                status: HttpStatus.OK,
                message: 'success',
                data: result,
            });
        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                status: HttpStatus.BAD_REQUEST,
                message: e.message,
            });
        }
    }

    @Get('/')
    async getProposalList(@Res() res: Response) {
        try {
            const result = await this.proposalService.getProposalList();
            return res.status(HttpStatus.OK).json({
                status: HttpStatus.OK,
                message: 'success',
                data: result,
            });
        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                status: HttpStatus.BAD_REQUEST,
                message: e.message,
            });
        }
    }

    @Put()
    async updateProposal(@Res() res: Response, @Body() proposalInfo: UpdateProposalDto) {
        try {
            const result = await this.proposalService.updateProposal(proposalInfo);
            return res.status(HttpStatus.OK).json({
                status: HttpStatus.OK,
                message: 'success',
                data: result,
            });
        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                status: HttpStatus.BAD_REQUEST,
                message: e.message,
            });
        }
    }

    @Delete('/:proposal_id')
    async deleteProposal(
        @Res() res: Response,
        @Param('user_id') user_id: string,
        @Param('content_id') content_id: string
    ) {
        try {
            const result = await this.proposalService.deleteProposal(
                user_id,
                content_id
            );
            return res.status(HttpStatus.OK).json({
                status: HttpStatus.OK,
                message: 'success',
                data: result,
            });
        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                status: HttpStatus.BAD_REQUEST,
                message: e.message,
            });
        }
    }

    @Get('/:proposal_id')
    async getProposalInfo(
        @Res() res: Response,
        @Param('user_id') user_id: string,
        @Param('content_id') content_id: string
    ) {
        try {
            const result = await this.proposalService.getProposalInfo(
                user_id,
                content_id
            );
            return res.status(HttpStatus.OK).json({
                status: HttpStatus.OK,
                message: 'success',
                data: result,
            });
        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                status: HttpStatus.BAD_REQUEST,
                message: e.message,
            });
        }
    }
}

