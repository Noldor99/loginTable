import { useFormContext } from 'react-hook-form';
import InputStandart from '../../components/UI/inputStandart/InputStandart';
import css from './WrapFormInput.module.sass'

export const InitStateInput = {
  name: '',
  email: '',
  birthday_date: '',
  phone_number: '+38',
  address: '',
}

const WrapFormInput = () => {

  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      {[
        { label: 'Name', field: 'name', type: 'text' },
        { label: 'Email', field: 'email', type: 'text' },
        { label: 'Phone', field: 'phone_number', type: 'text' },
        { label: 'Address', field: 'address', type: 'text' },
      ].map((input) => (
        <InputStandart
          key={input.field}
          label={input.label}
          name={input.field}
          register={register}
          errors={errors}
        />
      ))}
      <div className={css.birthday}>
        <p>Birthday</p>
        <input
          {...register('birthday_date')}
          type="Date" />
      </div>
    </>
  )
}

export default WrapFormInput