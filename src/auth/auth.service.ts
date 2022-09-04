import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signUp(dto: AuthDto) {
    
    // generate the password hash
    const hash = await argon.hash(dto.password);
    // save the new user to db
    const auth = await this.prisma.auth.create({
      data: {
        email: dto.email,
        password: hash
      }
    });
    // if don't want return the password
    delete auth.password;
    // return the saved user
    return auth;
  }

  signIn() {
    return `signIn`;
  }
}
