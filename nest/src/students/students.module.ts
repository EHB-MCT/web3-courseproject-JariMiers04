import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsSchema } from './schemas/students.schema';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: "Student",
      schema: StudentsSchema,},
    ]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
