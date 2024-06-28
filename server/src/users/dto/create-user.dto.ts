import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";

export class CreateUserDto {
    @ApiProperty()
    userName: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    passwordDto: string;
    @ApiProperty()
    role?: Role;
    @ApiProperty()
    imageUrl: string;
}
