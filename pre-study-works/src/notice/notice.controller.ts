import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Get(':id')
  async getNotice(@Param('id') id: string) {
    return this.noticeService.getNotice(id);
  }

  @Post()
  async createNotice(@Body() body: { title: string; content: string }) {
    return this.noticeService.createNotice(body);
  }
  @Patch(':id')
  async updateNotice(
    @Param('id') id: string,
    @Body() body: { title: string; content: string },
  ) {
    return this.noticeService.updateNotice(id, body);
  }
  @Delete(':id')
  async deleteNotice(@Param('id') id: string) {
    return this.noticeService.deleteNotice(id);
  }
}
