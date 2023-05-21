import { useState } from 'react';
import {Card, MainLogo, Button, Tweets, Followers, Text, Line, BoxAvatar, Avatar, BgImg, ButtonFollowing} from './UserCard.styled';

export const UserCard = ({userData}) => {
    const { avatar, tweets, followers, user } = userData;
    const [isFollowing, setIsFollowing] = useState(false);
    const [followerCount, setFollowerCount] = useState(followers);
    

    const formattedTweets = tweets.toLocaleString('en-US');
  const formattedFollowers = followerCount.toLocaleString('en-US');

    const followButtonText = isFollowing ? 'FOLLOWING' : 'FOLLOW';

    const handleFollowToggle = () => {
        if (isFollowing) {
            setFollowerCount(prevCount => prevCount - 1);
        } else {
            setFollowerCount(prevCount => prevCount + 1);
        }
        setIsFollowing(prevStatus => !prevStatus);
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
            {isFollowing ? (<ButtonFollowing onClick={handleFollowToggle} >{followButtonText}</ButtonFollowing >) : (<Button onClick={handleFollowToggle} >{followButtonText}</Button >)}
        </Card>
    )
}