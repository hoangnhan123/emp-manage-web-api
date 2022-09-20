import { Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { DeleteEmployeeDto } from './dto/delete-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      const employee = await this.prisma.employee.create({
        data: createEmployeeDto
      })
      return employee;
    } catch (error) {
      throw(error);
    }
  }

  async findAll() {
    const employee = await this.prisma.employee.findMany({
      orderBy: {
        id: 'asc',
      }
    });
    const count = await this.prisma.employee.count();
    return {count, employee};
  }

  async findOne(id: number) {
    const employee = await this.prisma.employee.findFirst({
      where:{
        id: id
      }
    });
    return employee ? employee : 'Employee not found';
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      const updateEmployee = await this.prisma.employee.update({
        where: {
          id: id
        },
        data: updateEmployeeDto
      });
      return updateEmployee;
    } catch (error) {
      throw(error);
    }
  }

  async remove(id: number) {
    try {
      const deleteEmployee = await this.prisma.employee.delete({
        where: {
          id: id
        }
      });
      return deleteEmployee;
    } catch (error) {
      throw(error);
    }
  }

  async removeMany(deleteEmployeeDto: DeleteEmployeeDto) {
    try {
      const delMany = await this.prisma.employee.deleteMany({
        where: {
          id: {
            in: deleteEmployeeDto.id
          }
        }
      });
      return delMany;
    } catch (error) {
      throw(error);
    }
  }
}
