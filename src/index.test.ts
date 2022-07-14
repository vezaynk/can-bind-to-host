import canBindToHost from '.';

test('Can bind to localhost', async () => {
  const canBind = await canBindToHost('localhost');
  expect(canBind).toBe(true);
});

test('Cannot bind to localhost:99999', async () => {
  const canBind = await canBindToHost('localhost', 99999);
  expect(canBind).toBe(false);
});

test('Cannot bind to localhost:-1', async () => {
  const canBind = await canBindToHost('localhost', -1);
  expect(canBind).toBe(false);
});

test('Cannot bind to localhost:NaN', async () => {
  const canBind = await canBindToHost('localhost', NaN);
  expect(canBind).toBe(false);
});

test('Can bind to localhost:9999', async () => {
  const canBind = await canBindToHost('localhost', 9999);
  expect(canBind).toBe(true);
});

test('Can bind to ::1', async () => {
  const canBind = await canBindToHost('::1');
  expect(canBind).toBe(true);
});

test('Can bind to 127.0.0.1', async () => {
  const canBind = await canBindToHost('127.0.0.1');
  expect(canBind).toBe(true);
});

test('Can bind to 127.0.0.255', async () => {
  const canBind = await canBindToHost('127.0.0.255');
  expect(canBind).toBe(true);
});

test('Can bind to 0.0.0.0', async () => {
  const canBind = await canBindToHost('0.0.0.0');
  expect(canBind).toBe(true);
});

test('Can bind to localtest.me', async () => {
  const canBind = await canBindToHost('localtest.me');
  expect(canBind).toBe(true);
});

test('Can bind to 255.255.255.255', async () => {
  const canBind = await canBindToHost('255.255.255.255');
  expect(canBind).toBe(true);
});

test('Cannot bind to wikipedia.org', async () => {
  const canBind = await canBindToHost('wikipedia.org');
  expect(canBind).toBe(false);
});
test('Cannot bind to 1.1.1.1.1.1', async () => {
  const canBind = await canBindToHost('1.1.1.1.1.1');
  expect(canBind).toBe(false);
});
