import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateTurfDto, UpdateTurfDto } from './admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  findAll(@Query('turf_type') turf_type: string) {
    return this.adminService.findAll(turf_type);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.adminService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateTurfDto) {
    return this.adminService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateTurfDto) {
    return this.adminService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.adminService.delete(id);
  }
}
