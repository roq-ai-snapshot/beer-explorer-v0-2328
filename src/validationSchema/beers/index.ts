import * as yup from 'yup';

export const beerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  hero_image: yup.string().required(),
  beer_type: yup.string().required(),
  brewery: yup.string().required(),
  alcohol_content: yup.number().integer().required(),
  brewery_location: yup.string().required(),
  brewery_history: yup.string().required(),
  description: yup.string().required(),
  interesting_facts: yup.string().required(),
  purchase_locations: yup.string().required(),
  account_id: yup.string().nullable().required(),
});
