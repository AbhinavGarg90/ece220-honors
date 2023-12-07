import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ComponentService } from './component.service';
import { AddComponentDto, CreateComponentDto } from 'src/common/dto';

@Controller('component')
export class ComponentController {
  constructor(private componentService: ComponentService) {}

  @Get('get')
  async getComponents() {
    return await this.componentService.getComponents();
  }

  @Get('create-default')
  async createDefaultComponent() {
    return this.componentService.createDefaultComponent();
  }

  @Post('create-component')
  async createComponent(@Body() createComponentDto: CreateComponentDto) {
    return await this.componentService.createComponent(createComponentDto);
  }

  @Post('add-component')
  async addComponent(@Body() addComponentDto: AddComponentDto) {
    return await this.componentService.addComponent(addComponentDto);
  }
}
