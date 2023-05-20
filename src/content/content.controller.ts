import { ContentService } from './content.service';
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
import { CreateContentDto, UpdateContentDto } from './dto';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Post('/')
  async createContent(
    @Res() res: Response,
    @Body() contentInfo: CreateContentDto,
  ) {
    try {
      const result = await this.contentService.createContent(contentInfo);
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
  async getContentList(@Res() res: Response) {
    try {
      const result = await this.contentService.getContentList();
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

  @Get('/user/:user_id')
  async getContentByUser(@Res() res: Response, @Param('user_id') user_id) {
    try {
      const result = await this.contentService.getContentByUser(user_id);
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
  async updateContent(
    @Res() res: Response,
    @Body() contentInfo: UpdateContentDto,
  ) {
    try {
      const result = await this.contentService.updateContent(contentInfo);
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

  @Delete('/:content_id')
  async deleteContent(
    @Res() res: Response,
    @Param('content_id') content_id: string,
  ) {
    try {
      const result = await this.contentService.deleteContent(content_id);
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

  @Get('/:content_id')
  async getContentInfo(
    @Res() res: Response,
    @Param('content_id') content_id: string,
  ) {
    try {
      const result = await this.contentService.getContentInfo(content_id);
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
