import { Alert } from 'bootstrap';
import React from 'react';

function postDataToServer () {
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
        alert("yes data has benn added")
        }).catch(err => {
        console.log(err);
    });
}



function Additems(){

    return(

    <>
        <div class="card text-center ">
        <div class="card-header">
        <h4 class="card-title">ADD PRODUCT</h4>
         </div>
         <div class="card-body">
        <form>
            <div class="form-row">
                <div class="col-auto">
                <label for="name">Product Name</label>
                <input type="name" class="form-control" id="name" placeholder="Name"/>
                </div>
                <div class="col-auto">
                <label for="inputPass">STOCK QUANTITY</label>
                <input type="quantity" class="form-control" id="quantity" placeholder="82"/>
                </div>
                <div class="col-auto">
                <label for="pcost">PURCHASE COST SINGLE</label>
                <input type="text" class="form-control" id="pcost" placeholder="Cost Per Piece"/>
                </div>
                <div class="col-auto">
                <label for="sprice">SALE PRICE SINGLE</label>
                <input type="text" class="form-control" id="sprice" placeholder="Price Per Piece"/>
                </div>
            </div>
            <br></br>
            <div class="form-row">
                <div class="col-m3">
                <label for="category">  CATEGORY NAME</label>
                <input type="name" class="form-control" id="category" placeholder="Furniture,Decore .etc" autocomplete="on"/>
                </div>
                <div class="col-auto">
                <label for="subCategory">SUB CATEGORY NAME</label>
                <input type="quantity" class="form-control" id="subCategory" placeholder="Sofa,Bed,Table .etc" autocomplete="on" />
                </div>
                <div class="col-auto">
                <label for="color">PRODUCT COLOUR</label>
                <input type="text" class="form-control" id="color" placeholder="Colour"/>
                </div>
                <div class="col-auto">
                <label for="dimention">PRODUCT DIMENTIONS</label>
                <input type="text" class="form-control" id="dimention" placeholder="width:100inch heigth:300inch"/>
                </div>
            </div>
            <br></br>
            
            <div class="form-row">
            <div class="form-group col-md-4">
                <label for="description">PRODUCT DESCRIPTION</label>
                <input type="text" class="form-control" id="description" placeholder="Complete Details About Product"/>
            </div>
                <div class="form-group col-md-4">
                <label class="form-label" for="customFile">SELECT PRODUCT IMAGE</label>
                <input type="file" class="form-control" id="imagefile" />
                </div>
                <div class="form-group col-md-4">
                <label class="form-label" for="customFile">SELECT PRODUCT 3D MODEL</label>
                <input type="file" class="form-control" id="model3dFile" />
                </div>
                </div>
                 <br></br>
                <button type="submit" class="btn btn-primary" onClick={postDataToServer} href="http://localhost:3000/admin/product">ADD PRODUCT</button>
            </form>
            </div>
            </div> 
              {/* <div class="popup-box"> 
                <div class="box w3-container" id= "add-app">
                    <form class="w3-card-4">
                        <div class="w3-container w3-green">
                            <h2>Add Product Details</h2>
                        </div> 
                        <input id="pname" class="pl-1" md="4" type="text" placeholder="Product Name"/><br/><br/>
                        <input id="pquantity" class="w3-input" type="text" placeholder="Product Quantity"/><br/><br/>
                        <input id="ppurchaseCost" class="w3-input" type="text" placeholder="Product purchaseCost"/><br/><br/>
                        <input id="psalePrice" class="w3-input" type="text" placeholder="Product  salePrice"/><br/><br/>
                        <input id="pdimensions" class="w3-input" type="text" placeholder="Product dimensions"/><br/><br/>
                        <input id="pcolour" class="w3-input" type="text" placeholder="Product  colour"/><br/><br/>
                        <input id="pimage" class="w3-input" type="text" placeholder="Product  image"/><br/><br/>
                        <input id="pmodel3d" class="w3-input" type="text" placeholder="Product 3D model "/><br/><br/>
                        <input id="pdescription" class="w3-input" type="text" placeholder="Product description"/><br/><br/>
                        <button onClick={this.postDataToServer}>Create</button>
                    </form>
                </div>
          </div> */}

          </>

          );


}

export default  Additems;