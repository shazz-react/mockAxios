This sample project is a simple demo of how to mock a axios api response data.

1. Import mock adapter
   const MockAdapter = require('axios-mock-adapter');

2. Create an instance of mock adapter
   const mock = new MockAdapter(axiosInstance, {delayResponse: 1000});

3. Define an api to mock with response status and response data
   mock.onGet(APIs.TODOS_API).reply(200, mockTodosData);
