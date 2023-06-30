import {BtnGoHome, IconArrow, BtnLoadMore} from './TweetsPage.styled';

import { BsArrowLeft } from 'react-icons/bs';
import { getUsersThunk } from '../../redux/Users/users.thunk';
import { useEffect, useState } from 'react';
import { UserList } from '../../components/UserList/UserList';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/Loader/Loader';
import { STATUS } from './../../constants/status.constants';
import { useLocation } from 'react-router-dom';

const TweetsPage = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.idle);
  const users = useSelector(state => state.users.users);
  const renderedPages = useSelector(state => state.users.renderedPages);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (renderedPages < page) {
      dispatch(getUsersThunk(page));
    }
  }, [dispatch, page, renderedPages]);

  const handleLoadMore = () => {
    setPage(prev => (prev + 1));
  };

  return (
    <div>
      <BtnGoHome to={location.state?.from ?? '/'}>
        <IconArrow><BsArrowLeft/></IconArrow> Go Home
      </BtnGoHome>
      <UserList />
      {status === STATUS.loading ? (
        <Loader/>
      ) : users && users.length > 0 ? (
        <BtnLoadMore onClick={handleLoadMore}>LOAD MORE</BtnLoadMore>
      ) : '' }
    </div>
  );
};

export default TweetsPage;