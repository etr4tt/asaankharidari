import React, {useState, useEffect} from 'react';
import "./item.css";
import {Grid, Card, CardActions, CardContent, CardHeader, CardMedia, Button} from "@material-ui/core";
import pic1 from "./edit.jpg";
import {Link, useHistory} from "react-router-dom";

const ItemsViewPage = (props) => {

    const history = useHistory();

    const [productData, setProductData] = useState({}); 

    const viewProductData = async () => {
      try {
        const res = await fetch('/product/view', {
           method: "GET",
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json"
           },
           credentials: "include"
        });
 
        const productDetails = await res.json();
        console.log(productDetails);
        setProductData(productDetails);
 
        if(!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
 
      } catch (err) {
         console.log(err);
      }
    }; 
    
     const deleteProductData = async () => {
      const _id = props.match.params.id;
      console.log(_id);

       try {
         const res = await fetch('/product/delete', {
           method: "DELETE",
           headers: {
             "Content-Type": "application/json"
           },
        });
        viewProductData();
        await res(_id);
        history.push("/admin/viewproduct");

      } catch (err) {
         console.log(err);
      }
     }

    useEffect(() => {
      viewProductData();
    }, [])

    // console.log(productData.category);
   const productDetails = [
      //  {
      //      productImg: pic1,
      //      productName: "Chair",
      //      productDescription: "Good Product",
      //      productPurchaseCost: "$80",
      //      productSalePrice: "$200",
      //      productCategory: "Furniture",
      //      productSubCategory: "Sofa",
      //      productQuantity: "90",
      //      productColor: "Orange",
      //      productDimentions: "100inch",
      //  },
    //    {
    //     productImg: pic1,
    //     productName: "Tabel",
    //     productDescription: "Nice Product",
    //     productPurchaseCost: "$50",
    //     productSalePrice: "$100",
    //     productCategory: "Furniture",
    //     productSubCategory: "Bed",
    //     productQuantity: "10",
    //     productColor: "Brown",
    //     productDimentions: "300inch",
    //  },
   ]

    return (
     <>
        <Grid container>
          <Grid item xs={12}>
          {productData.length > 0 ? 
            productData.map((IsItem, key) => (
                <Card className="mainCard" key={key}>
                <Grid container spacing={2}>
                   <Grid item xs={3}>
                     <CardMedia>
                       <div className="itemCardImageDiv">
                         <img src={ "http://localhost:2000/" + IsItem.image} alt="pic1" className="img-fluid" />
                       </div>
                     </CardMedia>
                   </Grid>
                   <Grid item xs={7}>
                       <Grid container spacing={2}>
                          <Grid item xs={6}>
                              <div className="cardDetails">
                                 <div className="productTitle">
                                     <h3>Name: {IsItem.name}</h3>
                                 </div>
                                 <div className="productInfo">
                                    <p>{IsItem.description}</p>
                                    <p>Category: {IsItem.category}</p>
                                    <p>SubCategory: {IsItem.subCategory}</p>
                                 </div>    
                              </div>
                          </Grid>
                          <Grid item xs={6}>
                              <div className="cardDetails mt-5">
                                 <div className="productInfo">
                                    <p>Cost: {IsItem.purchaseCost}</p>
                                    <p>Sale Price: {IsItem.salePrice}</p>
                                    <p>Color: {IsItem.colour}</p>
                                    <p>Dimentions: {IsItem.dimention}</p>
                                 </div>    
                              </div>
                          </Grid>
                       </Grid>
                   </Grid>
                   <Grid item xs={2}>
                        <CardActions>
                            <Grid container spacing={3}>
                                <Grid item xs={12} className="mt-5">
                                <Link to={'/admin/updateproduct/'+IsItem._id}>
                                   <button className="update-btn">Update</button>
                                </Link>
                                </Grid>
                                <Grid item xs={12}>
                                
                                    <button className="delete-btn" onClick={deleteProductData}>Delete</button>

                                </Grid>
                            </Grid>
                        </CardActions>
                    </Grid>
                </Grid>
             </Card>
            ))
            : 
            <strong>Data not Found</strong>
          }
           
          </Grid>
        </Grid>
     </>
    )
};

export default ItemsViewPage;
