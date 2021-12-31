import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class TrialService {
    findAll() {
        return ['1', '2', '3'];
    }
    findOne(id: string) {
        // you can send back error messages with appropriate status codes using httpException class
        if (id === '5') throw new HttpException('not found', HttpStatus.NOT_FOUND);
        // there are other types of exception helpful like 
        // internalServerError notFound badRequest
        return id;
    }
}
