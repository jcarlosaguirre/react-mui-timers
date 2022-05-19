import logo from './logo.svg';
import './App.css';
import {
    AppBar,
    Button,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow, Toolbar
} from "@mui/material";
import { Home } from "@mui/icons-material";
import DateViewer from "./components/DateViewer";


function App() {

  return (
      <>
          <AppBar color={'secondary'} position={'sticky'}>
              <Toolbar>
                  <IconButton style={{ color: 'white' }} edge={'start'} >
                      <Home ></Home>
                  </IconButton>
                  <header>
                      <Button color="warning">
                          Home
                      </Button>
                      <Button color="warning">
                          Home
                      </Button>
                      <Button color="warning">
                          Home
                      </Button>
                      <Button color="warning">
                          Home
                      </Button>
                  </header>

              </Toolbar>
          </AppBar>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align={'center'}>
                                <DateViewer zone={'Europe'} mainCity={'Madrid'}></DateViewer>
                            </TableCell>
                            <TableCell align={'center'}>
                                <DateViewer zone={'America'} mainCity={'New_York'}></DateViewer>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
          </header>
        </div>
      </>
  );
}

export default App;
