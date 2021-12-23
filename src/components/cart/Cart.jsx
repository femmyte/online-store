import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import CartItem from './cartItem/CartItem'
import useStyle from './styles'
import { Link } from 'react-router-dom'
const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyle()
  /*let isEmpty
  const lineItem = cart.line_items
  if (lineItem) {
    isEmpty = false
  } else {
    isEmpty = true
  }
  console.log(lineItem)
  */
  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              {/* <div>{item.name}</div> */}
              <CartItem
                item={item}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </Grid>
          ))}
        </Grid>
        <div>
          <Typography variant='h4'>
            Subtotal:
            {cart.subtotal.formatted_with_symbol}
          </Typography>
          <Button
            className={classes.emptyButton}
            size='large'
            variant='contained'
            type='button'
            color='secondary'
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to='/checkout'
            className={classes.checkoutButton}
            size='large'
            variant='contained'
            type='button'
            color='primary'
          >
            Checkout
          </Button>
        </div>
      </>
    )
  }
  const EmptyCart = () => {
    return (
      <Typography variant='subtitle1'>
        You have no Item in your Cart,
        <Link to='/' className={classes.link}>
          start adding some!
        </Link>
      </Typography>
    )
  }
  if (!cart.line_items) return 'Loading...'
  return (
    <Container>
      <div className='classes toolbar' />
      <Typography className='classes.title' variant='h3'>
        Your Shopping cart
      </Typography>
      {/* {EmptyCart()}
      {FilledCart()} */}
      {/* {<FilledCart cart={cart} />} */}
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart
