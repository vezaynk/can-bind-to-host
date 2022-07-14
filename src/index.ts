import net from 'net';

const canBindToHost = (host: string = '0.0.0.0', port: number = 0) => {
  let server: net.Server | null = null;
  return new Promise<boolean>((res) => {
    if (port >= 0 && port <= 65_535) {
      server = net
        .createServer()
        .listen({
          host,
          port: 0,
        })
        .addListener('error', () => res(false))
        .addListener('listening', () => {
          server?.close();
          res(true);
        });
    } else res(false);
  });
};

export default canBindToHost;
export { canBindToHost };
