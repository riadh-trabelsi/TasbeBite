import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';

export const secret = "riadh"
@Module({
  imports : [PassportModule, JwtModule.register({secret: secret, signOptions:{expiresIn: "9999999s"}})],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy, UsersService],
})
export class AuthModule {}
