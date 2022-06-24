import React, { useState } from 'react';
import { Grid } from '@mui/material';
import '../../Theme/Theme';
import '../../Pages/Home.css';
import '../../Pages/Page.css';
import Typography from '@mui/material/Typography';
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
import { Button } from '@mui/material';
import { CardMedia } from '@mui/material';
import { MetaLogin } from '../../Blockchain/MetaMaskLogin';
import * as bootUpStation from '../../Blockchain/BootUpStation';
import { ethers } from 'ethers';
import { bobotGenesisAddress } from '../../Blockchain/ContractAddress';
import BobotGenesisABI from '../../ABI/BobotGenesis.json';
import MerkleWallets from '../../merkleWallets.json';
import { MetaMaskAccounts } from '../../Blockchain/MetaMaskLogin';
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const MobileMint: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<String>();
  const [isPressed, setIsPressed] = useState<Boolean>(false);

  const handleClick = async () => {
    // prevent user from spamming the mint button
    if (isPressed === false) {
      setIsPressed(true);
      mintBobotMobile();
      setIsPressed(false);
    }
  };

  function mintBobotMobile() {
    if ((window as any).ethereum) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(bobotGenesisAddress, BobotGenesisABI.abi, signer);
      console.log(contract);

      provider
        .getNetwork()
        .then((response) => {
          if (bootUpStation.verifyNetwork(response) === true) {
            const whitelistAddresses = MerkleWallets.wallets;
            const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
            const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

            const claimingAddress = keccak256(MetaMaskAccounts[0]);

            const hexProof = merkleTree.getHexProof(claimingAddress);

            if (hexProof.length > 0) setErrorMessage('Your address is whitelisted!');
            try {
              contract
                .mintBobot(hexProof)
                .then((response: any) => {
                  console.log('mint response: ', response);

                  response
                    .wait()
                    .then((waitResponse: any) => {
                      if (waitResponse.status === 1) {
                        setErrorMessage('Minting successful!');
                      }
                    })
                    .catch((error: any) => {
                      console.log(error);
                    });
                })
                .catch((error: any) => {
                  const errorMessage: string =
                    error?.error?.data?.message === undefined ? '' : error?.error?.data?.message;
                  if (errorMessage !== '') {
                    setErrorMessage(errorMessage);
                  } else {
                    setErrorMessage('Mint call not executed!');
                  }
                });
            } catch {
              setErrorMessage('Mint call not executed!');
            }
          } else {
            setErrorMessage('Cannot mint due to incorrect network!');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // log in manually first as we need to access the
  // metamask account wallet for minting verification later on
  MetaLogin();

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '0px',
        height: '100vh',
        boxShadow: 'none',
      }}
    >
      <div className="mint" style={{ zIndex: 21 }}>
        <Typography
          paddingBottom={'50px'}
          paddingTop={'25px'}
          fontFamily="Dongle"
          letterSpacing={'1px'}
          lineHeight={0}
          color="#ffffffff"
          fontWeight="bold"
          variant="subtitle1"
          fontSize="1.25rem"
        >
          {errorMessage}
        </Typography>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '0px',
            boxShadow: 'none',
          }}
        >
          <CardMedia
            component="video"
            muted={true}
            image={'mint/video_unrevealed.mp4'}
            autoPlay
            loop
            style={{
              zIndex: 10,
              margin: '5px',
              width: '250px',
              height: '250px',
              borderRadius: '50px',
            }}
          />
        </Grid>
        <Typography
          paddingBottom={'50px'}
          paddingTop={'25px'}
          fontFamily="Dongle"
          letterSpacing={'5px'}
          lineHeight={0}
          color="#ffffffff"
          fontWeight="bold"
          variant="subtitle1"
          fontSize="1.5rem"
        >
          BOBOTS GENESIS
        </Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          style={{
            height: '40px',
            width: '80px',
            fontFamily: 'Dongle',
            fontSize: '1.5rem',
            backgroundColor: '#ebbd34cc',
            borderRadius: '20px',
            boxShadow: 'none',
            margin: '5px',
          }}
        >
          MINT
        </Button>
      </div>
    </Grid>
  );
};

export default MobileMint;
