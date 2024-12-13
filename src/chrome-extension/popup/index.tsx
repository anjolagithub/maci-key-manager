import React, { useState } from "react";
import { generateKeyPair, encryptKey, decryptKey } from "../../utils/crypto";

const Popup = () => {
  const [privateKey, setPrivateKey] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [encryptedKey, setEncryptedKey] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");

  const handleGenerate = () => {
    const { privateKey, publicKey } = generateKeyPair();
    setPrivateKey(privateKey);
    setPublicKey(publicKey);
  };

  const handleEncrypt = async () => {
    if (!privateKey || !password) return alert("Generate a key and provide a password!");
    const encrypted = await encryptKey(privateKey, password);
    setEncryptedKey(encrypted);
    alert("Key encrypted successfully!");
  };

  const handleDecrypt = async () => {
    if (!encryptedKey || !password) return alert("Provide an encrypted key and password!");
    const decrypted = await decryptKey(encryptedKey, password);
    alert(`Decrypted Key: ${decrypted}`);
  };

  return (
    <div className="p-4 w-80">
      <h1 className="text-lg font-bold">MACI Key Manager</h1>
      <button
        onClick={handleGenerate}
        className="mt-4 w-full p-2 bg-blue-500 text-white rounded"
      >
        Generate Keypair
      </button>
      {privateKey && publicKey && (
        <div className="mt-4">
          <h2 className="font-bold">Keys</h2>
          <p>
            <strong>Public Key:</strong> {publicKey}
          </p>
          <div className="mt-2">
            <input
              type="password"
              placeholder="Enter password"
              className="p-2 border rounded w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleEncrypt}
              className="mt-2 w-full p-2 bg-green-500 text-white rounded"
            >
              Encrypt Private Key
            </button>
            {encryptedKey && (
              <button
                onClick={handleDecrypt}
                className="mt-2 w-full p-2 bg-yellow-500 text-white rounded"
              >
                Decrypt Private Key
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
