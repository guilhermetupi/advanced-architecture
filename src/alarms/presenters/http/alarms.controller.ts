import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlarmsService } from '../../application/alarms.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { CreateAlarmCommand } from 'src/alarms/application/commands/create-alarm.command';

@Controller('alarms')
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Post()
  create(@Body() { name, severity }: CreateAlarmDto) {
    return this.alarmsService.create(new CreateAlarmCommand(name, severity));
  }

  @Get()
  findAll() {
    return this.alarmsService.findAll();
  }
}
