import { Document } from 'mongoose';
import { IngredientEntity } from 'src/ingredients/entities/ingredient.entity';

export class SnackEntity extends Document {
  createdAt: Date;
  type: string;
  ingredients: IngredientEntity[];
}
