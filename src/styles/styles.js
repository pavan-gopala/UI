
import {  Box, Button, Paper, Stack, TableCell, styled } from "@mui/material";
import {Toolbar} from "@mui/material";


export const Toolbarcomponent = styled(Toolbar)({

   width:'100%',
   display:'flex',
   flexDirection:'row',
   textAlign:'left',
   zIndex:1,
    top:'9vh',
    position:'sticky',
   backgroundColor:'#F9FAFA',
   height:'9vh',
   borderBottom:'1px secondary.main solid',

  });

export const DescriptionComponent = styled(Box)({
     textAlign:'center',
     backgroundColor:'#F9FAFA',
     color:'black',
     justifyContent: 'center',
     alignItems: 'center',
     width: '80vw',
     margin: '0 auto',
     padding:20,
     fontSize:'large',
     position:'static',
     fontFamily:'Peppins',
     
});

export const FormComponent = styled(Paper)({
        backgroundColor:'white',
        position:'relative',
        top:-30, 
        padding:20,
        textAlign:'left', 
        borderRadius:0,
});

export const ButtonComponent = styled(Button)({
        color:'white',
        backgroundColor:'#233d4d',
        marginTop:8,
      
        padding:10, marginLeft:4, fontSize:13, width:'130px',transition: 'background-color 0.3s', // Add transition for a smooth effect
        borderRadius:0,
        '&:hover': {
          backgroundColor: '#00684A', // Change background color on hover
        },
      
});
export const ClearButtonComponent = styled(Button)({
  
                  color:'#0C356A',
                  backgroundColor:'white',
                  width:'130px', 
                  marginTop:8,
                  borderRadius:0,
                  padding:10, marginLeft:6, fontSize:13, transition:'background-color 0.3s',
                  '&:hover':{
                    backgroundColor:'#00684A', color:'white'
                  },
});

export const DescriptionComponent2 = styled(Box)({
              color:'black',
              fontSize:'large',
              fontFamily:'Peppins',
}) ;

export const  AboutusComponent = styled(Stack)({
              textAlign:'left',
              fontFamily:'Peppins',
              fontSize:'large',
              backgroundColor:'#1CE783',
              padding:18,
             
});

export const FooterComponent = styled(Box)({
           fontFamily:'Peppins',
           padding:10,
           backgroundColor:'#233d4d',
           color:'white',

});

export const TableComponent = styled(Stack)({
        fontFamily:'Peppins',
        textAlign:'left',
        marginBottom:40,

        
}); 

export const TableCellComponentBody = styled(TableCell)({
   border: '1px solid #000',
})
export const TableCellComponentHead = styled(TableCell)({
  border: '1px solid #000',
  fontWeight:'bold',
  backgroundColor:'rgb(35, 61, 77,0.5)',
});

export const Failedresult = styled('span')({
  color:'red',
})
export const Successresult = styled('span')({
  color:'green',
})