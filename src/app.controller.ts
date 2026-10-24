import { Controller, Get, Param, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import z from 'zod';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('me')
  getMe(): string {
    return 'ini mes';
  }
  @Get(':id')
  getId(): string {
    return 'ini id';
  }
  @Get('params')
  getParams(@Param('id') id: string): string {
    return `${id} adalah id Param`;
  }
}
