/**
 * @typedef {Object} Story
 * @property {string} id - Unique identifier for the story
 * @property {string} title - Story title
 * @property {string} prompt - Original story prompt
 * @property {string} content - Generated story content
 * @property {string} author - Author's wallet address
 * @property {string} createdAt - Creation timestamp
 * @property {string} updatedAt - Last update timestamp
 */

/**
 * @typedef {Object} Video
 * @property {string} id - Unique identifier for the video
 * @property {string} storyId - Associated story ID
 * @property {string} url - Video URL
 * @property {string} thumbnail - Thumbnail URL
 * @property {string} status - Video generation status
 * @property {string} createdAt - Creation timestamp
 */

/**
 * @typedef {Object} NFT
 * @property {string} tokenId - NFT token ID
 * @property {string} owner - Owner's wallet address
 * @property {string} tokenURI - Metadata URI
 * @property {Object} metadata - NFT metadata
 */

/**
 * @typedef {Object} User
 * @property {string} address - Wallet address
 * @property {string} username - Display name
 * @property {string} avatar - Profile picture URL
 * @property {string[]} stories - List of story IDs
 * @property {string[]} nfts - List of NFT token IDs
 */ 