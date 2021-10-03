import { HttpException, Injectable } from '@nestjs/common';
import {STUDENTS} from './students.mock';

import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Istudents } from './UI/students.interface';
import {StudentDto} from "./students.dto"

@Injectable()
export class StudentsService {

    constructor(@InjectModel('Student') private readonly studentModel: Model <Istudents>){

    }

    // private students = STUDENTS;

    public  async getStudents(): Promise<StudentDto[]>{
        const students = await this.studentModel.find().exec();
        if(!students || !students[0]){
            throw new HttpException("Not found", 404);
        }
        return students;
        // return this.students;
    }

    public async postStudent(newStudent: StudentDto){

        const student = await new this.studentModel(newStudent);
        return student.save();
        // return this.students.push(student);
    }

    public async getStudentById(id: number): Promise<StudentDto>{

        const student = await this.studentModel.findOne({id}).exec();
        if(!student){
            throw new HttpException("Not found", 404);
        }
        return student;
    }
        // const studentId = Number(id);
        // return new Promise ((resolve) => {
        //     const student = this.students.find((student) => student.id === studentId);
        //     if(!student){
        //         throw new HttpException("Not Found", 404);
        //     }

        // return resolve(student);
        // })


    public async deleteStudentById(id: number){
        const student = await this.studentModel.deleteOne({id}).exec();
        if(student.deletedCount === 0){
            throw new HttpException("Not found", 404);
        }
    //     const studentId = Number(id);
    //     return new Promise ((resolve) => {
    //     const studentIndex = this.students.findIndex((student) => student.id === studentId);
    //     if(studentIndex=== -1){
    //         throw new HttpException("Not Found", 404);
    //     }

    //     this.students.splice(studentIndex,1);
    //     return resolve(this.students);
    // })
    }

    public async putStudentById(id: number, propertyName: string, propertyValue:string): Promise<StudentDto>{
        const student = await this.studentModel.findOneAndUpdate({id},{[propertyName]: propertyValue,},).exec();
        if(!student){
            throw new HttpException("Not found", 404);
        }
        return student;

    //     const studentId = Number(id);
    //     return new Promise ((resolve) => {
    //     const studentIndex = this.students.findIndex((student) => student.id === studentId);
    //     if(studentIndex=== -1){
    //         throw new HttpException("Not Found", 404);
    //     }

    //     this.students[studentIndex][propertyName] = propertyValue;
    //     return resolve(this.students);
    // })
    }
}
