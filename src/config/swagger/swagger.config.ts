import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
        .setTitle('Your Title Here')
        .setLicense('MIT', 'some link')
        .setVersion('1.0')
        .setDescription('It works')
        .addSecurity('bearer', {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        })
        .addSecurityRequirements('bearer')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/v1', app, document);
}
