import { valueof } from "../../interfaces/index";
import { COURSES } from "../../utils/enums";

export default {
  EXIST_INSTRUMENT: 'Инструмент с таким названием уже существует!',
  NOT_FOUND: 'Инструмент не найден!',
  ACTUAL: 'Цена активов актуализирована!',
  POST_VARIABLES: (course: valueof<typeof COURSES>) => [`instrument_type_${course}`, `section_${course}`, `price`, `title`, `number_papers`, `currency_${course}`, `currency_${course}_id`, `base_currency_${course}`, `base_currency_${course}_id`, `class_${course}`, `class_${course}_id`, `country_${course}`, `country_${course}_id`, 'matdate', 'name', 'formula', 'lot'],
  EDIT_VARIABLES: (course: valueof<typeof COURSES>) => [`instrument_type_${course}`, `section_${course}`, `price`, `title`, `number_papers`, `currency_${course}`, `currency_${course}_id`, `base_currency_${course}`, `base_currency_${course}_id`, `class_${course}`, `class_${course}_id`, `country_${course}`, `country_${course}_id`, 'matdate', 'name', 'lot'],
}