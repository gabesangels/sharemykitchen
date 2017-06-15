// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num) => {
  return `/ajax/hello/${num || ':num'}`
}
