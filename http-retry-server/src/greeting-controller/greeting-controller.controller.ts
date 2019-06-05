import {Controller, Get, Res} from '@nestjs/common';
import {Response} from 'express';

@Controller('greeting-controller')
export class GreetingControllerController {

    private counter = 0;

    @Get('/greet')
    public greet(@Res() res: Response) {
        if (this.counter === 3) {
            this.counter = 0;
            return res.status(200).send('Greetings from the controller');
        }
        this.counter++;
        return res.status(500).send('Something went wrong');
    }

}
