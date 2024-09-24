import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import loginBanner from '/public/images/login-banner.jpg'

export default function RegisterLayout() {
  return (
    <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: '1 1', overflow: 'auto' }}>
        {/* <Stack
          direction='column'
          component='main'
          sx={[
            {
              justifyContent: 'space-between',
              height: { xs: 'auto', md: '100%' }
            }
          ]}
        > */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            justifyContent: 'space-between',
            gap: 0,
            p: 0,
            m: 'auto',
            height: { xs: 'auto', md: '100%' }
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '52vw',
              height: { xs: 'auto', md: '100%' },
              backgroundImage: `url(${loginBanner})`,
              backgroundSize: 'cover'
            }}
          ></Box>
          <Outlet />
        </Stack>
        {/* </Stack> */}
      </Box>
    </Box>
  )
}
