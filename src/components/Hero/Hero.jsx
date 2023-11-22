import {
  Button,
 
  Typography,
  TextField,
  useTheme,
  Box,
} from '@mui/material';
import React from 'react';

// import cipIcon from '../../assets/svg/CipIcon.svg';
// import hardIcon from '../../assets/svg/HardIcon.svg';
// import mickiImage from '../../assets/images/mickiImage.png';
// import spiral from '../../assets/images/Pattern.png';

export default function Hero() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: '#1D1260',
        [theme.breakpoints.down('sm')]: {
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center"
        },
        [theme.breakpoints.between('sm', 'md')]: {
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        },
        [theme.breakpoints.up('md')]: {
        
          
        },
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
          
            color: '#fff',
            [theme.breakpoints.down('sm')]: {
              fontSize:"40px",
              width: '343px',
            },
            [theme.breakpoints.between('sm', 'md')]: {
              fontSize:"50px"
            },
            [theme.breakpoints.up(  'md')]: {
              fontSize:"70px",
              marginLeft:"125px"
            },
          }}
        >
          make your <br /> personality into <br /> technology.
        </Typography>
      </Box>
      <Box sx={{color: 'RGBA(255,255,255,0.7 )',
            marginTop: '11px',
            [theme.breakpoints.down('sm')]: {
              width: '343px',
              height: '84px',
              fontSize:"14px"
     
            },
            [theme.breakpoints.between('sm', 'md')]: {
              width: '422px',
            },
            [theme.breakpoints.up('md')]: {
              width: '522px',
              height: '78px',
              marginLeft:"125px"
              
            },}}>
        <Typography
          variant="body1"
          sx={{
            color: 'RGBA(255,255,255,0.7 )',
            marginTop: '11px',
            
          }}
        >
          Robot technology is faster with the latest systems that make it
          possible your partner and ready to serve your needs. EnttTer email to
          get product launch information
        </Typography>
      </Box>
      <Box>
        <form>
          <TextField
            sx={{
              [theme.breakpoints.down('sm')]: {
                marginTop: '52px',
                width: '343px',
                height: '54px',
              },
              [theme.breakpoints.between('sm', 'md')]: {
                marginTop: '60px',
                width: '400px',
                height: '65px',
              },
              [theme.breakpoints.up('md')]: {
                marginLeft:"125px",
                marginTop: '57px',
                width: '497px',
                height: '80px',
                '& label': {
                  color: 'white',
                  marginTop: '12px',
                },
              },
              '& label.Mui-focused': {
                color: 'white',
              },
              '& label': {
                color: 'white',
              },
              '& .MuiInputBase-root': {
                backgroundColor: '#3F2EA3',
                height: '80px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'blue',
              },
            }}
            label="Enter your email address"
            fullWidth
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#F57438',
                    [theme.breakpoints.down('sm')]: {
                      width: '78px',
                      height: '34px',
                    },
                    [theme.breakpoints.up('md')]: {
                      width: '106px',
                      height: '48px',
                    },
                  }}
                >
                  Submit
                </Button>
              ),
            }}
          />
        </form>
      </Box>
    </Box>

    // <Grid
    //   sx={{
    //     backgroundColor:"#1D1260",
    //     [theme.breakpoints.down('sm')]: {},
    //     [theme.breakpoints.up('md')]: {},
    //   }}
    // >
    //   <Grid
    //     sx={{
    //       [theme.breakpoints.up('md')]: {
    //         marginLeft: '125px',
    //       },
    //       [theme.breakpoints.between('sm', 'md')]: {
    //         marginLeft: '16px',
    //       },
    //       [theme.breakpoints.down('sm')]: {
    //         marginLeft: '16px',
    //       },
    //     }}
    //   >
    //     <Typography
    //       variant="h2"
    //       sx={{
    //         fontSize: '70px',
    //         color: '#fff',
    //         [theme.breakpoints.down('sm')]: {

    //         },
    //         [theme.breakpoints.between('sm', 'md')]: {

    //         },
    //         [theme.breakpoints.up('md')]: {

    //         },
    //       }}
    //     >
    //       make your <br /> personality into <br /> technology.
    //     </Typography>
    //     <Typography
    //       variant="body1"
    //       sx={{
    //         color: 'RGBA(255,255,255,0.7 )',
    //         marginTop: '11px',
    //         [theme.breakpoints.down('sm')]: {
    //           width: '343px',
    //           height: '84px',
    //         },
    //         [theme.breakpoints.up('md')]: {
    //           width: '522px',
    //           height: '78px',
    //         },
    //       }}
    //     >
    //       Robot technology is faster with the latest systems that make it
    //       possible your partner and ready to serve your needs. EnttTer email to
    //       get product launch information
    //     </Typography>
    //     <form>
    //       <TextField
    //         sx={{
    //           [theme.breakpoints.down('sm')]: {
    //             marginTop: '52px',
    //             width: '343px',
    //             height: '54px',
    //           },
    //           [theme.breakpoints.between('sm', 'md')]: {
    //             marginTop: '60px',
    //             width: '400px',
    //             height: '65px',
    //           },
    //           [theme.breakpoints.up('md')]: {
    //             marginTop: '57px',
    //             width: '497px',
    //             height: '80px',
    //             '& label': {
    //               color: 'white',
    //               marginTop: '12px',
    //             },
    //           },
    //           '& label.Mui-focused': {
    //             color: 'white',
    //           },
    //           '& label': {
    //             color: 'white',
    //           },
    //           '& .MuiInputBase-root': {
    //             backgroundColor: '#3F2EA3',
    //             height: '80px',
    //           },
    //           '& .MuiOutlinedInput-notchedOutline': {
    //             borderColor: 'blue',
    //           },
    //         }}
    //         label="Enter your email address"
    //         fullWidth
    //         InputProps={{
    //           endAdornment: (
    //             <Button
    //               variant="contained"
    //               color="primary"
    //               sx={{
    //                 backgroundColor: '#F57438',
    //                 [theme.breakpoints.down('sm')]: {
    //                   width: '78px',
    //                   height: '34px',
    //                 },
    //                 [theme.breakpoints.up('md')]: {
    //                   width: '106px',
    //                   height: '48px',
    //                 },
    //               }}
    //             >
    //               Submit
    //             </Button>
    //           ),
    //         }}
    //       />
    //     </form>
    //   </Grid>
    //   <Grid
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       [theme.breakpoints.down('sm')]: {
    //         marginLeft: '31px',
    //         marginTop: '45px',
    //         marginBottom: '443px',
    //       },
    //       [theme.breakpoints.between('sm', 'md')]: {
    //         marginLeft: '16px',
    //         marginTop: '55px',
    //       },
    //       [theme.breakpoints.up('md')]: {
    //         marginLeft: '125px',
    //         marginTop: '65px',
    //       },
    //     }}
    //   >
    //     <Grid
    //       item
    //       xs={12}
    //       md={6}
    //       sx={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         flexDirection: 'column',
    //       }}
    //     >
    //       <img src={cipIcon} alt=" " />
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           textAlign: 'center',
    //           color: '#fff',
    //           [theme.breakpoints.down('sm')]: {
    //             marginTop: '21px',
    //             marginLeft: '16px',
    //           },
    //           [theme.breakpoints.between('sm', 'md')]: {
    //             marginTop: '21px',
    //             marginBottom: '97px',
    //           },
    //           [theme.breakpoints.up('md')]: {
    //             marginTop: '32px',
    //             marginBottom: '97px',
    //           },
    //         }}
    //       >
    //         Using the RTX-1134 processor
    //       </Typography>
    //     </Grid>
    //     <Grid
    //       item
    //       xs={12}
    //       md={6}
    //       sx={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         flexDirection: 'column',
    //         [theme.breakpoints.down('sm')]: {
    //           marginLeft: '47px',
    //         },
    //         [theme.breakpoints.between('sm', 'md')]: {
    //           marginLeft: '50px',
    //           marginBottom: '97px',
    //         },
    //         [theme.breakpoints.up('md')]: {
    //           marginLeft: '54px',
    //         },
    //       }}
    //     >
    //       <img src={hardIcon} alt=" " />
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           textAlign: 'center',
    //           color: '#fff',
    //           [theme.breakpoints.down('sm')]: {
    //             marginTop: '30px',
    //             width: '110px',
    //           },
    //           [theme.breakpoints.between('sm', 'md')]: {
    //             marginTop: '31px',
    //           },
    //           [theme.breakpoints.up('md')]: {
    //             marginTop: '32px',
    //             marginBottom: '97px',
    //           },
    //         }}
    //       >
    //         Use infrared Platinum 2.14
    //       </Typography>
    //     </Grid>
    //   </Grid>
    //   {/* <Grid
    //     sx={{
    //       position: 'absolute',
    //       top: 321,
    //       left: 720,
    //       zIndex: 100,
    //       width: '724px',
    //       height: '782px',
    //       [theme.breakpoints.between('sm', 'md')]: {
    //         display: 'none',
    //       },
    //     }}
    //   >
    //     <img src={mickiImage} alt="" />
    //   </Grid>
    //   <Grid
    //     sx={{
    //       position: 'absolute',
    //       top: 222,
    //       left: 755,
    //       width: '743px',
    //       height: '743px',
    //       [theme.breakpoints.between('sm', 'md')]: {
    //         display: 'none',
    //       },
    //     }}
    //   >
    //     <img src={spiral} alt="" style={{ marginLeft: 'auto' }} />
    //   </Grid>
    //   <Grid
    //     sx={{
    //       position: 'absolute',
    //       top: 850,
    //       left: 30,
    //       width: '376px',
    //       height: '407px',
    //       zIndex: 100,
    //       [theme.breakpoints.up('md')]: {
    //         display: 'none',
    //       },
    //       [theme.breakpoints.between('sm', 'md')]: {
    //         display: 'none',
    //       },
    //     }}
    //   >
    //     <img src={mickiImage} alt=" " />
    //   </Grid>
    //   <Grid
    //     sx={{
    //       position: 'absolute',
    //       top: 850,
    //       left: 30,
    //       width: '376px',
    //       height: '407px',
    //       [theme.breakpoints.up('md')]: {
    //         display: 'none',
    //       },
    //       [theme.breakpoints.between('sm', 'md')]: {
    //         display: 'none',
    //       },
    //     }}
    //   >
    //     <img src={spiral} alt=" " />
    //   </Grid> */}
    //   <Grid
    //     item
    //     xs={12}
    //     sx={{
    //       backgroundColor: '#0A0048',
    //       zIndex: '20',
    //       [theme.breakpoints.down('sm')]: {
    //         height: '227px',
    //       },
    //       [theme.breakpoints.between('sm', 'md')]: {
    //         height: '217px',
    //         marginLeft: '20px',
    //       },
    //       [theme.breakpoints.up('md')]: {
    //         height: '200px',
    //       },
    //     }}
    //   >
    //     <Typography
    //       variant="h3"
    //       sx={{
    //         color: '#F57438',
    //         [theme.breakpoints.down('sm')]: {
    //           width: '189px',
    //           height: '42px',
    //           marginTop: '84px',
    //           fontSize: '28px',
    //         },
    //         [theme.breakpoints.between('sm', 'md')]: {
    //           width: '199px',
    //           height: '50px',
    //           marginTop: '84px',
    //         },
    //         [theme.breakpoints.up('md')]: {
    //           fontSize: '32px',
    //           height: '45px',
    //           marginTop: '44px',
    //           marginLeft: '125px',
    //         },
    //       }}
    //     >
    //       1500+ clients
    //     </Typography>
    //     <Typography
    //       variant="body1"
    //       sx={{
    //         color: '#FFFFFF',
    //         [theme.breakpoints.down('sm')]: {
    //           width: '260px',
    //           height: '42px',
    //           fontSize: '14',
    //           marginTop: '8px',
    //         },
    //         [theme.breakpoints.between('sm', 'md')]: {},
    //         [theme.breakpoints.up('md')]: {
    //           marginTop: '8px',
    //           fontSize: '18px',
    //           marginLeft: '125px',
    //         },
    //       }}
    //     >
    //       Various clients around the world who have used our products
    //     </Typography>
    //   </Grid>
    // </Grid>
  );
}
