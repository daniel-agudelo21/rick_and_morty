import Card from '../Card/Card';
import Container from '../StyleContainer/StyleContainer';

export default function Cards({ characters, onClose }) {
   return (
      <Container >
         {
            characters.map(({ id, name, status, species, gender, origin, image }) => {
               return (
                  <Card 
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     onClose={onClose}
                  />
               )
            })
         }
      </Container>
   );
}
