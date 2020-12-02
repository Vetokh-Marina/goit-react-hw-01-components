import PropTypes from 'prop-types';
import s from "../FriendList/friendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
    return (
       <ul>
      {friends.map(friend => (
      <li className={s.item} key={friend.id}>
          <FriendListItem
            status={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
       </li>
 ))}
    </ul>
  );
}
export default FriendList;

FriendList.propTypes={
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
