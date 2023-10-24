import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { validationSchemaLogin } from '../../schema/schema'
import { yupResolver } from '@hookform/resolvers/yup';
import { useTypedDispatch } from '../../hook/useTypedDispatch';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/UI/customInput/CustomInput';
import CustomButton from '../../components/UI/customButton/CustomButton';
import css from './Login.module.sass'
import { ILogin } from '../../model/userModel';
import { useLoginMutation } from '../../store/api/userApi';


const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useTypedDispatch()
  const navigate = useNavigate();

  const methods = useForm<ILogin>({
    resolver: yupResolver(validationSchemaLogin),
    mode: "onChange",
  });

  const { register, handleSubmit, formState: { errors, isValid } } = methods

  const [login] = useLoginMutation();

  const { userInfo } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo !== null) {
      navigate('/loginTable');
    }
  }, [navigate, userInfo]);

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    setIsLoading(true);
    try {
      const res = await login(data).unwrap();
      setUser({ ...res });
      navigate('/loginTable')
      toast.success('Login')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.data.error);
    }
    setIsLoading(false);
  };

  return (
    <div className={css.container}>
      <div className={css.body}>
        <h4 className={css.title}>
          Sign In
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.input__block}>
            <div>
              <CustomInput
                type='text'
                name='username'
                label="Username"
                register={register}
                errors={errors}
              />
            </div>
            <div>
              <CustomInput
                name='password'
                label="Password"
                type="password"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className={css.body__button}>
            <CustomButton
              orange
              type="submit"
              disabled={isLoading || !isValid && true}
              style={{ marginTop: '1rem' }}
            >
              {isLoading ? 'Loading...' : 'Sign In'}
            </CustomButton>
          </div>
        </form>
        <div>
          <CustomButton onClick={() => navigate('/auth/register')}>
            New Customer? Register
          </CustomButton>
        </div>
      </div>
    </div >
  );
};

export default Login;
