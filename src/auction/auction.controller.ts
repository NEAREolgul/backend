import { AuctionService } from './auction.service';
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
import { CreateAuctionDto, UpdateAuctionDto } from './dto';


@Controller('auction')
export class AuctionController {
    constructor(private auctionService: AuctionService) { }

    @Post('/')
    async createAuction(@Res() res: Response, @Body() auctionInfo: CreateAuctionDto) {
        try {
            const result = await this.auctionService.createAuction(auctionInfo);
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
    async getAuctionList(@Res() res: Response) {
        try {
            const result = await this.auctionService.getAuctionList();
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
    async updateAuction(@Res() res: Response, @Body() auctionInfo: UpdateAuctionDto) {
        try {
            const result = await this.auctionService.updateAuction(auctionInfo);
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

    @Delete('/:auction_id')
    async deleteAuction(@Res() res: Response, @Param('auction_id') auction_id: string) {
        try {
            const result = await this.auctionService.deleteAuction(auction_id);
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

    @Get('/:auction_id')
    async getAuctionInfo(@Res() res: Response, @Param('auction_id') auction_id: string) {
        try {
            const result = await this.auctionService.getAuctionInfo(auction_id);
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

