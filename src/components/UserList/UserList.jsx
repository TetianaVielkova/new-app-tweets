import { useSelector } from 'react-redux';
import { UserCard } from '../UserCard/UserCard';
import { CardItem, CardList} from './UserList.styled';


export const UserList = () => {
    const users = useSelector(state => state.users.users);


    return(
        <CardList>
            {users && 
                users.map(user => 
                    <CardItem key={user.id}>
                        <UserCard userData={user} />
                    </CardItem>
                )}
        </CardList>
        
    )
}