import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateTurfDto, UpdateTurfDto } from './DTO/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  findAll(@Query('turf_type') turfType: string) {
    return this.adminService.findAll(turfType);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) createTurfDto: CreateTurfDto) {
    return this.adminService.create(createTurfDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTurfDto: UpdateTurfDto,
  ) {
    return this.adminService.update(id, updateTurfDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.delete(id);
  }
}
