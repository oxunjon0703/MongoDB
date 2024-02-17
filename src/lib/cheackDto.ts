import { ObjectSchema } from "joi";
import { BadRequestException } from "../common/exception/exceptions";

export function checkDto<DTO>(schema: ObjectSchema<DTO>, dto: DTO): void {
  const result = schema.validate(dto);

  if (result.error) {
    throw new BadRequestException(result.error.message);
  }
}
