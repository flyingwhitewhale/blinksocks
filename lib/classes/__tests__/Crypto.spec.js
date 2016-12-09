'use strict';var _Crypto=require('../Crypto');jest.mock('../Config');var plainText=Buffer.from([0,1,2]);var cipherText=Buffer.from([155,128,80]);var hash='81226733f35ff94c86f0d4e7086184d016be2ed9435a583cdf178214228cd799';describe('Crypto#encrypt#decrypt with a cipher',function(){beforeEach(function(){var _require=require('../Config'),Config=_require.Config;Config.cipher='aes-256-cfb';Config.key='keyfortest'});it('should return cipherText',function(){expect(_Crypto.Crypto.encrypt(plainText).equals(cipherText)).toBe(true)});it('should return plainText',function(){expect(_Crypto.Crypto.decrypt(cipherText).equals(plainText)).toBe(true)})});describe('Crypto#encrypt#decrypt without a cipher',function(){beforeEach(function(){var _require2=require('../Config'),Config=_require2.Config;Config.cipher='';Config.key=''});it('should return plainText',function(){expect(_Crypto.Crypto.encrypt(plainText).equals(plainText)).toBe(true)});it('should return cipherText',function(){expect(_Crypto.Crypto.decrypt(cipherText).equals(cipherText)).toBe(true)})});describe('Crypto#hash',function(){it('should return right hash',function(){expect(_Crypto.Crypto.hash('abc')).toBe(hash)})});