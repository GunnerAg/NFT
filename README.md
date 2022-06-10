# TODO 1: Añadir funcion para mint de admins evento.
# TODO 2: Añadir al loop la funcion de checkeo de wallets que han recibido el token para los asistentes al evento (ahora mismo lo valida una vez al arrancar script).

## IMPORTANTE: Hay dos tokens, uno con uri storage y otro no. Si los uri tienen una parte común usar token Test1.sol, si cada uri es completamente diferente usar Test2.sol.

# 0: Instalar dependencias con "npm install".

# 1: Cambiar nombre .env.example por .env y Añadir los valores de MNEMONIC, PRIVATE_KEY y PUBLIC_KEY.
### Añadir los wallets al array accounts en mint.js o mint2.js.

### Solo para Token2.sol
**añadir uris de cada token en el array tokenUris de mint2.js. Los dos arrays deben tener el mismo tamaño o algun NFT no tendra metadatos, añadir una funcion para cambiarlos a posteriori es posible pero no es recomendable.**

# 2: Cambiar el nombre de el/los contrato/s de Test1.sol/Test2.sol y el nombre y symbolo en el constructor.
**modificar nombre del contrato tambien en migrations/1_deploy_contract.js y smart-contracts/index.ts**

# 3: PARA Token1.sol
### Añadir el hash de ipfs a la funcion _baseURI del contrato.

**los metadatos deben tener un project hash común, con la forma:**
**https://ipfs.io/ipfs/<my_project_hash>/**
**p.e --> "https://ipfs.io/ipfs/QmTW1vEBybzCXLtAoiWHvQf5FU5ZBFDUusoXV16bEA9ePj/"**

**Y los metadatos de cada nft deben estar alojados en**
**https://ipfs.io/ipfs/<my_project_hash>/<token_id>**
**los token id van desde 0 hasta X valor**
**p.e --> "https://ipfs.io/ipfs/QmTW1vEBybzCXLtAoiWHvQf5FU5ZBFDUusoXV16bEA9ePj/0"**

# 4: Ejecutar el comando para desplegar el contrato en la red que se quiera.
**Rinkeby--> npm run deploy:tesnet, Mainet--> npm run deploy:production**
**ejecutar el script del loop con node**
**Test1.sol --> src/samart-contracts/scripts/mint.js.**
**Test2.sol --> src/samart-contracts/scripts/mint2.js.**