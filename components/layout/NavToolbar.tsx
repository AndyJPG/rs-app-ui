import SearchIcon from '@mui/icons-material/Search'
import { Button, Container, IconButton, TextField } from '@mui/material'
import React from 'react'
import { useProductSearch, useSidePanel } from '../../state/store/store'

export const NavToolbar = () => {
  const openSidePanel = useSidePanel((state) => state.openSidePanel)
  const { searchKeywords, setSearchKeywords } = useProductSearch()

  return (
    <Container
      sx={{
        backgroundColor: 'white',
        color: (theme) => theme.palette.text.primary,
        py: '0.6rem',
        display: 'flex',
      }}
    >
      <TextField
        variant="outlined"
        size="small"
        placeholder="BBQ Pork Bun ..."
        value={searchKeywords}
        onChange={(event) => setSearchKeywords(event.target.value)}
        sx={{
          '& .MuiOutlinedInput-input': {
            padding: '0.3rem 0',
          },
          pr: '1rem',
        }}
        InputProps={{
          startAdornment: (
            <IconButton color="secondary" size="small">
              <SearchIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ py: 0, minHeight: '1rem' }}
        onClick={() =>
          openSidePanel({
            children: <div>Category menu</div>,
            anchor: 'right',
          })
        }
      >
        Menu
      </Button>
    </Container>
  )
}
