import { ApiProperty } from "@nestjs/swagger"

export class CreateAuthDto {
    @ApiProperty()
    email : string
    @ApiProperty()
    passwordDto : string
}
