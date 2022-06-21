import { Pagination } from "@mui/material";
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from "styled-components";


export default function CustomPagination({setPage, numOfPages = 10, page}) {

  const handlePageChange = (page) =>{
    setPage(page)
    window.scroll(0,0)
  }

  const darkTheme = createTheme({
    palette: {
      type: 'dark'
    }
  })

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "20px"
    }}>
        <ThemeProvider theme={darkTheme}>
        <Pagination 
          onChange={(e) => handlePageChange(e.target.textContent)}
          count = {numOfPages}
          color = 'primary'
          hideNextButton
          hidePrevButton
          // page={page.intValue()}
        />
        </ThemeProvider>
    </div>
  );
}
