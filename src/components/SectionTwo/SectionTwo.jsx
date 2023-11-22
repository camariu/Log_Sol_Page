 import React from 'react'
 import {

  Box,
  Typography,
  useTheme
} from '@mui/material';

import elipse80 from "../../assets/images/Elipse80.png"
import elipse90 from "../../assets/images/Ellipse90.png"
 
 export default function SectionTwo() {
  const theme = useTheme();
   return (
    <Box    >
    <Box>
      <Box sx={{
    
    
        [theme.breakpoints.down('sm')]: {
        

        },
        [theme.breakpoints.between('sm', 'md')]: {
          
        },
        [theme.breakpoints.up('md')]: {
         display:"flex",
         alignItems:"center",
         marginLeft:"125px",
         paddingBottom:"121px"
        },
      }}>
         {/* Box 1  */}
        <Box sx={{
          [theme.breakpoints.down('sm')]: {
           display:"flex",
           justifyContent:"center",
           paddingTop:"39px"
           
           },
           [theme.breakpoints.between('sm', 'md')]: {
            display:"flex",
            justifyContent:"center",
            paddingTop:"40px"
             
           },
           [theme.breakpoints.up('md')]: {
            display:"flex",
            alignItems:"center",
            paddingTop:"146px",
            paddingRight:"154px"
           },
         
        }}>
          <Typography sx={{
             [theme.breakpoints.down('sm')]: {
             
             fontSize:"28px",
             height:"114px"
            
            },
            [theme.breakpoints.between('sm', 'md')]: {
              fontSize:"29px",
             height:"115px"
              
            },
            [theme.breakpoints.up('md')]: {
              width:"231px",
              height:"107px",
              fontSize:"32px"
          
            },

          }}>updated main features</Typography>
        </Box>
         {/* Box 2 */}
        <Box sx={{
        [theme.breakpoints.down('sm')]: {
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          paddingTop:"17px",
        

        },
        [theme.breakpoints.between('sm', 'md')]: {
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          paddingTop:"18px"
          
        },
        [theme.breakpoints.up('md')]: {
         display:"flex",
         alignItems:"center",
         paddingTop:"120px",
         paddingRight:"32px"
        },
      }}>
          <Box >
            <img src={elipse80} alt=''></img>
          </Box>
          <Box>
            <Box sx={{
              [theme.breakpoints.down('sm')]: {
               paddingLeft:"24px"
              },
              [theme.breakpoints.between('sm', 'md')]: {
                paddingLeft:"25px"
                
              },
              [theme.breakpoints.up('md')]: {
               paddingLeft:"24px"
              },

            }}>
              <Typography>Quick response</Typography>
              <Typography>Can respond to something sensitive</Typography>
            </Box>
          </Box>
        </Box>
        {/* Box 3  */}
        <Box sx={{
        [theme.breakpoints.down('sm')]: {
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          paddingTop:"40px",
          
      

        },
        [theme.breakpoints.between('sm', 'md')]: {
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          paddingTop:"42px"
          
        },
        [theme.breakpoints.up('md')]: {
         display:"flex",
         alignItems:"center",
         paddingTop:"120px"
        },
      }}>
          <Box>
          <img src={elipse90} alt=''></img>
          </Box>
          <Box>
            <Box sx={{
              [theme.breakpoints.down('sm')]: {
                paddingLeft:"24px"
              },
              [theme.breakpoints.between('sm', 'md')]: {
                paddingLeft:"25px"
              },
              [theme.breakpoints.up('md')]: {
                paddingLeft:"24px"
              },
            }}>
              <Typography>Quick response</Typography>
              <Typography>Can respond to something sensitive</Typography>
            </Box>
          </Box>
        </Box>
        {/* Final box acoperier */}
      </Box>
    </Box>
    </Box>
   )
 }
 
