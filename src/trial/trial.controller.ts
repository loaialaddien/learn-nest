import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Res,
} from '@nestjs/common';
import { TrialCreateDto } from './dto/trial-create.dto';
import { TrialService } from './trial.service';

@Controller('trial')
export class TrialController {
    // to make use of the service, you need to create a constructor
    // the constructor will accept the service
    // nest will inject the service based on it type
    constructor(private readonly trialService: TrialService) { }

    @Get()
    findAll() {
        return ['this is the trial'];
    }
    @Get(':id')
    findOne(@Param() params, @Param('id') id: string) {
        // @Param decorator lets you get access to parameters sent to the url, you can either get the whole params or specify the params you want
        return this.trialService.findOne(id);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED) // decorator for altering the default status code for the method
    create(@Body() body: TrialCreateDto) {
        return body;
    }
    @Post('/bad')
    @HttpCode(HttpStatus.UNAUTHORIZED)
    createBad(@Body() body, @Res() res) {
        // @Res decorator gives you access to the response object of the framework you're using, in this case express response

        return res.status(HttpStatus.BAD_REQUEST).send({ bad: 'very bad' });
    }
    // other useful decorators
    // @Query to access query params
    // @Delete @Patch @Put as handlers for methods
}
