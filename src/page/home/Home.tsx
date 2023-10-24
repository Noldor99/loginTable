import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import CustomButton from '../../components/UI/customButton/CustomButton';
import IconButton from '../../components/UI/iconButton/IconButton';
import { useTypedSelector } from '../../hook/useTypedSelector';
import css from './Home.module.sass'
import WrapPagination from './WrapPagination'
import { useDeleteTableMutation } from '../../store/api/tableApi';

const Home = () => {

  const { tables } = useTypedSelector((state) => state.table);

  const [deleteTable] = useDeleteTableMutation();

  const navigate = useNavigate()

  return (
    <div className={css.container}>
      <div>
        <div>
          <CustomButton fullWIdth orange
            onClick={() => navigate("addTable/ADD")}
          >Add User
          </CustomButton>
        </div>
        <table className={css.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Birthday</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tables.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.birthday_date}</td>
                <td>{item.phone_number}</td>
                <td>{item.address}</td>
                <td >
                  <div className={css.actions}>
                    <IconButton orange
                      onClick={() => navigate(`addTable/${item.id}`)}
                    >
                      Edit
                    </IconButton>
                    <IconButton onClick={() => deleteTable(item.id)}>
                      <FaTrash />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <WrapPagination />
      </div>
    </div>
  )
}

export default Home