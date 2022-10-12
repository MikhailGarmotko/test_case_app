import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// import { MassiveModule } from "@nestjsplus/massive";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
//     MassiveModule.register({

// user: process.env.POSTGRES_USERNAME || "<local-postgres-user>",

// password: process.env.POSTGRES_PASSWORD || "<local-postgres-password>",

// host: process.env.POSTGRES_HOST || "localhost",

// port: 5432,

// database: process.env.POSTGRES_DATABASE ||"<local-postgres-db-name>"

// }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
