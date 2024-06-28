import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async create(dto: CreateAuthDto) {
    const user = this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new Error('email not found');
    const valid = await bcrypt.compare(dto.passwordDto, (await user).password);
    if (!valid) throw new Error('wrong password');
    const token = await this.jwt.signAsync({
      id: (await user).id,
      userName: (await user).userName,
      imageUrl: (await user).imageUrl,
      role: (await user).role,
      email: (await user).email,
    });
    return { token };
  }

  async getMe(token: string) {
    return this.jwt.decode(token);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
