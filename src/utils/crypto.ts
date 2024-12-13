export const generateKeyPair = () => {
  const wallet = Wallet.createRandom();
  return {
    privateKey: wallet.privateKey,
    publicKey: wallet.address,
  };
};

// Convert string to ArrayBuffer
const textToArrayBuffer = (text: string): ArrayBuffer => new TextEncoder().encode(text);

// Convert ArrayBuffer to Base64 string
const arrayBufferToBase64 = (buffer: ArrayBuffer): string =>
  btoa(String.fromCharCode(...new Uint8Array(buffer)));

// Convert Base64 string to ArrayBuffer
const base64ToArrayBuffer = (base64: string): ArrayBuffer =>
  Uint8Array.from(atob(base64), (char) => char.charCodeAt(0)).buffer;

// Encrypt a private key
export const encryptKey = async (privateKey: string, password: string): Promise<string> => {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    textToArrayBuffer(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const derivedKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    fals
