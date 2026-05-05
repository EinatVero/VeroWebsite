// Local dev helper: mint a signed upgrade token for testing.
// Usage:  node --env-file=.env.local scripts/mint-token.mjs +447809495613

import { SignJWT } from 'jose';

const phoneNumber = process.argv[2];
if (!phoneNumber) {
  console.error('Usage: node --env-file=.env.local scripts/mint-token.mjs <phoneNumber>');
  process.exit(1);
}

const secret = process.env.UPGRADE_TOKEN_SECRET;
if (!secret) {
  console.error('UPGRADE_TOKEN_SECRET not set. Did you pass --env-file=.env.local?');
  process.exit(1);
}

const key = new TextEncoder().encode(secret);
const token = await new SignJWT({ phoneNumber })
  .setProtectedHeader({ alg: 'HS256' })
  .setIssuer('vero-whatsapp')
  .setAudience('vero-website')
  .setIssuedAt()
  .setExpirationTime('24h')
  .sign(key);

console.log(token);
