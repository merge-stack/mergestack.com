import { SSTConfig } from 'sst';
import sstNodeConfigs from 'sst/node/config';
import { Service } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'mergestackcom',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const service = new Service(stack, 'mergestack.com', {
        port: 3000,
      });

      stack.addOutputs({
        ServiceUrl: service.url,
      });
    });
  },
} satisfies SSTConfig;
