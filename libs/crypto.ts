'use server'
import CryptoJS from 'crypto-js';

export async function encryptValue(value: string, key: string){
  try {
    const encrypted = CryptoJS.AES.encrypt(value, key).toString();    
    return encrypted;
  } catch (error) {
    console.error('Error encrypting value:', error);
    return undefined;
  }
};

export async function decryptValue(encryptedValue: string, key: string){
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  } catch (error) {
    console.error('Error decrypting value:', error);
    return undefined;
  }
};
