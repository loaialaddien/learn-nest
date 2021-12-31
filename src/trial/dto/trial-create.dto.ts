// created with nest g class trial/dto/trial-create.dto --no-spec
import { IsString, IsOptional } from 'class-validator';
export class TrialCreateDto {
    @IsString()
    readonly id: string;

    @IsString({ each: true })
    @IsOptional()
    readonly trial?: string[];
}
