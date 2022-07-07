import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Link,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Icon as MuiIcon,
  IconButton,
  Stack
} from '@mui/material';
import { Icon } from '@iconify/react';
import Flag from 'react-world-flags';
import {
  COLOR_PRIMARY,
} from '../../utils/constants';
import { FilterTextField } from '../../components/styledComponents';
import MHidden from '../../components/MHidden';
import { thoursandsSeparators } from '../../utils/functions';

const DATA = [
  {
    platform: 'coingecko.com',
    trafficIndex: 267,
    mainAudience: {
      country: 'us',
      percentage: 18.6
    },
    pricing: '15 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
  {
    platform: 'coinmarketcap.com',
    trafficIndex: 57,
    mainAudience: {
      country: 'us',
      percentage: 19.9
    },
    pricing: '20 BUSD',
    shop: 'https://t.me/upvote.cc'
  }
];

export default function WatchlistSection({ sx }) {
  const [period, setPeriod] = useState('');
  return (
    <Box sx={{ ...sx }}>
      <Container maxWidth="xl">
        <Box position="relative">
          <Typography
            variant="h4"
            fontWeight={700}
            color={COLOR_PRIMARY}
            textAlign="center"
          >
            Watchlist
          </Typography>
          <FilterTextField
            label="Period"
            name="period"
            select
            sx={{ position: 'absolute', bottom: 0, right: 0, width: 100 }}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <MenuItem value="1">1 day</MenuItem>
            <MenuItem value="3">3 days</MenuItem>
            <MenuItem value="5">5 days</MenuItem>
          </FilterTextField>
        </Box>

        <TableContainer
          component={Paper}
          elevation={24}
          sx={{ mt: 4, p: { xs: 0, md: 2 } }}
        >
          <Table>
            <TableHead sx={{ textTransform: 'uppercase' }}>
              <TableRow>
                <TableCell sx={{ color: COLOR_PRIMARY, fontWeight: 900 }} variant="head">
                  Platform
                </TableCell>
                <TableCell sx={{ color: COLOR_PRIMARY, fontWeight: 900 }} variant="head">
                  Traffic Index
                </TableCell>
                <TableCell
                  sx={{
                    color: COLOR_PRIMARY,
                    fontWeight: 900,
                    display: { xs: 'none', sm: 'table-cell' }
                  }}
                  variant="head"
                >
                  Main Audience
                </TableCell>
                <TableCell sx={{ color: COLOR_PRIMARY, fontWeight: 900 }} variant="head">
                  Pricing
                </TableCell>
                <TableCell sx={{ color: COLOR_PRIMARY, fontWeight: 900 }} variant="head">
                  Shop
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                DATA.map(dataItem => (
                  <TableRow key={dataItem.platform}>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      {dataItem.platform}
                    </TableCell>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      {dataItem.trafficIndex && thoursandsSeparators(dataItem.trafficIndex)}
                    </TableCell>
                    <TableCell
                      sx={{
                        overflow: 'auto',
                        display: { xs: 'none', sm: 'table-cell' }
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Flag
                          code={dataItem.mainAudience.country}
                          height={16}
                          fallback={<span>Unknown</span>}
                        />
                        <Typography variant="body2" component="span">
                          ({dataItem.mainAudience.percentage}%)
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      Starting from {dataItem.pricing}
                    </TableCell>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      <MHidden width="smDown">
                        <Button
                          variant="contained"
                          component={Link}
                          href={dataItem.shop}
                          target="_blank"
                        >
                          Order Now
                        </Button>
                      </MHidden>
                      <MHidden width="smUp">
                        <IconButton
                          component={Link}
                          href={dataItem.shop}
                          target="_blank"
                          sx={{ color: COLOR_PRIMARY }}
                        >
                          <MuiIcon>
                            <Icon icon="icon-park-outline:transaction-order" />
                          </MuiIcon>
                        </IconButton>
                      </MHidden>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box >
  );
}