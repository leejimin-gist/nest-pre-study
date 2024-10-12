import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}
  @Get(':id')
  getNotice(@Param('id') id: string) {
    return this.noticeService.getNotice(id);
  }

  @Post()
  createNotice(@Body() body: { title: string; content: string }) {
    return this.noticeService.createNotice(body);
  }
}
