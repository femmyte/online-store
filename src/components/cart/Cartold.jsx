// import React from 'react'
// import { Container, Typography, Button, Grid } from '@material-ui/core'
// import useStyle from './styles'
// import CartItem from './cartItem/CartItem'

// const Cart = ({ cart }) => {
//   const classes = useStyle()
//   // let isEmpty = !cart.line_items.length
//   // let isEmpty
//   // if (cart.total_unique_items > 0) {
//   //   isEmpty = false
//   // } else if (cart.total_items < 1) {
//   //   isEmpty = true
//   // }

//   const EmptyCart = () => {
//     if (cart.total_unique_items > 0) {
//       return
//     }
//     return (
//       <Typography variant='subtitle1'>
//         You have no Item in your Cart, start adding some!
//       </Typography>
//     )
//   }
//   const FilledCart = () => {
//     // console.log(cart.total_unique_items)
//     // console.log(cart.line_items.length)
//     // console.log(cart.line_items.length)
//     if (cart.total_unique_items === 0) {
//       return
//     }
//     return (
//       <>
//         <Grid container spacing={3}>
//           {cart.line_items.map((item) => (
//             <Grid item xs={12} sm={4} key={item.id}>
//               {/* <div>{item.name}</div> */}
//               <CartItem item={item} />
//             </Grid>
//           ))}
//         </Grid>
//         <div>
//           {/* <Typography variant='h4'>
//             Subtotal:
//             {cart.subtotal.formatted_with_symbol}
//           </Typography> */}
//           <Button
//             className={classes.emptyButton}
//             size='large'
//             variant='contained'
//             type='button'
//             color='secondary'
//           >
//             Empty Cart
//           </Button>
//           <Button
//             className={classes.checkoutButton}
//             size='large'
//             variant='contained'
//             type='button'
//             color='primary'
//           >
//             Checkout
//           </Button>
//         </div>
//       </>
//     )
//   }
//   return (
//     <Container>
//       <div className='classes toolbar' />
//       <Typography className='classes.title' variant='h3'>
//         Your Shopping cart
//       </Typography>
//       {EmptyCart()}
//       {FilledCart()}
//       {/* {<FilledCart cart={cart} />}
//        {isEmpty ? <EmptyCart /> : <FilledCart />} */}
//     </Container>
//   )
// }

// export default Cart
