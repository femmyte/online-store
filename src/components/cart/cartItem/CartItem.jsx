import React from 'react'
import useStyle from './style'
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core'
const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  const classes = useStyle()
  // console.log(item)
  return (
    <div>
      <Card>
        <CardMedia image={item.image.url} className={classes.media} />
        <CardContent className={classes.cardContent}>
          <Typography variant='h4'>{item.name}</Typography>
          <Typography variant='h5'>
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions className={classes.cartActions}>
          <div className={classes.buttons}>
            <Button
              type='button'
              size='small'
              onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              type='button'
              size='small'
              onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button
            type='button'
            variant='contained'
            color='secondary'
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CartItem
