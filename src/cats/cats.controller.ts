import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
type res = {
  say: string;
};
@Controller('cats')
export class CatsController {
  @Get()
  findAll(): res {
    return { say: 'heelo' };
  }
}
