import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone'

import { capitalizeFirstLetter } from '../../tools/utils'
import { CardUserProps } from './interface'

const CardUser = ({ user, onOpen }: CardUserProps) => {
  return (
    <Card
      style={{
        backgroundColor: '#252836',
        color: 'white',
        borderRadius: '10px',
        padding: '0.7rem'
      }}
    >
      <CardContent>
        {user.name && (
          <Typography variant="h4" component="div">
            {user.name}
          </Typography>
        )}
        {user.height && (
          <Typography style={{ color: '#797A83' }} variant="body2">
            Height: {user.height}
          </Typography>
        )}
        {user.eyeColor && (
          <Typography style={{ color: '#797A83' }} variant="body2">
            Eye color: {capitalizeFirstLetter(user.eyeColor)}
          </Typography>
        )}
        {user.skinColor && (
          <Typography style={{ color: '#797A83' }} variant="body2">
            Skin Color: {capitalizeFirstLetter(user.skinColor)}
          </Typography>
        )}
        {user.birthYear && (
          <Typography style={{ color: '#797A83' }} variant="body2">
            Birth Year: {user.birthYear}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          style={{ border: '1px solid #FFC500', color: '#FFC500' }}
          onClick={() => onOpen(user.id)}
          variant="outlined"
          size="small"
          startIcon={<RemoveRedEyeTwoToneIcon />}
        >
          See more
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardUser
