import { Controller, Delete, Get, Param, Post, Req, Put, Body, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import {StudentDto} from "./students.dto";

@Controller('students')
export class StudentsController {

    constructor(private studentsService: StudentsService){}

   @Get()
   public getStudents(){
       return this.studentsService.getStudents();
   }

   @Post()
   public postStudent(@Body() student: StudentDto){
        return this.studentsService.postStudent(student);
   }    

   @Get(':id')
   public async getStudentById(@Param('id') id: number){
        return this.studentsService.getStudentById(id);
   }

   @Put(':id')
   public async putStudent(@Param('id') id: number, @Query() query){
        return this.studentsService.putStudentById(id, query.property_name, query.property_value);
   }

   @Delete(':id')
    public async deleteStudent(@Param('id') id: number){
        return this.studentsService.deleteStudentById(id);
    }

}
