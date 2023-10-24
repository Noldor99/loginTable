import { FC, useEffect } from 'react';
import { Pagination } from '../../components/UI/pagination';
import { useTypedDispatch } from '../../hook/useTypedDispatch';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { useLazyGetTablesWithPaginationQuery } from '../../store/api/tableApi';

interface WrapPaginationProps {
  small?: boolean
}

const WrapPagination: FC<WrapPaginationProps> = ({ small }: WrapPaginationProps) => {

  const { totalPage, currentPage } = useTypedSelector(state => state.table);

  const { setCurrentPageAction } = useTypedDispatch()

  const [fetchReposAll] = useLazyGetTablesWithPaginationQuery()

  useEffect(() => {

    fetchReposAll({
      offset: currentPage * 4 - 4,
      limit: 4,
    });

  }, [currentPage, fetchReposAll]);

  useEffect(() => {
    setCurrentPageAction(currentPage)
  }, [fetchReposAll, setCurrentPageAction, currentPage]);

  return (
    < >
      <Pagination
        small={small}
        totalPage={totalPage}
        currentPage={currentPage}
        onChangePage={(value: number) => (setCurrentPageAction(value))}
      />
    </>
  )
}

export default WrapPagination