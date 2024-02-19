import { IngredientEntity } from 'src/ingredients/entities/ingredient.entity';

export class CreateSnackDto {
  createdAt: Date;
  type: string;
  ingredients: IngredientEntity[];
}
