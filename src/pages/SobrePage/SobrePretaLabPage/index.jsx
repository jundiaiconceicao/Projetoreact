import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import './styles.css'
const SobrePretaLabPage = () => {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100vw"
      gap={2}
      marginBottom="100px"
    >
      <Box>
        <Stack alignItems="center" gap={1} marginTop="60px">
          <Typography variant="h4">PretaLab</Typography>
        </Stack>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        gap={2}
        marginTop="60px"
        flexDirection="column"
      >
        <Stack>
          <Typography variant="h6">
            No projeto da Pretalab tive o primeiro com CSS,HTML, react, Java e
            desenvolvi o meu site. Estar neste projeto ampliou a minha
            existência, pois estive em um ambiente seguro,onde pude me
            identificar como mulher e preta. Que o nosso lugar é onde nós
            queremos estar, inclusive a tecnologia.
          </Typography>
          <Box marginTop={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <a href="https://www.pretalab.com/" target="_blank" className="aSobre">Conheça mais</a>
          </Box>
        </Stack>
      </Box>
    
    </Container>
  );
};

export default SobrePretaLabPage;
