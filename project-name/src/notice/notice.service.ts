import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class NoticeService {
  noticeID = 1;
  noticeList: {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
  }[] = [];

  getNotice(id: string) {
    const noticeId = parseInt(id);
    if (isNaN(noticeId)) {
      throw new BadRequestException('Invalid notice ID');
    }
    const [matchedNotice] = this.noticeList.filter(
      (notice) => notice.id === noticeId,
    );
    return matchedNotice;
  }

  createNotice({ title, content }: { title: string; content: string }) {
    if (!title || !content) {
      throw new BadRequestException();
    }
    const newNotice = {
      id: this.noticeID,
      title,
      content,
      createdAt: new Date(),
    };
    this.noticeList.push(newNotice);
    this.noticeID += 1;
    return {
      message: 'created',
      data: newNotice,
    };
  }
}
