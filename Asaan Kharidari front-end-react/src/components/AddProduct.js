import { Card, Button, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ButtonBase} from '@material-ui/core';
import React, { Component } from 'react';
import { Link, useHistory } from "react-router-dom";
import './stylesheets/AddProductStyle.css';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import axios from 'axios';

// function AlertDismissible() {
//     const [show, setShow] = useState(true);
  
//     return (
//       <>
//         <Alert show={show} variant="success">
//           <Alert.Heading>How's it going?!</Alert.Heading>
//           <p>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//             lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//             fermentum.
//           </p>
//           <hr />
//           <div classNameName="d-flex justify-content-end">
//             <Button onClick={() => setShow(false)} variant="outline-success">
//               Close me y'all!
//             </Button>
//           </div>
//         </Alert>
  
//         {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//       </>
//     );
//   }


function addProduct() {

    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    const [name, setName] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [pcost, setPcost] = React.useState('');
    const [sprice, setSprice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [subCategory, setSubCategory] = React.useState('');
    const [color, setColor] = React.useState('');
    const [dimention, setDimention] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('');
    const [modelImage, setModelImage] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    // On file select (from the pop up)
    const onChangeImage = event => {
        console.log("image: ", event.target.files[0]);
       setImage({ image: event.target.files[0] });
    };
    const onChangeModelImage = event => {
        setModelImage({ modelImage: event.target.files[0] });
    };

    function postDataToServer ()  {
        console.log("image", image.image)
        let data = new FormData();
        data.append('file', image.image);
        data.append('Name', document.getElementById('name').value);
        data.append('Quantity', document.getElementById('quantity').value);
        data.append('PurchaseCost', document.getElementById('pcost').value);
        data.append('SalePrice', document.getElementById('sprice').value);
        data.append('Dimention', document.getElementById('dimention').value);
        data.append('Colour', document.getElementById('color').value);
        data.append('Category', document.getElementById('category').value);
        data.append('SubCategory', document.getElementById('subCategory').value);
        data.append('Description', document.getElementById('description').value);
        // data.append('file', setModelImage);
            history.push("/admin/addproductnew");
    
        console.log("Calling apis", data)
        // fetch("http://localhost:2000/product/add", data, {
        // method: "POST",
        // "headers": {
        //     "Content-Type": "application/json"
        // },
        // "body": JSON.stringify({
        //     name: document.getElementById('name').value,
        //     quantity: document.getElementById('quantity').value,
        //     category: document.getElementById('category').value,
        //     subCategory: document.getElementById('subCategory').value,
        //     // desc: document.getElementById('quantity').value,
        //     purchaseCost: document.getElementById('pcost').value,
        //     salePrice: document.getElementById('sprice').value,
        //     colour: document.getElementById('color').value,
        //     // image: document.getElementById('image').value,
        //     dimention: document.getElementById('dimention').value,
        //     // modelImage: document.getElementById('modelImage').value,
        //     description: document.getElementById('description').value,
        
        // })
        // }).then(response => {

        //     // console.log(response)   
        //     alert("the product has been added");
        //     history.push("/admin/viewproduct");
           
        // }).catch(err => {
        //     console.log(err);
        // });
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
           }
        axios.post('http://localhost:2000/new-product/add', data)
        .then(res =>{
            console.log(res);
            handleClose();
        })
        .catch(err =>{
            console.log(err)
        });
    }
    

    return (
        <>
        <div className="card text-center ">
        <div className="card-header">
        <h4 className="card-title">ADD PRODUCT</h4>
         </div>
         <div className="card-body">
        {/* <form method="POST" action="http://localhost:2000/product/add"> */}
        <form method="POST">
            <div className="form-row">
                <div className="col-auto">
                <label for="name">Product Name</label>
                <input type="name" className="form-control" id="name" placeholder="Name" autoComplete="off" required="required" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
                </div>
                <div className="col-auto">
                <label for="inputPass">STOCK QUANTITY</label>
                <input type="quantity" className="form-control" id="quantity" placeholder="82" autoComplete="off" required="required" name="quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
                </div>
                <div className="col-auto">
                <label for="pcost">PURCHASE COST SINGLE</label>
                <input type="text" className="form-control" id="pcost" placeholder="Cost Per Piece" autoComplete="off" required="required" name="pcost" value={pcost} onChange={(e)=> setPcost(e.target.value)} />
                </div>
                <div className="col-auto">
                <label for="sprice">SALE PRICE SINGLE</label>
                <input type="text" className="form-control" id="sprice" placeholder="Price Per Piece" autoComplete="off" required="required" name="sprice" value={sprice} onChange={(e)=> setSprice(e.target.value)} />
                </div>
            </div>
            <br></br>
            <div className="form-row">
                <div className="col-m3">
                <label for="category">  CATEGORY NAME</label>
                <input type="text" className="form-control" id="category" placeholder="Furniture,Decore .etc" autoComplete="off" required="required" name="category" value={category} onChange={(e)=> setCategory(e.target.value)} />
                </div>
                <div className="col-auto">
                <label for="subCategory">SUB CATEGORY NAME</label>
                <input type="text" className="form-control" id="subCategory" placeholder="Sofa,Bed,Table .etc" autoComplete="off" required="required" name="subCategory" value={subCategory} onChange={(e)=> setSubCategory(e.target.value)} />
                </div>
                <div className="col-auto">
                <label for="color">PRODUCT COLOUR</label>
                <input type="text" className="form-control" id="color" placeholder="Colour" autoComplete="off" required="required" name="color" value={color} onChange={(e)=> setColor(e.target.value)} />
                </div>
                <div className="col-auto">
                <label for="dimention">PRODUCT DIMENTIONS</label>
                <input type="text" className="form-control" id="dimention" placeholder="width:100inch heigth:300inch" autoComplete="off" required="required" name="dimention" value={dimention} onChange={(e)=> setDimention(e.target.value)} />
                </div>
            </div>
            <br></br>
            
            <div className="form-row">
            <div className="form-group col-md-4">
                <label for="description">PRODUCT DESCRIPTION</label>
                <input type="text" className="form-control" id="description" placeholder="Complete Details About Product" autoComplete="off" required="required" name="description" value={description} onChange={(e)=> setDescription(e.target.value)} />
            </div>
                <div className="form-group col-md-4">
                <label className="form-label" for="customFile">SELECT PRODUCT IMAGE</label>
                <input type="file" className="form-control" id="image" name="image" value={image.name} onChange={onChangeImage} required="required" />
                </div>
                {/* <div className="form-group col-md-4">
                <label className="form-label" for="customFile">SELECT PRODUCT 3D MODEL</label>
                <input type="file" className="form-control" id="modelImage" name="modelImage" value={modelImage.name} onChange={onChangeModelImage} required="required" />
                </div> */}
                </div>
                 <br></br>
                {/* <button type="submit" className="btn btn-primary" onClick={AlertDismissible} href="http://localhost:3000/admin/product">ADD PRODUCT</button> */}
                {name === '' || category === '' || quantity === '' || pcost === '' || sprice === '' || subCategory === '' || color === '' || dimention === '' || description === '' || image === '' ? 
                    <button type="button" className="btn btn-primary" disabled>ADD PRODUCT</button>
                    :                    
                    <button type="button" className="btn btn-primary" onClick={handleClickOpen}>ADD PRODUCT</button>
                }

                <Dialog
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                <DialogTitle className="dialogHeading" id="alert-dialog-title">CONFIRM</DialogTitle>
                <DialogContent className="dialogDescription">
                <DialogContentText id="alert-dialog-description">
                  <Grid container>
                    <Grid item xs={4}>
                       <ReportProblemIcon fontSize="large" className="dialogIcon" />
                    </Grid>
                    <Grid item xs={8}>
                       <h5>Are you Sure you want to submit these details?</h5>
                    </Grid>
                  </Grid>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                 <Grid container justify="center" style={{textAlign:"center"}}>
                    <Grid item xs={6}>
                      <Button onClick={handleClose} style={{color:"#4d58d1"}}>
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      {/* <Link to={'/admin/viewproduct'}> */}
                        <button type="submit" onClick={postDataToServer} style={{outline:"none", background:"none", border:"none", color:"#4d58d1"}}>
                            Submit
                        </button>
                      {/* </Link> */}
                    </Grid>
                 </Grid>
                </DialogActions>
            </Dialog>

            </form>
            </div>
            </div>

</>
    )

}
/* className AddProductComponent extends Component{
        
   
  
  }    


    
    postDataToServer = () => {
        console.log("Calling apis")
        fetch("http://localhost:2000/product/add", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            name: document.getElementById('name').value,
            desc: document.getElementById('quantity').value,
            purchaseCost: document.getElementById('pcost').value,
            salePrice: document.getElementById('sprice').value,
            colour: document.getElementById('color').value,
            image: document.getElementById('imagefile').value,
            dimention: document.getElementById('dimention').value,
            model3d: document.getElementById('model3dFile').value,
            description: document.getElementById('description').value,
        })
        }).then(response => {
            console.log(response)   
            alert("<Alert variant='success'>
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
          </Alert>")
        }).catch(err => {
            console.log(err);
        });
    }

    render(){
        return (
        <>
        <div className="card text-center ">
        <div className="card-header">
        <h4 className="card-title">ADD PRODUCT</h4>
         </div>
         <div className="card-body">
        <form>
            <div className="form-row">
                <div className="col-auto">
                <label for="name">Product Name</label>
                <input type="name" className="form-control" id="name" placeholder="Name"/>
                </div>
                <div className="col-auto">
                <label for="inputPass">STOCK QUANTITY</label>
                <input type="quantity" className="form-control" id="quantity" placeholder="82"/>
                </div>
                <div className="col-auto">
                <label for="pcost">PURCHASE COST SINGLE</label>
                <input type="text" className="form-control" id="pcost" placeholder="Cost Per Piece"/>
                </div>
                <div className="col-auto">
                <label for="sprice">SALE PRICE SINGLE</label>
                <input type="text" className="form-control" id="sprice" placeholder="Price Per Piece"/>
                </div>
            </div>
            <br></br>
            <div className="form-row">
                <div className="col-m3">
                <label for="category">  CATEGORY NAME</label>
                <input type="name" className="form-control" id="category" placeholder="Furniture,Decore .etc" autocomplete="on"/>
                </div>
                <div className="col-auto">
                <label for="subCategory">SUB CATEGORY NAME</label>
                <input type="quantity" className="form-control" id="subCategory" placeholder="Sofa,Bed,Table .etc" autocomplete="on" />
                </div>
                <div className="col-auto">
                <label for="color">PRODUCT COLOUR</label>
                <input type="text" className="form-control" id="color" placeholder="Colour"/>
                </div>
                <div className="col-auto">
                <label for="dimention">PRODUCT DIMENTIONS</label>
                <input type="text" className="form-control" id="dimention" placeholder="width:100inch heigth:300inch"/>
                </div>
            </div>
            <br></br>
            
            <div className="form-row">
            <div className="form-group col-md-4">
                <label for="description">PRODUCT DESCRIPTION</label>
                <input type="text" className="form-control" id="description" placeholder="Complete Details About Product"/>
            </div>
                <div className="form-group col-md-4">
                <label className="form-label" for="customFile">SELECT PRODUCT IMAGE</label>
                <input type="file" className="form-control" id="imagefile" />
                </div>
                <div className="form-group col-md-4">
                <label className="form-label" for="customFile">SELECT PRODUCT 3D MODEL</label>
                <input type="file" className="form-control" id="model3dFile" />
                </div>
                </div>
                 <br></br>
                <button type="submit" className="btn btn-primary" onClick={this.postDataToServer} href="http://localhost:3000/admin/product">ADD PRODUCT</button>
            </form>
            </div>
            </div> */
              {/* <div className="popup-box"> 
                <div className="box w3-container" id= "add-app">
                    <form className="w3-card-4">
                        <div className="w3-container w3-green">
                            <h2>Add Product Details</h2>
                        </div> 
                        <input id="pname" className="pl-1" md="4" type="text" placeholder="Product Name"/><br/><br/>
                        <input id="pquantity" className="w3-input" type="text" placeholder="Product Quantity"/><br/><br/>
                        <input id="ppurchaseCost" className="w3-input" type="text" placeholder="Product purchaseCost"/><br/><br/>
                        <input id="psalePrice" className="w3-input" type="text" placeholder="Product  salePrice"/><br/><br/>
                        <input id="pdimensions" className="w3-input" type="text" placeholder="Product dimensions"/><br/><br/>
                        <input id="pcolour" className="w3-input" type="text" placeholder="Product  colour"/><br/><br/>
                        <input id="pimage" className="w3-input" type="text" placeholder="Product  image"/><br/><br/>
                        <input id="pmodel3d" className="w3-input" type="text" placeholder="Product 3D model "/><br/><br/>
                        <input id="pdescription" className="w3-input" type="text" placeholder="Product description"/><br/><br/>
                        <button onClick={this.postDataToServer}>Create</button>
                    </form>
                </div>
          </div> */}
/* 
          </>

          );
         
            
    }
} */


export default addProduct