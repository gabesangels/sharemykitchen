import { helloEndpointRoute } from './routes'

test('helloEndpointRoute', () => {
  expect(helloEndpointRoute(1234)).toBe('/ajax/hello/1234')
  expect(helloEndpointRoute()).toBe('/ajax/hello/:num')
})
