import { BidService } from './bid.service';
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
import { CreateBidDto, UpdateBidDto } from './dto';

@Controller('bid')
export class BidController {
    constructor(private bidService: BidService) { }

    @Post('/')
    async createBid(@Res() res: Response, @Body() bidInfo: CreateBidDto) {
        try {
            const result = await this.bidService.createBid(bidInfo);
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
    async getBidList(@Res() res: Response) {
        try {
            const result = await this.bidService.getBidList();
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

    @Put('/')
    async updateBid(@Res() res: Response, @Body() bidInfo: UpdateBidDto) {
        try {
            const result = await this.bidService.updateBid(bidInfo);
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

    @Delete('/:user_id/:auction_id')
    async deleteBid(
        @Res() res: Response,
        @Param('user_id') user_id: string,
        @Param('auction_id') auction_id: string
    ) {
        try {
            const result = await this.bidService.deleteBid(
                user_id,
                auction_id
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

    @Get('/:user_id/:auction_id')
    async getBidInfo(
        @Res() res: Response,
        @Param('user_id') user_id: string,
        @Param('auction_id') auction_id: string
    ) {
        try {
            const result = await this.bidService.getBidInfo(
                user_id,
                auction_id
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
