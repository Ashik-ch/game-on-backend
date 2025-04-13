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
  findAll(@Query('turf_type') turfType: string) {
    return this.adminService.findAll(turfType);
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
  update(@Param('id') id: number, @Body() body: UpdateTurfDto) {
    return this.adminService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.adminService.delete(id);
  }
}
