import {Card, MainLogo, Button, Tweets, Followers, Text, Line, BoxAvatar, Avatar, BgImg} from './UserCard.styled';

export const UserCard = ({userData}) => {
    const { avatar, tweets, followers, user } = userData;

    const formattedTweets = tweets.toLocaleString('en-US');
    const formattedFollowers = followers.toLocaleString('en-US');

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
            <Button >FOLLOW</Button >
        </Card>
    )
}