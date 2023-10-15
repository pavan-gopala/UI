import { Box, Button, Paper, Stack, TableCell, styled } from "@mui/material";
import {Toolbar} from "@mui/material";

export const Toolbarcomponent = styled(Toolbar)({
    textAlign:'left',
    backgroundColor: 'white',
    
  });

export const DescriptionComponent = styled(Box)({
     textAlign:'center',
     color:'white',
     backgroundColor:'#1F4172',
     padding:20,
     paddingTop:60,
     fontSize:'large',
     position:'static',
     fontFamily:'monospace',
     
     
});

export const FormComponent = styled(Paper)({
        
        backgroundColor:'white',
        position:'relative',
        top:-30, 
        padding:20,
        textAlign:'left', 

});

export const ButtonComponent = styled(Button)({
        color:'white',
        backgroundColor:'#0C356A',
        marginTop:8,
        padding:10, marginLeft:4, fontSize:11, width:'130px',transition: 'background-color 0.3s', // Add transition for a smooth effect
        borderRadius:0,
        '&:hover': {
          backgroundColor: '#15459A', // Change background color on hover
        },
      
});
export const ClearButtonComponent = styled(Button)({
  
                  color:'#0C356A',
                  backgroundColor:'white',
                  width:'130px', 
                  marginTop:8,
                  borderRadius:0,
                 
                  padding:10, marginLeft:6, fontsize:11, transition:'background-color 0.3s',
                  '&:hover':{
                    backgroundColor:'#BDD892', color:'white'
                  },
});

export const DescriptionComponent2 = styled(Box)({
              color:'black',
              fontSize:'large'
}) ;

export const  AboutusComponent = styled(Stack)({
              textAlign:'left',
              fontFamily:'monospace',
              fontSize:'large',
              backgroundColor:'#BDD892',
              padding:18,
              marginBottom:19
});

export const FooterComponent = styled(Box)({
           fontFamily:'monospace',
           padding:10,
           backgroundColor:'#0C356A',
           color:'white',
});

export const TableComponent = styled(Stack)({
        fontFamily:'monospace',
        textAlign:'left',
        marginBottom:40,
        
}); 

export const TableCellComponentBody = styled(TableCell)({
   border: '1px solid #000',
})
export const TableCellComponentHead = styled(TableCell)({
  border: '1px solid #000',
  fontWeight:'bold',
  backgroundColor:'#E2F4FB',
});

export const Failedresult = styled('span')({
  color:'red',
})
export const Successresult = styled('span')({
  color:'green',
})