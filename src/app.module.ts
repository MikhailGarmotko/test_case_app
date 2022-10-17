import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        connectionString: process.env.DATABASE_URL || 'postgres://siczcbdldugfzt:d1b1e64ebee148fa41a40b2b00023f0405782750ec81b54f7704b8a1d861dda9@ec2-52-211-232-23.eu-west-1.compute.amazonaws.com:5432/d6kpqnccc9h50r',
        ssl: process.env.DATABASE_URL ? true : false,
        // ssl: configService.get("ENV") === "development" ? false : { rejectUnauthorized: false},
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
