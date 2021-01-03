import React from "react";
import RecipesList from "./RecipesList";
import "./SavedRecipesModal.css";

const SavedRecipesModal = ({
  closeModalFn,
  recipes,
  isModalOpen,
  onRemoveRecipe
}) => {
  return (
    <div
      className={isModalOpen ? "modal-container active" : "modal-container out"}
      onClick={closeModalFn}
    >
      <div className="modal-background">
        <div className="modal">
          {recipes.length === 0 ? (
            <h2 className="modal-h2">No recipes saved, please add some</h2>
          ) : (
            <h2 className="modal-h2">Recipes saved:</h2>
          )}
          <RecipesList
            recipes={recipes}
            isModalOpen={isModalOpen}
            onRemoveRecipe={onRemoveRecipe}
          />
        </div>
      </div>
    </div>
  );
};

export default SavedRecipesModal;
