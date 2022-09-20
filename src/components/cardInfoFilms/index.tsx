import { Chip, Typography } from '@mui/material'

import styles from './cardInfoFilms.module.sass'
import { ItemUserInterface, PlanetsInterface } from './interface'

const CardInfoFilms = ({ value }: ItemUserInterface) => {
  return (
    <div className={styles.wrapper}>
      <h2 id="parent-modal-title">{value.title}</h2>
      <Typography gutterBottom variant="subtitle1">
        <span className="font-weight-semi-bold"> Director: </span>{' '}
        <span className="font-weight-light"> {value.director || ''} </span>
      </Typography>
      <Typography gutterBottom variant="subtitle1">
        <span className="font-weight-semi-bold"> Productores: </span>
        <span className="font-weight-light">
          {value.producers && value.producers.map((i: string) => ` ${i} | `)}
        </span>
      </Typography>
      <div
        dangerouslySetInnerHTML={{ __html: value.openingCrawl || '' }}
        className={styles.text}
      />
      <div className={styles.tagsContainer}>
        {value.planetConnection &&
          value.planetConnection.planets.map((tag: PlanetsInterface) => (
            <Chip
              key={tag.id}
              label={tag.name}
              size="small"
              variant="outlined"
              color="primary"
            />
          ))}
      </div>
    </div>
  )
}

export default CardInfoFilms
