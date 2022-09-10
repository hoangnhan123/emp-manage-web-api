import { IsEmail, IsNumber, IsString } from "class-validator";


export class CreateEmployeeDto {

    @IsString()
    name: string;

    @IsEmail()
    email?: string;

    @IsString()
    address?: string;
    
    @IsNumber()
    tel: number;

}
