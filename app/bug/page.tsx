'use server';

import { Box, Card, Typography } from '@mui/material';

export default async function Page() {
  return (
    <Card variant="outlined" sx={{ p: 2 }}>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Signaler un bug
        </Typography>
      </Box>
      Fonctionnalité indisponible, pour le moment...
    </Card>
  );
}
