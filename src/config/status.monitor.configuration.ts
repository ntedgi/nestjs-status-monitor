import { HealthCheckConfiguration } from './health.check.configuration';
import { SpansConfiguration } from './spans.configuration';
import { ChartVisibilityConfiguration } from './chart.visibility.configuration';

export interface StatusMonitorConfiguration {
  path: string;
  port: number;
  pathName?: string;
  socketPath: string;
  title: string;
  ignoreStartsWith: string | string[];
  healthChecks: HealthCheckConfiguration[];
  spans: SpansConfiguration[];
  chartVisibility: ChartVisibilityConfiguration;
}
