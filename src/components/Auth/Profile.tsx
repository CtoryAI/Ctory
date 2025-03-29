import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Card, Typography, TextField, Alert } from '@/components/ui';

export const Profile: React.FC = () => {
  const { user, updateProfile, loading, error } = useAuth();
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    return null;
  }

  const handleUpdate = async () => {
    try {
      await updateProfile(user.id, { username, email });
      setIsEditing(false);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  return (
    <Card className="max-w-md mx-auto p-6">
      <Typography variant="h2" className="text-center mb-6">
        Profile
      </Typography>
      {error && (
        <Alert severity="error" className="mb-4">
          {error}
        </Alert>
      )}
      <div className="space-y-4">
        <div>
          <Typography variant="body2" className="text-gray-600">
            Wallet Address
          </Typography>
          <Typography variant="body1" className="font-mono">
            {user.address}
          </Typography>
        </div>
        {isEditing ? (
          <>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <div className="flex space-x-2">
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
                disabled={loading}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <Typography variant="body2" className="text-gray-600">
                Username
              </Typography>
              <Typography variant="body1">{user.username}</Typography>
            </div>
            <div>
              <Typography variant="body2" className="text-gray-600">
                Email
              </Typography>
              <Typography variant="body1">{user.email || 'Not set'}</Typography>
            </div>
            <Button
              variant="outlined"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          </>
        )}
      </div>
    </Card>
  );
}; 