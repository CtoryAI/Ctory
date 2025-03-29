export const validateStoryPrompt = (prompt) => {
  if (!prompt || prompt.trim().length === 0) {
    return {
      isValid: false,
      error: 'Story prompt cannot be empty'
    };
  }

  if (prompt.length > 500) {
    return {
      isValid: false,
      error: 'Story prompt must be less than 500 characters'
    };
  }

  return {
    isValid: true,
    error: null
  };
};

export const validateWalletAddress = (address) => {
  if (!address) {
    return {
      isValid: false,
      error: 'Wallet address is required'
    };
  }

  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return {
      isValid: false,
      error: 'Invalid wallet address format'
    };
  }

  return {
    isValid: true,
    error: null
  };
};

export const validateFileSize = (file, maxSize = 10) => {
  if (!file) {
    return {
      isValid: false,
      error: 'File is required'
    };
  }

  const sizeInMB = file.size / (1024 * 1024);
  if (sizeInMB > maxSize) {
    return {
      isValid: false,
      error: `File size must be less than ${maxSize}MB`
    };
  }

  return {
    isValid: true,
    error: null
  };
};

// Email validation using RFC 5322 Official Standard pattern
export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
};

// URL validation
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

// Ethereum address validation
export const isValidEthereumAddress = (address) => {
  const addressRegex = /^0x[a-fA-F0-9]{40}$/;
  return addressRegex.test(address);
};

// Check if string is empty or only whitespace
export const isEmptyString = (str) => {
  return !str || str.trim() === '';
};

// Validate story content minimum length
export const isValidStoryContent = (content, minLength = 100) => {
  return content && content.trim().length >= minLength;
};

// Validate story title (not empty and reasonable length)
export const isValidTitle = (title, minLength = 3, maxLength = 100) => {
  const trimmedTitle = title.trim();
  return trimmedTitle.length >= minLength && trimmedTitle.length <= maxLength;
};

// Validate username (alphanumeric with some special chars, proper length)
export const isValidUsername = (username, minLength = 3, maxLength = 30) => {
  const usernameRegex = /^[a-zA-Z0-9_.-]+$/;
  const trimmedUsername = username.trim();
  return (
    usernameRegex.test(trimmedUsername) &&
    trimmedUsername.length >= minLength &&
    trimmedUsername.length <= maxLength
  );
};

// Validate tags (each tag is valid)
export const isValidTags = (tags, maxTags = 5) => {
  if (!Array.isArray(tags) || tags.length > maxTags) {
    return false;
  }
  
  const tagRegex = /^[a-zA-Z0-9_-]+$/;
  return tags.every(tag => 
    typeof tag === 'string' && 
    tag.trim().length > 0 && 
    tag.trim().length <= 20 &&
    tagRegex.test(tag.trim())
  );
}; 