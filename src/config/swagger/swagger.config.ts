import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('BaaS API [metacubic.org]')
    .setLicense('M³ License', 'https://metacubic.org/license')
    .setVersion('1.0')
    .setDescription(
      'Everything provided by the BaaS API, can be accessed through our SaaS. Both provide Services for the M³ Blockchain, with little to no configuration required.',
    )
    .setContact('M³ Support Team', 'mailto:support@metacubic.org', '')
    .setTermsOfService('https://metacubic.org/terms')
    .setExternalDoc('M³ Documentation', 'https://docs.metacubic.org')
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .addSecurityRequirements('bearer')
    .addBearerAuth()
    .addTag('M³ BaaS API', 'SaaS [metacubic.org]')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const extraOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customFavicon: 'https://metacubic.org/favicon.ico',
    customSiteTitle: 'M³ BaaS API',
    url: 'https://api.metacubic.org/v1',
    servers: [
      {
        url: 'https://api.metacubic.org/v1',
        description: 'Production',
      },
      {
        url: 'http://localhost:3021/v1',
        description: 'Development',
      },
    ],
  };
  SwaggerModule.setup('/v1', app, document, extraOptions);
}
