# @ntlib/status-monitor-nestjs

Simple, self-hosted module based on Socket.io and Chart.js to report realtime server metrics for NestJS v9+ based servers.

```sh 
$ npm i @ntlib/status-monitor-nestjs
```

### NodeJS and Nest Compatibility Matrix.
####
| Node Version | Nest Version |
|--------------|--------------|
| ^18.x        | ^9.x         |
####
###

![Status monitor page](https://raw.githubusercontent.com/ntedgi/nestjs-status-monitor/main/assets/demo.gif?token=GHSAT0AAAAAACGYTHRFFTOGCQG3TJ6GCYSSZHMWXJQ)

## Installation & setup NestJS 

1. Run `npm install @ntlib/status-monitor-nestjs @nestjs/platform-socket.io@9.4.3 --save`
2. Setup module import:

```javascript
@Module({
  imports: [StatusMonitorModule.forRoot()] //default config
})
```

3. Run server and visit `/status`

## Options

Monitor can be configured by passing options object during initialization of
module.

```javascript
@Module({
  imports: [StatusMonitorModule.forRoot(config)]
})
```

Default config:

```javascript
{
  title: 'NestJS Status',
  path: '/status',
  socketPath: '/socket.io',
  port: null, 
  spans: [
    {
      interval: 1, 
      retention: 60, 
    },
    {
      interval: 5,
      retention: 60,
    },
    {
      interval: 15, 
      retention: 60,
    },
  ],
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    eventLoop: true,
    heap: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
  ignoreStartsWith: ['/admin'],
  healthChecks: [],
}
```

## Health Checks

You can add a series of health checks to the configuration that will appear
below the other stats. The health check will be considered successful if the
endpoint returns a 200 status code.

```javascript
// config
healthChecks: [
  {
    protocol: 'http',
    host: 'localhost',
    path: '/health/alive',
    port: 3001,
  },
  {
    protocol: 'http',
    host: 'localhost',
    path: '/health/dead',
    port: 3001,
  },
];
```

## Local demo

1. Run the following:

```sh
npm i
cd examples/integrate-status-monitor
npm i
npm start
```

2. Visit [http://localhost:3001/status](http://localhost:3001/status)
