import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';
import { IngredientsModule } from './ingredients/ingredients.module';
import { SnackModule } from './snack/snack.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://murilobalves1:weGPLfUbyUjNNCIA@cluster0.dack263.mongodb.net/',
    ),
    UsersModule,
    IngredientsModule,
    SnackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
