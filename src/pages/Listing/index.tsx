import { Box, Container, Grid, Typography } from "@mui/material"
import { useState } from "react"
// import Carousel from "../../components/Carousel"
// import MHidden from "../../components/MHidden"
import ServiceCardItem, { IServiceCardDataItem } from "../../components/ServiceCardItem"

/* ----------------------------------------------------------------- */

type TInitSites = Array<IServiceCardDataItem>

/* ----------------------------------------------------------------- */

// const SLIDE_SETTINGS = {
//   dots: true,
//   arrows: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   initialSlide: 0,
//   autoplay: true,
//   autoplaySpeed: 9000,
//   responsive: [
//     {
//       breakpoint: 1280,
//       settings: { slidesToShow: 3 }
//     },
//     {
//       breakpoint: 1024,
//       settings: { slidesToShow: 3 }
//     },
//     {
//       breakpoint: 960,
//       settings: { slidesToShow: 2 }
//     },
//     {
//       breakpoint: 480,
//       settings: { slidesToShow: 1, centerPadding: '0' }
//     }
//   ]
// }

const INIT_SITES: TInitSites = [
  {
    title: 'CoinGecko Fast-Track Listing',
    image: '/assets/images/coingecko.webp',
    path: '/listing/coingecko',
    price: 4500,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'CoinMarketCap Upvotes',
    image: '/assets/images/coinmarketcap.webp',
    path: '/listing/coinmarketcap',
    price: 9500,
    priceHigh: undefined,
    priceLow: undefined
  },
  {
    title: 'TrustWallet Logo',
    image: '/assets/images/trustwallet.webp',
    path: '/listing/trustwallet',
    price: 1500,
    priceHigh: undefined,
    priceLow: undefined
  }
]

export default function Listing() {
  const [sites, setSites] = useState(INIT_SITES)

  return (
    <Box my={{ xs: 5, md: 10 }}>
      <Container maxWidth="xl">
        <Typography textAlign="center" variant="h4">
          Listing Services
        </Typography>
        <Typography textAlign="center" variant="h6">
          All-in-one crypto services with the most effective marketing solution from the marketplace.
        </Typography>

        <Box mt={{ xs: 3, md: 6 }}>
          <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            {sites.map((dataItem, index) => (
              <Grid item xs={6} sm={4} md={3} key={dataItem.title}>
                <ServiceCardItem key={index} dataItem={dataItem} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}