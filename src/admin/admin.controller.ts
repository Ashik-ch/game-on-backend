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
  constructor(private readonly adminService: AdminService) { }

  /**
   * Retrieves a list of all turfs, optionally filtered by turf type.
   * @param turfType - The type of turf to filter by (optional) and @returns A list of turfs.
   */
  @Get()
  findAll(@Query('turf_type') turfType: string) {
    return this.adminService.findAll(turfType);
  }

  /** Retrieves a single turf by its ID.
   * ParseIntPipe to parse the ID parameter into a number.
   * @param id - The ID of the turf to retrieve, parsed as a number.
   * @returns The details of the specified turf.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.adminService.findOne(id);
  }

  /**  Creates a new turf with validation.
   * The ValidationPipe ensures that the incoming data adheres to the defined DTO structure.
   * @param createTurfDto - The data transfer object containing the details of the turf to create and @returns The newly created turf.
   */
  @Post()
  create(@Body(ValidationPipe) createTurfDto: CreateTurfDto) {
    return this.adminService.create(createTurfDto);
  }

  /** Updates an existing turf by its ID.
   * @param updateTurfDto - The data transfer object containing the updated details of the turf and  @returns The updated  turf.
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body(ValidationPipe) updateTurfDto: UpdateTurfDto,
  ) {
    return this.adminService.update(id, updateTurfDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: string) {
    return this.adminService.delete(id);
  }
}
