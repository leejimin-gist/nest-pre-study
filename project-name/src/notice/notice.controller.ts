import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('notice')
export class NoticeController {
  @Get(':id')
  getNotice(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createNotice(@Body() body: { title: string; content: string }) {
    return { message: 'created', data: body };
  }
}
