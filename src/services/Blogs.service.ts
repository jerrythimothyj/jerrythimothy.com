const BLOGS = [
  {
    image:
      'https://media.licdn.com/dms/image/C5122AQEHC6wXq4Nviw/feedshare-shrink_8192/0?e=1569456000&v=beta&t=o45YRXAazduczXFJ2ztKlW51Ld9CIt_K93ygAVJv-Ys',
    link: 'https://github.com/jerrythimothyj/nest-api/pull/3',
    tags: ['nodejs', 'nestjs', 'azure-ad', 'oidc', 'authentication', 'passport', 'jwt'],
    title: 'NestJS-Azure-AD-OIDC-Passport-JWT-Authentication',
  },
  {
    image:
      'https://user-images.githubusercontent.com/16850946/63240754-ac096a00-c26e-11e9-94e1-c77cd085cc50.gif',
    link: 'https://github.com/jerrythimothyj/nest-api/pull/2',
    tags: ['nodejs', 'nestjs', 'google', 'oauth2', 'authentication', 'passport', 'jwt'],
    title: 'NestJS-Google-OAuth2-Passport-JWT-Authentication',
  },
  {
    image:
      'https://media.licdn.com/dms/image/C5122AQHHpj7G9IRIig/feedshare-shrink_8192/0?e=1569456000&v=beta&t=5Pl9LRZf-dNgsY4s2_QXkuc1rZWH8WvGZcL9m3gS3fc',
    link: 'https://github.com/jerrythimothyj/nest-api/pull/1',
    tags: ['nodejs', 'nestjs', 'mysql', 'authentication', 'passport', 'jwt'],
    title: 'NestJS-MySQL-Passport-JWT-Authentication',
  },
  {
    image: 'https://miro.medium.com/max/3840/1*aqhWLztMr4eDl5K3XK3J_g.png',
    link: 'https://github.com/jerrythimothyj/graphql-basic',
    tags: ['nodejs', 'graphql', 'mongodb', 'setup', 'api'],
    title: 'GraphQL basic setup and interaction with MongoDB ( old version )',
  },
  {
    image:
      'https://media.licdn.com/dms/image/C5122AQEuOUI-_Y10Vg/feedshare-shrink_8192/0?e=1569456000&v=beta&t=75FwoInUY82B0h0Dl9kYEJ-ylJnZxCPxQ6_ODGbz4jM',
    link:
      'https://github.com/jerrythimothyj/nest-api/commit/b009fb6ddd035fa58e723e1dfc11044752606821',
    tags: ['nodejs', 'nestjs', 'mysql', 'sql', 'api'],
    title: 'Using raw query in nestjs-mysql',
  },
  {
    image:
      'https://raw.githubusercontent.com/jerrythimothyj/typescript-decorators/master/screenshot.png',
    link: 'https://github.com/jerrythimothyj/typescript-decorators',
    tags: ['typescript', 'decorators', 'javascript', 'es6', 'ecmascript'],
    title: 'Typescript-Decorators',
  },
  {
    image:
      'https://media.licdn.com/dms/image/C5122AQGXlq2RFxYiqg/feedshare-shrink_8192/0?e=1569456000&v=beta&t=UWsCDZCH2-j7_i72QeF35VNu2_0VC5ciwIyUpWKWRkU',
    link:
      'https://github.com/jerrythimothyj/jerrythimothy.com/pull/82/commits/280a7d1c8031c9942b5856fe55e29c2df23da5e0',
    tags: ['maps', 'script', 'react', 'javascript', 'es6'],
    title: 'Include script tag inside a react component',
  },
  {
    image:
      'https://raw.githubusercontent.com/jerrythimothyj/nest-api/nest-mysql/postman_screenshot.png',
    link: 'https://github.com/jerrythimothyj/nest-api/tree/nest-mysql',
    tags: ['nestjs', 'nodejs', 'mysql', 'api', 'typescript'],
    title: 'Simple Nest API with MySQL',
  },
  {
    image:
      'https://raw.githubusercontent.com/jerrythimothyj/nest-api/nest-mongo/postman-screenshot.png',
    link: 'https://github.com/jerrythimothyj/nest-api/tree/nest-mongo',
    tags: ['nestjs', 'nodejs', 'mongodb', 'api', 'typescript'],
    title: 'Simple Nest API with MongoDB',
  },
  {
    image: 'https://cdn.filestackcontent.com/aq3jZRygQy6ku6ElUlJw',
    link: 'https://github.com/jerrythimothyj/simple-live-server',
    tags: ['nodejs', 'server', 'live', 'backend', 'javascript'],
    title: 'Easy CLI Live server setup',
  },
  {
    image: 'https://i.udemycdn.com/course/750x422/2423698_fa07_2.jpg',
    link: 'https://github.com/jerrythimothyj/tic-tac-toe',
    tags: ['reactjs', 'game', 'javascript', 'es6', 'tic-tac-toe'],
    title: 'React.js Tic Tac Toe Game',
  },
  {
    image: 'https://cdn-images-1.medium.com/max/1024/0*V4-n0NNh2kKv0Ulp.jpg',
    link:
      'https://medium.com/@jerrythimothy/create-your-css-npm-module-and-use-it-in-your-project-178894834f08?source=rss-ae39575946a------2',
    tags: ['css', 'npm', 'javascript', 'css-modules', 'scss'],
    title: 'Create your own css npm module and use it in your project',
  },
  {
    image: 'https://cdn-images-1.medium.com/max/1024/0*P2GSDx6i_m-gOrzw',
    link:
      'https://medium.com/@jerrythimothy/create-your-own-npm-module-adf44126d1bd?source=rss-ae39575946a------2',
    tags: ['javascript', 'npm', 'node-modules', 'package-manager', 'node'],
    title: 'Create your own npm module',
  },
  {
    image: 'https://cdn-images-1.medium.com/max/72/0*ww2IjD2s3paDFgys.',
    link:
      'https://medium.com/@jerrythimothy/svg-sprites-e418ab93d8a7?source=rss-ae39575946a------2',
    tags: ['html', 'css3', 'svg', 'html5', 'css'],
    title: 'svg-sprites',
  },
  {
    image: 'https://cdn-images-1.medium.com/max/1024/0*LIlmfM40MweG_yxS.',
    link:
      'https://medium.com/@jerrythimothy/margins-paddings-sass-mixin-16460c32507f?source=rss-ae39575946a------2',
    tags: ['css3', 'css', 'paddling', 'html', 'sass'],
    title: 'margins-paddings-sass-mixin',
  },
  {
    image: 'https://cdn-images-1.medium.com/max/800/0*tWOVsyD4Pbein8A9.',
    link: 'https://medium.com/@jerrythimothy/simple-buttons-with-html-and-css-80da5860cdd0',
    tags: ['css', 'html', 'css3', 'html5', 'button'],
    title: 'Simple buttons with HTML and CSS',
  },
]

export const fetchBlogs = () => BLOGS
