import { BadRequestException, Injectable } from '@nestjs/common';
import { NoticeRepository } from './notice.repository';

@Injectable()
export class NoticeService {
  constructor(private readonly noticeRepository: NoticeRepository) {}

  async getNotice(id: string) {
    return this.noticeRepository.getNotice(id);
  }

  async createNotice({ title, content }: { title: string; content: string }) {
    if (title === undefined || content === undefined) {
      throw new BadRequestException();
    }

    return this.noticeRepository.createNotice(title, content);
  }
}
