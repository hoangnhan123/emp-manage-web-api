import { IsNumber } from "class-validator";

export class DeleteEmployeeDto {
    @IsNumber({},{each: true})
    id: number[];

}