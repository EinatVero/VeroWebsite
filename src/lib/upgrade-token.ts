import { SignJWT, jwtVerify } from 'jose';

const ISSUER = 'vero-whatsapp';
const AUDIENCE = 'vero-website';

function getSecret(): Uint8Array {
  const secret = process.env.UPGRADE_TOKEN_SECRET;
  if (!secret) throw new Error('UPGRADE_TOKEN_SECRET is not set');
  return new TextEncoder().encode(secret);
}

export interface UpgradeTokenPayload {
  phoneNumber: string;
}

export async function signUpgradeToken(
  phoneNumber: string,
  ttlSeconds = 60 * 60 * 24,
): Promise<string> {
  return new SignJWT({ phoneNumber })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setExpirationTime(`${ttlSeconds}s`)
    .sign(getSecret());
}

export async function verifyUpgradeToken(
  token: string,
): Promise<UpgradeTokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      issuer: ISSUER,
      audience: AUDIENCE,
    });
    if (typeof payload.phoneNumber !== 'string') return null;
    return { phoneNumber: payload.phoneNumber };
  } catch {
    return null;
  }
}
