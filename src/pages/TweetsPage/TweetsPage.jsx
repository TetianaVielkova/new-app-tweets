import {BtnGoHome, IconArrow, BtnLoadMore} from './TweetsPage.styled';

import { BsArrowLeft } from 'react-icons/bs';
import { getUsersThunk } from '../../redux/Users/users.thunk';
import { useEffect, useState } from 'react';
import { UserList } from '../../components/UserList/UserList';
import { useDispatch } from 'react-redux';
import { Loader } from '../../components/Loader/Loader';
import {STATUS} from './../../constants/status.constants';
import { useLocation } from 'react-router-dom';

const TweetsPage = () => {
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState(STATUS.idle);
    const location = useLocation();
    const dispatch = useDispatch();
    console.log(setStatus);

    const handleLoadMore = () => {
        setPage(prev => (prev + 1 ));
        dispatch(getUsersThunk(page + 1));
    }

    useEffect(() => {
        dispatch(getUsersThunk());
    }, [dispatch]);

    return (
        <div>
            <BtnGoHome  to={location.state?.from ?? '/'}>
                <IconArrow><BsArrowLeft/></IconArrow> Go Home
            </BtnGoHome>
            <UserList/>
        {status === STATUS.loading ? (
        <Loader />
        ) : ( <BtnLoadMore onClick={handleLoadMore}>LOAD MORE</BtnLoadMore> )}
        </div>
    );
};

export default TweetsPage;