import React from 'react'
import { Grid } from '@material-ui/core'
import Product from '../product/Product'
// import img1 from './img/1.png'
// import img2 from './img/2.png'
import useStyles from './styles'
const Products = ({ products, handleAddCart }) => {
  const classes = useStyles()
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Shoes',
  //     description: 'Running shoe',
  //     price: '#5000',
  //     img: { img1 },
  //   },
  //   {
  //     id: 2,
  //     name: 'mackbook',
  //     description: 'Apple macbook',
  //     price: '#3000',
  //     img: { img2 },
  //   },
  // ]
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => {
          {
            /* const { id, name, description, price, img } = products */
          }
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} handleAddCart={handleAddCart} />
            </Grid>
          )
        })}
      </Grid>
    </main>
  )
}

export default Products
