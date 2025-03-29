export const CTRY_TOKEN_ADDRESS = process.env.REACT_APP_CTRY_TOKEN_ADDRESS;
export const CTRY_NFT_ADDRESS = process.env.REACT_APP_CTRY_NFT_ADDRESS;

export const CTRY_TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)"
];

export const CTRY_NFT_ABI = [
  "function mint(string memory tokenURI) public returns (uint256)",
  "function ownerOf(uint256 tokenId) public view returns (address)",
  "function tokenURI(uint256 tokenId) public view returns (string memory)"
]; 