import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      [theme.breakpoints.down('sm')]: {
        width: '100%',  
      },
      [theme.breakpoints.up('sm')]: {
        width: 450,  
      },
      maxHeight: 600,
      overflowY: 'auto',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({ recipe }) => {

  // Configuracion del modal de Material-UI
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes= useStyles();

  const handleOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

  // Extraer los valores del context
  const { setIdRecipe, selectedrecipe, setSelectedRecipe } = useContext(ModalContext);

  // Muestra y formatea los ingredientes
  const mostrarIngredientes = selectedrecipe => {
      let ingredients = [];
      for(let i=1; i < 16; i++) {
          if(selectedrecipe[`strIngredient${i}`]) {
              ingredients.push(
                  <li key={Math.random()}>{selectedrecipe[`strIngredient${i}`]} | {selectedrecipe[`strMeasure${i}`]}</li>
              )
          }
      }
      return ingredients;
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={`Imagen de ${recipe.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdRecipe(recipe.idDrink);
              handleOpen();
            }}
          >
            Click me for the Recipe!
          </button>

          <Modal
            open={open}
            onClose={() => {
                setIdRecipe(null);
                setSelectedRecipe({});
                handleClose();
            }}
          >
              <div style={modalStyle} className={classes.paper}>
                <h2>{selectedrecipe.strDrink}</h2>
                <h3 className="mt-4">Instructions:</h3>
                <p>{selectedrecipe.strInstructions}</p>
                <img className="img-fluid my-4" src={selectedrecipe.strDrinkThumb} alt={`Imagen del ${selectedrecipe.strDrink}`}/>
                <h3>Ingredients and Measures</h3>
                <ul>
                    {mostrarIngredientes(selectedrecipe)}
                </ul>
              </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
