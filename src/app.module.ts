import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrialModule } from './trial/trial.module';

@Module({
  imports: [TrialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
