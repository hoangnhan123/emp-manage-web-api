import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, EmployeeModule, PrismaModule, 
    ConfigModule.forRoot({
      isGlobal: true
    })],
})
export class AppModule {}
