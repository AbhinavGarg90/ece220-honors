import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PageService } from './page.service';
import { IPage } from 'src/common/interfaces';
import { CreatePageDto, UpdatePageDto } from 'src/common/dto';

@Controller('page')
export class PageController {
  constructor(private pageService: PageService) {}

  @Get('/get')
  async getPages(): Promise<IPage[]> {
    return await this.pageService.getPages();
  }

  // for development purposes
  @Get('/create')
  async createDefaultPage(): Promise<IPage> {
    return await this.pageService.createDefaultPage();
  }

  @Post('/create-page')
  async createPage(@Body() createPageDto: CreatePageDto): Promise<IPage> {
    return await this.pageService.createPage(createPageDto);
  }

  @Get(':id')
  async findPageData(@Param('id') id: string) {
    return await this.pageService.findPageData(id);
  }

  @Put('update-page')
  async updatePage(@Body() updatePageDto: UpdatePageDto) {
    return await this.pageService.updatePage(updatePageDto);
  }
}
