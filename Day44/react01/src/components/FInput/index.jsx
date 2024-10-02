import { TextField, Button } from "@mui/material"

function FInput() {
    return (
      <>
        <form action="submit">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button type="submit" variant="contained">Contained</Button>
        </form>
      </>
    )
  }
  
  export default FInput