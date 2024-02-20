import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';
import { IngredientsModule } from './ingredients/ingredients.module';
import { SnackModule } from './snack/snack.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
    IngredientsModule,
    SnackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
