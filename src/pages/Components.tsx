import React, { useState } from 'react';
import { Button, Card, Typography, TextField, Alert } from '@/components/ui';

export const Components: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="container py-8">
      <Typography variant="h1" className="mb-8">
        Component Showcase
      </Typography>

      {/* Typography Section */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-4">
          Typography
        </Typography>
        <div className="space-y-4">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="body1">Body 1 - Regular text</Typography>
          <Typography variant="body2">Body 2 - Smaller text</Typography>
          <Typography variant="caption">Caption - Smallest text</Typography>
        </div>
      </section>

      {/* Button Section */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-4">
          Buttons
        </Typography>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="text" color="primary">
              Primary
            </Button>
            <Button variant="text" color="secondary">
              Secondary
            </Button>
            <Button variant="text" color="error">
              Error
            </Button>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-4">
          Cards
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="elevated">
            <Typography variant="h6" className="mb-2">
              Elevated Card
            </Typography>
            <Typography variant="body2">
              This is an elevated card with shadow and border.
            </Typography>
          </Card>
          <Card variant="outlined">
            <Typography variant="h6" className="mb-2">
              Outlined Card
            </Typography>
            <Typography variant="body2">
              This is an outlined card with border only.
            </Typography>
          </Card>
        </div>
      </section>

      {/* TextField Section */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-4">
          Text Fields
        </Typography>
        <div className="space-y-4 max-w-md">
          <TextField label="Default TextField" />
          <TextField label="Error TextField" error helperText="This is an error message" />
          <TextField label="Disabled TextField" disabled />
          <TextField label="Full Width TextField" fullWidth />
        </div>
      </section>

      {/* Alert Section */}
      <section className="mb-12">
        <Typography variant="h2" className="mb-4">
          Alerts
        </Typography>
        <div className="space-y-4">
          {showAlert && (
            <Alert severity="success" onClose={() => setShowAlert(false)}>
              Success alert with close button
            </Alert>
          )}
          <Alert severity="info">
            Info alert without close button
          </Alert>
          <Alert severity="warning">
            Warning alert
          </Alert>
          <Alert severity="error">
            Error alert
          </Alert>
        </div>
      </section>
    </div>
  );
}; 