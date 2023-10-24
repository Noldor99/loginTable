import React from 'react';
import CustomButton from '../../components/UI/customButton/CustomButton';
import validationSchema from '../../schema'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './AddTable.module.sass'
import WrapFormInput, { InitStateInput } from './WrapFormInput';
import { ICreateTable, ITable } from '../../model/tableModel';
import { useCreateTableMutation, useUpdateTableMutation } from '../../store/api/tableApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { detectForm } from '../../utils/DetectForm';

export interface IFormData extends
  ICreateTable { }


const initState = {
  ...InitStateInput,
}

const AddTable: React.FC = () => {

  const navigate = useNavigate();

  const { id } = useParams() as { id: string };

  const { tables } = useTypedSelector(state => state.table);


  const tablesEdit = tables.find((item: ITable) => item.id === parseInt(id, 10));

  const [createTable] = useCreateTableMutation()

  const [updateTable] = useUpdateTableMutation()

  const oldDateStr = tablesEdit?.birthday_date;

  const parts = oldDateStr?.split('-');
  let newDateStr = ''
  if (parts) {
    const year = parts[2];
    const month = parts[1].padStart(2, '0'); // Перевіряємо та додаємо нуль, якщо потрібно
    const day = parts[0].padStart(2, '0'); // Те саме тут
    newDateStr = `20${year}-${month}-${day}`;

  }
  const tablesEditUpdated = tablesEdit && { ...tablesEdit, birthday_date: newDateStr };


  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: detectForm(id, initState, tablesEditUpdated),
  });

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    if (id === "ADD") {
      await createTable(data)
      navigate(-1)
    } else {
      await updateTable({ id: id, data: data })
      navigate(-1)
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={css.container}>
        <h1>Проста форма</h1>
        <form
          className={css.form__body}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className={css.wrapInput}>
            <WrapFormInput />
          </div>
          <CustomButton
            type="submit"
          >
            Відправити
          </CustomButton>
          <CustomButton
            onClick={() => navigate(-1)}
          >back</CustomButton>
        </form>
      </div>
    </FormProvider>
  );
};

export default AddTable;
