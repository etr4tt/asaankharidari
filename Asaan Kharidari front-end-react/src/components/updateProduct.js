import { Card, Button, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ButtonBase} from '@material-ui/core';
import React, { Component, useEffect } from 'react';
import './stylesheets/AddProductStyle.css';
import { Link, useHistory } from "react-router-dom";
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

function updateProduct(props) {

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
    const [imagefile, setImagefile] = React.useState('');
    const [model3dFile, setModel3dFile] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const getUpdatedData = () => {
      const _id = props.match.params.id;
      console.log(_id);
      fetch("/product/show?productId="+_id, {
        method: "GET"
      })
      .then(response => response.json())
      .then((data) => {
        console.log(data.data);
        setName(data.data.name);
        setQuantity(data.data.quantity);
        setPcost(data.data.purchaseCost);
        setSprice(data.data.salePrice);
        setCategory(data.data.category);
        setSubCategory(data.data.subCategory);
        setColor(data.data.colour);
        setDimention(data.data.dimention);
        setDescription(data.data.description);
        // setImagefile(data.data.image);
        // setModel3dFile(data.data.modelImage);
      });
      // .then(data => console.log(data.data));
    };

    const setUpdatedData = async() => {
      try {
        const res = await fetch('/product/update', {
           method: "PUT",  
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify({
            name, quantity, category, subCategory, pcost, sprice, color, dimention, description, imagefile, model3dFile
         })
        })

        const data = await res.json();
        if (data.status === 422 || !data) {
          window.alert("Data is Missing");
          console.log("Data is Missing");
      } else {
        window.alert("the product has been updated");
        console.log("the product has been updated");

        history.push("/admin/viewproduct");
      }
        // .then(res => {
        //   res.json();
        //   console.log("updatedData: ", res.json());
        //   alert("the product has been updated");
        // })
        // if(data){
        //   console.log("updatedData: ", data);
        //   alert("the product has been updated");
        //   history.push("/admin/viewproduct");
        // }
 
      } catch (err) {
         console.log(err);
      }
    };

    useEffect(() => {
      getUpdatedData();
    }, [])

    return (
        <>
        <div className="card text-center ">
        <div className="card-header">
        <h4 className="card-title">UPDATE PRODUCT</h4>
         </div>
         <div className="card-body">
        {/* <form method="POST" action="http://localhost:2000/product/add"> */}
        {/* <form method="PUT"> */}
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
                <input type="name" className="form-control" id="category" placeholder="Furniture,Decore .etc" autoComplete="off" required="required" name="category" value={category} onChange={(e)=> setCategory(e.target.value)} />
                </div>
                <div className="col-auto">
                <label for="subCategory">SUB CATEGORY NAME</label>
                <input type="quantity" className="form-control" id="subCategory" placeholder="Sofa,Bed,Table .etc" autoComplete="off" required="required" name="subCategory" value={subCategory} onChange={(e)=> setSubCategory(e.target.value)} />
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
                <input type="file" className="form-control" id="imagefile" name="imagefile" value={imagefile} onChange={(e)=> setImagefile(e.target.value)} required="required" />
                </div>
                {/* <div className="form-group col-md-4">
                <label className="form-label" for="customFile">SELECT PRODUCT 3D MODEL</label>
                <input type="file" className="form-control" id="model3dFile" name="model3dFile" value={model3dFile} onChange={(e)=> setModel3dFile(e.target.value)} required="required" />
                </div> */}
                </div>
                 <br></br>
                 <button type="button" className="btn btn-primary" onClick={setUpdatedData}>UPDATE PRODUCT</button>

                {/* <Dialog
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
                      <button type="submit" style={{outline:"none", background:"none", border:"none", color:"#4d58d1"}}>
                         Submit
                      </button>
                    </Grid>
                 </Grid>
                </DialogActions>
            </Dialog> */}

            {/* </form> */}
            </div>
            </div>

</>
    )
}

export default updateProduct