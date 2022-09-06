import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, EmployeeModule, PrismaModule, 
    ConfigModule.forRoot({
      isGlobal: true
    }), UserModule],
  controllers: [UserController],
})
export class AppModule {}
