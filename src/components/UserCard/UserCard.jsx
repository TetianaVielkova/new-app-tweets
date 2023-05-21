import { useState } from 'react';
import { Card, MainLogo, Button, Tweets, Followers, Text, Line, BoxAvatar, Avatar, BgImg, ButtonFollowing } from './UserCard.styled';
import PropTypes from 'prop-types';
import { usersApi } from '../../servises/UsersApi';

export const UserCard = ({ userData }) => {
    const { id, avatar, tweets, followers, user, following } = userData;
    const [followStatus, setFollowStatus] = useState(following);
    const [followQty, setFollowQty] = useState(followers);

    const formattedTweets = tweets.toLocaleString('en-US');
    const formattedFollowers = followQty.toLocaleString('en-US');

    const followButtonText = followStatus ? 'FOLLOWING' : 'FOLLOW';

    const handleFollowToggle = async () => {
    setFollowStatus(!followStatus);

    try {
        const {data} = await usersApi.put(`/users/${id}`, {
        following: !followStatus,
        followers: followQty + (followStatus ? -1 : 1),
    });
        setFollowQty(data.followers);
    } catch (error) {
        console.log(error);
    }
};

    return(
        <Card>
            <MainLogo />
            <BgImg/>
            <Line/>
            <BoxAvatar>
                <Avatar src={avatar} alt={user} />
            </BoxAvatar>
            
            <Text>
                <Tweets> {formattedTweets} tweets</Tweets>
                <Followers>{formattedFollowers} Followers</Followers>
            </Text>
            {followStatus ? (<ButtonFollowing onClick={() => handleFollowToggle(id)} >{followButtonText}</ButtonFollowing >) : (<Button onClick={handleFollowToggle} >{followButtonText}</Button >)}
        </Card>
    )
}


UserCard.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        tweets: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        following: PropTypes.bool,
    }),
};