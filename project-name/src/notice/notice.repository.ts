import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { error } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NoticeRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getNotice(id: string) {
    return this.prismaService.notice
      .findUniqueOrThrow({
        where: { id: parseInt(id) },
      })
      .catch((error) => {
        if (error instanceof PrismaClientKnownRequestError) {
          throw new InternalServerErrorException('DB Error');
        }
        throw new InternalServerErrorException('Unknown Error');
      });
  }
  async createNotice(title: string, content: string) {
    return this.prismaService.notice
      .create({
        data: {
          title,
          content,
        },
      })
      .catch((error) => {
        if (error instanceof PrismaClientKnownRequestError) {
          throw new InternalServerErrorException('DB Error');
        }
        throw new InternalServerErrorException('Unknown Error');
      });
  }
}
