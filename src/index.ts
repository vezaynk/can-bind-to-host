import net from 'net';

const canBindToHost = (host: string, port: number = 0) => {
  let server: net.Server | null = null;
  return new Promise<boolean>((res) => {
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
  });
};

export default canBindToHost;
export { canBindToHost };
