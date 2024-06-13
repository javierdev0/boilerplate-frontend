import { DataSource } from 'typeorm'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.' + process.env.NODE_ENV,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT?.toString() ?? '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      retryDelay: parseInt(process.env.RETRY_DELAY ?? '3000'),
      autoLoadEntities: JSON.parse(process.env.AUTO_LOAD_ENTITIES ?? 'false') as boolean,
      synchronize: JSON.parse(process.env.SYNCHRONIZE ?? 'false') as boolean,
      migrations: ['migration/*.js'],
      namingStrategy: new SnakeNamingStrategy(),
      ssl: JSON.parse(process.env.SSL_REJECT_UNAUTHORIZED ?? 'true')
        ? {
            rejectUnauthorized: false
          }
        : undefined
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
